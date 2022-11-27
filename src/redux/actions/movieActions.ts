import {ActionTypes} from './actionTypes';

export interface MovieSearchAction {
  readonly type: ActionTypes.ON_SEARCH_MOVIE;
  payload: any;
}



export interface FavoriMovieAction {
  readonly type: ActionTypes.ON_FAV_MOVIE_ADD;
  payload: any;
}

export type MovieAction = MovieSearchAction | FavoriMovieAction;
