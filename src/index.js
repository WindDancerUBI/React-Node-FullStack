import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { 一营,骑兵连,NotFound } from "./App";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter,Route,NavLink,Switch,Redirect } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <h1>欢迎来到战场</h1>
        <BrowserRouter> 
            <ul>
                <li><NavLink to='/' activeClassName="selected">团长</NavLink></li>
                <li><NavLink to='/yiying' activeClassName="selected">一营</NavLink></li>
                <li><NavLink to='/qibinglian' activeClassName="selected">骑兵连</NavLink></li>
            </ul>
            {/* Switch只会匹配到第一个符合要求的组件 */}
            <Switch>
                <Route path='/' exact component={App}></Route>
                <Route path='/yiying' exact component={一营}></Route>
                <Route path='/qibinglian' exact component={骑兵连}></Route>
                <Route path='/:location' exact component={NotFound}></Route>
                <Redirect path='/'></Redirect>    
            </Switch> 
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
