import { CURRENT_USERS, CLEAR_DATA  } from "../constants";

const initialState = {
    users: []
}
export const loadeds = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USERS:
            return {
                ...state,
                users: action.users
            }
        case CLEAR_DATA:
            return initialState
        default:
            return state;
    }
}