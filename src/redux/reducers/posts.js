import { types } from "../action-types";

const initialState = {
    loading: false,
    posts: [],
    error: {},
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS_REQUESTED:
            return {
                ...state,
                loading: true,
                error: {},
            }
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: {},
            }
        case types.GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                posts: [],
            }
        default:
            return state;
    }
}

export default postsReducer;
