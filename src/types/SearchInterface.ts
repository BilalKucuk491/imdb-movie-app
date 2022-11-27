enum ActionType {
  SEARCH_MOVIE = ' SEARCH_MOVIE',
}

export interface SearchAction {
  type: ActionType;
  searchText: string;
}

