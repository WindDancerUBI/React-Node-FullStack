import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { 一营,骑兵连 } from "./App";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter,Route,Link } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <h1>欢迎来到战场</h1>
        <BrowserRouter> 
            <ul>
                <li><Link to='/'>团长</Link></li>
                <li><Link to='/yiying'>一营</Link></li>
                <li><Link to='/qibinglian'>骑兵连</Link></li>
            </ul>
        
            <Route path='/' exact component={App}></Route>
            <Route path='/yiying' exact component={一营}></Route>
            <Route path='/qibinglian' exact component={骑兵连}></Route>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
