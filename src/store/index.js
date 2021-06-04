import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const reducers = combineReducers({
    usersPage: usersReducer
});
const state = createStore(reducers, composeWithDevTools());

export default state;