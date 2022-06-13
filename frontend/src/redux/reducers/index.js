import { combineReducers } from "redux";
import { auth } from "./auth";
import { pets } from "./pet";
import { user } from "./user";
import { users } from "./users";
import { loadeds } from "./loadeds";
import {requests} from "./requests"
import {chat} from "./chat"

const Reducers = combineReducers({
  auth, pets, requests,
  userState: user,
  usersState: users,
  loadeds,
  chat

});
export default Reducers;

//agregates every single reducer file you have
