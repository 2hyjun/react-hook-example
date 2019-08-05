import { AnyAction } from 'redux';
import { createActions, handleActions } from 'redux-actions';

export interface TestState {
    isRunning: boolean;
    error: string | null;
}

const initialState: TestState = {
    isRunning: false,
    error: null,
};

export enum Types {
    TEST_REQUEST = 'TEST_REQUEST',
    TEST_SUCCESS = 'TEST_SUCCESS',
    TEST_FAILURE = 'TEST_FAILURE',
}

export interface Actions {
    testRequest: () => AnyAction;
    testSuccess: (message: string) => AnyAction;
    testFailure: (error: string) => AnyAction;
}

// @ts-ignore
export const Actions: Actions = createActions({
    [Types.TEST_REQUEST]: () => {},
    [Types.TEST_SUCCESS]: (message: string) => ({ message }), // return payload
    [Types.TEST_FAILURE]: (error: string) => ({ error }),
});

const handleTestRequest = (state: TestState) => ({
    ...state,
    isRunning: true,
    error: null,
});

const handleTestSuccess = (state: TestState) => ({
    ...state,
    isRunning: false,
    error: null,
});

const handleTestFailure = (state: TestState, { payload }: any) => ({
    ...state,
    isRunning: false,
    error: payload.error,
});

export const reducer = handleActions(
    {
        [Types.TEST_REQUEST]: handleTestRequest,
        [Types.TEST_SUCCESS]: handleTestSuccess,
        [Types.TEST_FAILURE]: handleTestFailure,
    },
    initialState,
);

