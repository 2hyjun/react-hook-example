import { put, takeLatest, call, delay }  from 'redux-saga/effects';
import { Actions, Types } from './reducer';

const test = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        if (rand > 0.5) {
            resolve()
        } else {
            reject()
        }
    });
};

function* testRequest() {
    try {
        yield delay(1000);
        yield call(test);
        yield put(Actions.testSuccess('SUCCESS!'))
    } catch {
        yield put(Actions.testFailure('FAILED!'));
    }
}

export default function* defaultSaga() {
    yield takeLatest(Types.TEST_REQUEST, testRequest)
}