import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './Filter.css';

export interface FilterOption {
  displayName: string;
  value: any;
}

interface FilterState {
  currentOption: FilterOption;
}

interface FilterProps {
  name: string;
  displayName: string;
  options: FilterOption[];
  onUpdate?: (optionValue: any) => void;
}

export class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props);

    this.state = {
      currentOption: props.options[0],
    };
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

  onSelect(eventKey: string) {
    const i = parseInt(eventKey);

    const newValue = this.props.options[i].value;

    if (newValue !== this.state.currentOption.value) {
      if (this.props.onUpdate) {
        this.props.onUpdate(newValue);
      }

      this.setState({
        currentOption: newValue,
      });
    }
  }


  render() {
    return (
      <Dropdown id={'filter-' + this.props.name} onSelect={this.onSelect.bind(this)}>
        <Dropdown.Toggle id={'dropdown-' + this.props.name}>
          {this.props.displayName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.options.map((option: FilterOption, i: number) => {
            return (<Dropdown.Item eventKey={i.toString()}>{option.displayName}</Dropdown.Item>);
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
