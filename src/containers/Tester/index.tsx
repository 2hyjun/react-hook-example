import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './reducer';
import { AppState } from '../../store/reducer';
import { useToast } from '../../lib/hooks';

const Tester: React.FunctionComponent = () => {
    const test = useSelector((state: AppState) => state.tester);
    const dispatch = useDispatch();
    const initiateTest = useCallback(() => dispatch(Actions.testRequest()), [dispatch]);
    useToast(test);

    return (
        <div>
            {JSON.stringify(test)}
            <button onClick={initiateTest}>TEST</button>
        </div>
    );
};

export default Tester;
