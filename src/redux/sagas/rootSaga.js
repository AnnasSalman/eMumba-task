import { all } from "redux-saga/effects";

import {watchGetUsersSaga} from "./getUsersSaga";
import {watchGetFullUserSaga} from "./getFullUserSaga";
import {watchGetPostsSaga} from "./getPostsSaga";

export default function* RootSaga() {
    yield all([watchGetUsersSaga(), watchGetFullUserSaga(), watchGetPostsSaga()]);
}
