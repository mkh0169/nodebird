import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';


axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;
//call 동기 함수 호출
//fork 비동기


export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),
    ]);
}