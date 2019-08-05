import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export function usePrevious(value: any) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}


export const useToast = (state: any, processFlag = 'isRunning') => {
    const flag = state[processFlag];
    const prevIsRunning = usePrevious(flag);
    useEffect(() => {
        if (prevIsRunning && !flag) { // if the request is finished
            if (state.error) {
                toast.error(state.error);
            } else {
                toast.success('GOOD');
            }
        }
    }, [flag, prevIsRunning, state.error]);
};
