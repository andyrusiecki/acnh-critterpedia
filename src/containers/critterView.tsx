import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setDonate } from '../actions';
import { RootState, CollectionType, Critter } from '../types';
import { getCritterByID, getCollectionState } from "../util";
import { useParams } from 'react-router-dom';
import { CritterView } from '../components/critterView';

interface CritterViewContainerProps {
  critter: Critter;
  donated: boolean;

  setDonate: (id: number, isDonated: boolean) => void;
}

interface CritterViewURLParams {
  id?: string;
}

function getMapStateToPropsFunc(collectionType: CollectionType) {
  return function(state: RootState) {
    let idStr = useParams<CritterViewURLParams>().id;

    if (!idStr) {
      console.log("Not ID string found");
      idStr = '1';
    }

    const id = parseInt(idStr, 10);

    return {
      critter: getCritterByID(collectionType, id) as Critter,
      donated: getCollectionState(collectionType, state).donations.includes(id),
    };
  }
}

function getMapDispatchToPropsFunc(collectionType: CollectionType) {
  return function(dispatch: Dispatch<any>) {
    return {
      setDonate: (id: number, isDonated: boolean) => {
        dispatch(setDonate(collectionType, id, isDonated));
      },
    };
  }
}

const FishViewContainerComponent = (props: CritterViewContainerProps) => {
  return (
    <div className="fish-view-container">
      <CritterView critter={props.critter} donated={props.donated} setDonate={props.setDonate}/>
    </div>
  );
}

const BugsViewContainerComponent = (props: CritterViewContainerProps) => {
  return (
    <div className="bugs-view-container">
      <CritterView critter={props.critter} donated={props.donated} setDonate={props.setDonate}/>
    </div>
  );
}

const SeaCreaturesViewContainerComponent = (props: CritterViewContainerProps) => {
  return (
    <div className="sea-creatures-view-container">
      <CritterView critter={props.critter} donated={props.donated} setDonate={props.setDonate}/>
    </div>
  );
}

export const FishViewContainer = connect(getMapStateToPropsFunc('fish'), getMapDispatchToPropsFunc('fish'))(FishViewContainerComponent);
export const BugsViewContainer = connect(getMapStateToPropsFunc('bugs'), getMapDispatchToPropsFunc('bugs'))(BugsViewContainerComponent);
export const SeaCreaturesViewContainer = connect(getMapStateToPropsFunc('sea-creatures'), getMapDispatchToPropsFunc('sea-creatures'))(SeaCreaturesViewContainerComponent);
