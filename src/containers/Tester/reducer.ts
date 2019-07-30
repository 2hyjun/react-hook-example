import { AnyAction } from 'redux';

export interface TestState {
    isRunning: boolean;
    success: string | null;
    error: string | null;
}

const initialState: TestState = {
    isRunning: false,
    success: null,
    error: null,
};

export enum Types {
    TEST_REQUEST = 'TEST_REQUEST',
    TEST_SUCCESS = 'TEST_SUCCESS',
    TEST_FAILURE = 'TEST_FAILURE',
}

export const Actions = {
    testRequest: (): AnyAction => ({
        type: Types.TEST_REQUEST,
    }),
    testSuccess: (message: string): AnyAction => ({
        type: Types.TEST_SUCCESS,
        payload: message
    }),
    testFailure: (error: any): AnyAction => ({
        type: Types.TEST_FAILURE,
        error: error,
    }),
};

export const reducer = (state: TestState = initialState, action: AnyAction): TestState => {
    switch (action.type) {
        case Types.TEST_REQUEST:
            return { ...state, isRunning: true, error: null, success: null };
        case Types.TEST_SUCCESS:
            return { ...state, isRunning: false, error: null, success: action.payload };
        case Types.TEST_FAILURE:
            return { ...state, error: action.error, isRunning: false, success: null };
        default:
            return state;
    }
};
