import { combineReducers } from "redux";
import { auth } from "./auth";
import { pets } from "./pet";
import { user } from "./user";
import { users } from "./users";
import { loadeds } from "./loadeds";
import {requests} from "./requests"

const Reducers = combineReducers({
  auth, pets, requests,
  userState: user,
  usersState: users,
  loadeds

});
export default Reducers;

//agregates every single reducer file you have
