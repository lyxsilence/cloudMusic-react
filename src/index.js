import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './redux/store.js';

import Layout from "./container/Layout/Layout";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <AudioTest /> */}
            {/* <Test /> */}
            <Layout />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
