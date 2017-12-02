import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import promise from "redux-promise";

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, { }, applyMiddleware(promise));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
 document.querySelector('#root')
);
