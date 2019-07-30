import React from 'react';
import Tester from './Tester';
import { ToastContainer} from 'react-toastify';

const App: React.FunctionComponent = () => {
    return <div>
        <Tester />
        <ToastContainer />
    </div>;
};

export default App;
