import {types} from "./action-types";

export const getUsers = (page) => {
    return {
        type: types.GET_USERS_REQUESTED,
        payload: {page},
    }
}

export const getFullUser = (userId) => {
    return {
        type: types.GET_USER_REQUESTED,
        payload: {id: userId},
    }
}

export const getPosts = (userId) => {
    return {
        type: types.GET_POSTS_REQUESTED,
        payload: {id: userId},
    }
}


