import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './App';
import './styles/index.scss';
import reducers from './reducers/reducer';

const store = createStore(reducers);
ReactDOM.render(
    (
        <Provider store={store}>
        <App />
        </Provider>
    ),
    document.getElementById('root'),
);


