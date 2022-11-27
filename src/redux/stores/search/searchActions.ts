import { SearchAction } from "../../../types/SearchInterface";

const searchMovie = (payload: {type: SearchAction}) => ({
  payload,
});

export {searchMovie};
