import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { getUsersApi } from "../../API/API";

function* getUsersSaga(action) {
    try {
        const {page} = action.payload;
        const response = yield call(() => getUsersApi(page));
        yield put({type: types.GET_USERS_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: types.GET_USERS_ERROR, error});
    }
}

export function* watchGetUsersSaga() {
    yield takeEvery(types.GET_USERS_REQUESTED, getUsersSaga);
}
