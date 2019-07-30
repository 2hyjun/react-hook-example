import { put, call, takeLatest, takeEvery }  from 'redux-saga/effects';
import { Actions, Types } from './reducer';

const test = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve()
        } else {
            reject()
        }
    });
};

function* testRequest() {
    try {
        yield test();
        yield put(Actions.testSuccess('SUCCESS!'))
    } catch {
        yield put(Actions.testFailure('FAILED!'));
    }
}

export default function* defaultSaga() {
    yield takeEvery(Types.TEST_REQUEST, testRequest)
}