import { USER_POST_STATE_CHANGE, USER_STATE_CHANGES,CLEAR_DATA, USER_FAV_STATE_CHANGE, CLEAR_FAVS } from "../constants"

//para sacar posts del current user

const initialState = {
        currentUser: null,
        posts: [],
        favs: []
}

export const user = (state = initialState, action) => {
        switch (action.type) {
                case USER_STATE_CHANGES:
                        return {
                                ...state,
                                currentUser: action.currentUser
                        }
                case USER_POST_STATE_CHANGE:
                        return {
                                ...state,
                                posts: action.posts
                        }
                case CLEAR_DATA:
                        return initialState
                case USER_FAV_STATE_CHANGE:
                        return {
                                ...state,
                                favs: action.favs
                        }
                case CLEAR_FAVS:
                        return {
                                ...state,
                                favs: []
                        }
                default:
                        return state;
        }
}