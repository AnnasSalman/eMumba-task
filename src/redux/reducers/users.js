import { types } from "../action-types";

const initialState = {
    loading: false,
    users: {},
    males: [],
    females: [],
    error: {},
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
                males: [],
                females: [],
            }
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case types.GET_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                users: action.payload
            }
        case types.GET_USER_SUCCESS:
            console.log(action.payload.gender);
            return {
                ...state,
                males: [...state.males, ...(action.payload.gender === 'male' ? [action.payload] : [])],
                females: [...state.females, ...(action.payload.gender === 'female' ? [action.payload]: [])],
            }
        default:
            return state;
    }
}

export default usersReducer;
