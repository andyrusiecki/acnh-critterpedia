import React from 'react';
import { Critter } from '../shared/interfaces';
import { CritterTile } from './critterTile';
import { Pagination } from './pagination';

import './critterList.scss';

interface CritterListProps<T extends Critter> {
  critters: T[];
  critterType: 'fish' | 'bug';
  selectedIDs: number[];
  donatedIDs: number[];
  setDonate: (id: number, isDonated: boolean) => void;
}

interface CritterListState {
  paginationEnabled: boolean;
  currentPage: number;
}

export class CritterList<T extends Critter> extends React.Component<CritterListProps<T>, CritterListState> {
  readonly MIN_WIDTH_PAGINATION: number = 992; // same as container media query
  readonly MAX_PER_PAGE: number = 40;

  private resizeHandler: () => void;

  constructor(props: CritterListProps<T>) {
    super(props);

    this.state = {
      paginationEnabled: this.shouldEnablePagination(),
      currentPage: 0,
    };

    this.resizeHandler = () => {
      this.checkForResize();
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  private shouldEnablePagination(): boolean {
    return window.innerWidth >= this.MIN_WIDTH_PAGINATION;
  }

  private checkForResize() {
    const paginationEnabled = this.shouldEnablePagination();

    if (this.state.paginationEnabled !== paginationEnabled) {
      this.setState({
        paginationEnabled,
        currentPage: this.state.currentPage,
      });
    }
  }

  render() {
    if (this.state.paginationEnabled) {
      const numPages = Math.floor(this.props.critters.length / this.MAX_PER_PAGE); // 5 rows, 8 columns

      const pages = [];

      for (let i = 0; i < numPages; i++) {
        let items = [];

        for (let k = i * this.MAX_PER_PAGE; k < (i + 1) * this.MAX_PER_PAGE; k++) {
          const show = this.props.selectedIDs.includes(this.props.critters[k].id);
          const donated = this.props.donatedIDs.includes(this.props.critters[k].id);

          items.push(<CritterTile<T> critter={this.props.critters[k]} critterType={this.props.critterType} active={show} donated={donated} setDonate={this.props.setDonate} />)
        }

        pages.push(
          <div className={`critter-list ${this.props.critterType}`}>
            {items}
          </div>
        )
      }
      return (
        <Pagination pages={pages} />
      );
    }

    return (
      <div className={`critter-list hor-layout ${this.props.critterType}`}>
        {this.props.critters.map((critter: T) => {
          const show = this.props.selectedIDs.includes(critter.id);
          const donated = this.props.donatedIDs.includes(critter.id);

          return (
            <CritterTile<T> critter={critter} critterType={this.props.critterType} active={show} donated={donated} setDonate={this.props.setDonate} />
          );
        })}
      </div>
    );
  }
}
