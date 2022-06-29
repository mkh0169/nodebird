import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import postSaga from './post';



//call 동기 함수 호출
//fork 비동기


export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),
    ]);
}