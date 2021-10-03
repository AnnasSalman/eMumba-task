import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { getFullUserApi } from "../../API/API";

function* getFullUserSaga(action) {
    try {
        const {id,} = action.payload;
        const response = yield call(() => getFullUserApi(id));
        yield put({type: types.GET_USER_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: types.GET_USER_ERROR, error});
    }
}

export function* watchGetFullUserSaga() {
    yield takeEvery(types.GET_USER_REQUESTED, getFullUserSaga);
}
