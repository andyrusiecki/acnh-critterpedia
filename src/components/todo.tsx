import React from 'react';
import { CollectionType, Critter } from '../types';
import{ CritterTile } from './critterTile';

import './todo.scss';


interface TodoProps {
  title: string
  critters: Critter[];

  setDonate: (collectionType: CollectionType, id: number, isDonated: boolean) => void;
}

export class Todo extends React.Component<TodoProps> {
  render() {
    return (
      <div className="todo">
        <h2>{this.props.title}</h2>
        <div className="todo-list">
          {this.props.critters.map((critter: Critter) => {
            return (
              <CritterTile
                critter={critter}
                active={true}
                donated={false}
                setDonate={(id: number, isDonated: boolean) => {
                  this.props.setDonate(critter.type, id, isDonated);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
