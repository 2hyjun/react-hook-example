import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducer';
import rootSaga from './store/sagas';
// @ts-ignore
import sagaMonitor from '@redux-saga/simple-saga-monitor';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
