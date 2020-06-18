import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './filter.scss';

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
  defaultOption?: FilterOption;
  onUpdate?: (optionValue: any) => void;
}

export class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props);

    this.state = {
      currentOption: props.defaultOption || props.options[0],
    };
  }

  onSelect(eventKey: string) {
    const i = parseInt(eventKey);

    const newOption = this.props.options[i];

    if (newOption.value !== this.state.currentOption.value) {
      if (this.props.onUpdate) {
        this.props.onUpdate(newOption.value);
      }

      this.setState({
        currentOption: newOption,
      });
    }
  }

  render() {
    return (
      <Dropdown id={'filter-' + this.props.name} onSelect={this.onSelect.bind(this)}>
        <Dropdown.Toggle id={'dropdown-' + this.props.name}>
          {this.props.displayName}: {this.state.currentOption.displayName}
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
