import { reducer as tester, TestState } from '../containers/Tester/reducer';
import { combineReducers } from 'redux';

export interface AppState {
    tester: TestState
}

export default combineReducers({
    tester
});

