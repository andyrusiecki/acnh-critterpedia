import React from 'react';
import './pagination.scss';

interface PaginationProps {
  pages: JSX.Element[];
}

interface PaginationState {
  currentPage: number;
  lastPage: number;
}

export class Pagination extends React.Component<PaginationProps, PaginationState> {
  readonly MIN_WIDTH_PAGINATION: number = 992; // same as container media query
  readonly state: PaginationState = {
    currentPage: 0,
    lastPage: 1,
  };

  setPage(pageNum: number) {
    const lastPage = this.state.currentPage;

    this.setState({
      currentPage: pageNum,
      lastPage,
    });
  }

  render() {
    return (
      <div className="pagination-container">
        {this.props.pages.map((page: JSX.Element, index: number) => {
          let classList: string[] = [ 'page' ];

          if (index === this.state.currentPage) {
            classList.push('active');
          } else if (index === this.state.lastPage) {
            if (this.state.lastPage < this.state.currentPage) {
              classList.push('last-left');
            } else {
              classList.push('last-right');
            }
          }

          return (
            <div className={classList.join(' ')}>
              {page}
            </div>
          );
        })}
        <div className={"pagination-controls" + (this.props.pages.length < 2 ? " hide" : "")}>
          <div
            className={"prev-page" + (this.state.currentPage === 0 ? " hide" : "")}
            onClick={() => {
              this.setPage(this.state.currentPage - 1);
            }}
          >
            &larr;
          </div>

          <div
            className="current-page"
          >
            {this.state.currentPage + 1}
          </div>

          <div
            className={"next-page" + (this.state.currentPage === this.props.pages.length - 1 ? " hide" : "")}
            onClick={() => {
              this.setPage(this.state.currentPage + 1);
            }}
          >
            &rarr;
          </div>
        </div>
      </div>
    );
  }
}
