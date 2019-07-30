import { fork, all } from 'redux-saga/effects'
import test from '../containers/Tester/saga'

export default function* rootSaga() {
    yield all([
        test
    ].map((saga) => fork(saga)))
}