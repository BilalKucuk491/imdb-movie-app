import {SearchAction} from '../../../types/SearchInterface';

const INITIAL_STATE = 0;

const searchReducer = (state = INITIAL_STATE, action: {type: SearchAction}) => {
  switch (action.type.type) {
    case action.type.type:
      return console.log('Merhaba');

    default:
      return state;
      break;
  }
};

export default searchReducer;
