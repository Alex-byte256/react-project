import { combineReducers, createStore } from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import friendReduser from "./friend-reduser";
import usersReduser from "./users-reduser";

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  friendPage: friendReduser,
  usersPage: usersReduser,
});

let store = createStore(reducers);

export default store;
