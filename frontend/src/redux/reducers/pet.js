import { CURRENT_USER_PETS, OTHER_USER_PETS } from "../constants";

const initialState = {
    currentUserPets:null,
    otherUserPets:null
};

export const pets = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_PETS:
      return {
        ...state, //keep parameter of every variable the state has
        currentUserPets: action.currentUserPets,
      };
    case OTHER_USER_PETS:
      return{
        ...state,
        otherUserPets: action.otherUserPets,
      }
    default:
      return state;
  }
};
