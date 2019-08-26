/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 15:29:21
 * @LastEditTime: 2019-08-24 16:38:47
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import store from "./redux/store";
import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from './component/authRoute/anthRoute';
import BossInfo from "./container/bossInfo/bossInfo";
import GeniusInfo from "./container/geniusInfo/geniusInfo";
import DashBoard from "./container/dashBoard/dashBoard";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthRoute></AuthRoute>
            <Switch>  
                <Route path='/geniusinfo' component={GeniusInfo}></Route>                
                <Route path='/bossinfo' component={BossInfo}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component = {Register}></Route>
                <Route component = {DashBoard}></Route>                
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
