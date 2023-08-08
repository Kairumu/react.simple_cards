import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider as AlertProvider } from "react-alert";
import reportWebVitals from './reportWebVitals';

import App from './App';
import store from './Data';
import Alert from './Components/Alert';
import { Provider } from 'react-redux'

import './index.scss';

const alertOptions = {
    timeout: 6500,
    position : positions.TOP_RIGHT,
    containerStyle : {
        zIndex : "100000000",
    }
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AlertProvider template={Alert} {...alertOptions}>
                <App />
            </AlertProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
