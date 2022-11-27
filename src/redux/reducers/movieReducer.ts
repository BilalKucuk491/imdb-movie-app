import {ActionTypes} from '../actions/actionTypes';
import {MovieAction} from '../actions/movieActions';

export interface MovieState {
  searchText: string;
}

const INITIAL_STATE = {
  searchText: 'narnia',
};

export const MovieReducer = (
  state: MovieState = INITIAL_STATE,
  action: MovieAction,
) => {
  switch (action.type) {
    case ActionTypes.ON_SEARCH_MOVIE:
      return {...state, searchText: action.payload};

    case ActionTypes.ON_FAV_MOVIE_ADD:
      return {...state, searchText: action.payload};

    default:
      return state;
  }
};
