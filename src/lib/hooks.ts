import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useToast = (state: any) => {
    useEffect(() => {
        if (state.error && !state.success) {
            toast.error(state.error);
        } else if (!state.error && state.success) {
            toast.success('GOOD');
        }
    }, [state.error, state.success]);
};
