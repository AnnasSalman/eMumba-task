import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { getPostsApi } from "../../API/API";

function* getPostsSaga(action) {
    try {
        const {id} = action.payload;
        const response = yield call(() => getPostsApi(id));
        yield put({type: types.GET_POSTS_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: types.GET_POSTS_ERROR, error});
    }
}

export function* watchGetPostsSaga() {
    yield takeEvery(types.GET_POSTS_REQUESTED, getPostsSaga);
}
