import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import store from "./redux/store";
import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from './component/authRoute/anthRoute';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Switch> */}
                <AuthRoute></AuthRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component = {Register}></Route>
            {/* </Switch> */}
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
