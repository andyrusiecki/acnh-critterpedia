import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './Filter.css';

export interface Filter {
  name: string;
  displayName: string;
  options: FilterOption[];
  defaults: any[];
  allowMultiple: boolean;
  validationGenerator: FilterValidationGenerator;
}

export interface FilterOption {
  displayName: string;
  value: any;
}

export type FilterValidationGenerator = (args: any[]) => FilterValidation;
export type FilterValidation = (item: any) => boolean;

interface FilterState {
  currentValues: {[name: string]: any[]};
}

interface FilterProps {
  filters: Filter[];
  onUpdate?: (validates: FilterValidation[]) => void;
}

export class FilterComponent extends React.Component<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props);

    this.state = {
      currentValues: {},
    };

    for (let filter of props.filters) {
      this.state.currentValues[filter.name] = filter.defaults;
    }
  }

  componentDidUpdate(prevProps: FilterProps, prevState: FilterState) {
    if (
      this.props.onUpdate !== undefined &&
      this.didValuesChange(prevState.currentValues, this.state.currentValues)
    ) {
      const validations = this.getCurrentValidations();
      this.props.onUpdate(validations);
    }
  }

  private didValuesChange(prevValues: {[name: string]: any[]}, newValues: {[name: string]: any[]}): boolean {
    for (let filterName in newValues) {
      const prev = prevValues[filterName];
      const curr = newValues[filterName];

      if (prev.length !== curr.length) {
        return true;
      }

      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== curr[i]) {
          return true;
        }
      }
    }

    return false;
  }

  getDropdownChangeFunc(filter: Filter) {
    return (eventKey: string) => {
      const i = parseInt(eventKey);

      const newValue = filter.options[i].value;
      let filterValues = this.state.currentValues[filter.name];

      if (newValue === null) {
        filterValues = [];
      } else if (!filter.allowMultiple) {
        filterValues = [
          newValue,
        ];
      } else {
        // TODO: Allow multiple values
        console.log('allowMultiple not implemented yet!');
      }

      this.setState({
        currentValues: {
          ...this.state.currentValues,
          [filter.name]: filterValues,
        }
      });
    }
  }

  private getCurrentValidations(): FilterValidation[] {
    return this.props.filters
      .map(filter => filter.validationGenerator.apply(
        undefined,
        [ this.state.currentValues[filter.name] ],
      ));
  }

  render() {
    return (
      <div className="filter">
        {this.props.filters.map(this.renderFilter.bind(this))}
      </div>
    );
  }

  private renderFilter(filter: Filter) {
    return (
      <Dropdown id={'filter-' + filter.name} onSelect={this.getDropdownChangeFunc(filter).bind(this)}>
        <Dropdown.Toggle id={'dropdown-' + filter.name}>
          {filter.displayName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {filter.options.map((option: FilterOption, i: number) => {
            return (<Dropdown.Item eventKey={i.toString()}>{option.displayName}</Dropdown.Item>);
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
