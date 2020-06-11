import React from 'react';
import { FilterComponent, Filter, FilterOption, FilterValidation } from './Filter';
import { FishListComponent } from './FishList';
import { AllFish, FishLocationDisplay } from '../shared/constants';
import { Fish, FishLocation, Rarity, RarityDisplay } from '../shared/interfaces';

import './FishView.css';

interface FishViewState {
  currentFilterValidations: FilterValidation[];
}

export class FishViewComponent extends React.Component<{}, FishViewState> {
  filters: Filter[];

  constructor(props: {}) {
    super(props);

    this.filters = this.getFilters();
    this.state = {
      currentFilterValidations: [],
    };
  }

  private getFilters(): Filter[] {
    return [
      this.getTimeFilter(),
      this.getRarityFilter(),
      this.getLocationFilter(),
    ];
  }

  private getTimeFilter(): Filter {
    return {
      name: 'time',
      displayName: 'Time',
      allowMultiple: false,
      options: [
        {
          displayName: 'All',
          value: null,
        },
        {
          displayName: 'Current Time',
          value: 'current-time',
        },
      ],
      defaults: [],
      validationGenerator: (times: string[]) => {
        return (fish: Fish) => {
          if (times.length === 0) return true;
          if (times[0] === 'all') return true;

          let hour: number, month: number;
          if (times[0] === 'current-time') {
            const date = new Date();
            hour = date.getHours();
            month = date.getMonth() + 1;
          } else  {
            // custom time?
            hour = 12;
            month = 9;
          }

          return this.isAvailableAt(fish, hour, month);
        };
      },
    };
  }

  private getRarityFilter(): Filter {
    const options: FilterOption[] = [
      {
        displayName: 'All',
        value: null,
      }
    ];

    for (const [value, displayName] of RarityDisplay.entries()) {
      options.push({
        displayName,
        value,
      });
    }

    return {
      name: 'rarity',
      displayName: 'Rarity',
      allowMultiple: false,
      options,
      defaults: [],
      validationGenerator: (rarities: Rarity[]) => {
        return (fish: Fish) => {
          if (rarities.length === 0) return true;

          return rarities.includes(fish.rarity);
        };
      },
    };
  }

  private getLocationFilter(): Filter {
    const locationOptions: FilterOption[] = [
      {
        displayName: 'All',
        value: null,
      }
    ];

    for (const [value, displayName] of FishLocationDisplay.entries()) {
      locationOptions.push({
        displayName,
        value,
      });
    }

    return {
      name: 'location',
      displayName: 'Location',
      allowMultiple: false,
      options: locationOptions,
      defaults: [],
      validationGenerator: (locations: FishLocation[]) => {
        return (fish: Fish) => {
          if (locations.length === 0) return true;

          return locations.includes(fish.location);
        };
      },
    };
  }

  render() {
    const shouldShow = (fish: Fish) => {
      return this.state.currentFilterValidations.reduce(
        (prev: boolean, validate: FilterValidation) => {
        return prev && validate(fish);
      }, true);
    };

    return (
      <div>
        <FilterComponent filters={this.filters} onUpdate={this.filterUpdate.bind(this)}/>
        <FishListComponent items={AllFish} shouldDisplayItem={shouldShow} />
      </div>
    );
  }

  filterUpdate(filterValidations: FilterValidation[]) {
    this.setState({
      currentFilterValidations: filterValidations,
    });
  }

  private isAvailableAt(fish: Fish, hour?: number, month?: number): boolean {
    let isAvail = true;

    if (hour !== undefined) {
      isAvail = isAvail && this.isInTimeRanges(hour, fish.hourRanges)
    }

    if (month !== undefined) {
      isAvail = isAvail && this.isInTimeRanges(month, fish.monthRanges)
    }
    return isAvail;
  }

  private isInTimeRanges(time: number, ranges: number[][]): boolean {
    for (let [start, end] of ranges) {
      if (time >= start && time <= end) {
        return true;
      }
    }

    return false;
  }
}
