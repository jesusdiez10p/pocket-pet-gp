import { USER_STATE_CHANGE } from "../constants";

const initialState = {
  currentUser: null,
  loaded: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state, //keep parameter of every variable the state has
        currentUser: action.currentUser,
        loaded: action.loaded,
      };
    default:
      return state;
  }
};
