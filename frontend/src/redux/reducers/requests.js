

import { CURRENT_SHELTER_PET_REQUESTS,USERS_PETS_DATA } from "../constants";

const initialState = {
  currentShelterPetRequests: null,
  pets: []
};

export const requests = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SHELTER_PET_REQUESTS:
      return {
        ...state, //keep parameter of every variable the state has
        currentShelterPetRequests: action.currentShelterPetRequests,
      };
    case USERS_PETS_DATA:
      return {
        ...state,
        pets: [...state.pets, action.pets]
      }
    default:
      return state;
  }
};