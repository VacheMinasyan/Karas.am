import produce from "immer"
import MenuReducer from './Menu/reducer';
import { combineReducers } from "redux-immer";

export default combineReducers(produce, {
  Menu: MenuReducer,
})



