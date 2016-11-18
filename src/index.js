import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import store from "./store/index";

import SmartApp from "./containers/SmartApp";

ReactDOM.render(
    <Provider store={store}>
        <SmartApp />
    </Provider>, document.getElementById('root'));
