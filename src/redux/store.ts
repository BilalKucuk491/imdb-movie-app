import {createStore,combineReducers} from "redux"
import { MovieReducer } from "./reducers/movieReducer"

const rootReducer = combineReducers({
    searchText:MovieReducer
});

export const store =createStore(rootReducer)