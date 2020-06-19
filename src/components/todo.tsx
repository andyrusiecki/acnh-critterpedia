import React from 'react';
import { CollectionType, Fish } from '../shared';
import{ CritterTile } from './critterTile';

import './todo.scss';


interface TodoProps {
  title: string
  fish: Fish[];

  setDonate: (collectionType: CollectionType, id: number, isDonated: boolean) => void;
}

export class Todo extends React.Component<TodoProps> {
  render() {
    return (
      <div className="todo">
        <h2>{this.props.title}</h2>
        <div className="todo-list">
          {this.props.fish.map((fish: Fish) => {
            return (
              <CritterTile<Fish>
                critter={fish}
                critterType="fish"
                active={true}
                donated={false}
                setDonate={(id: number, isDonated: boolean) => {
                  this.props.setDonate('fish', id, isDonated);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
