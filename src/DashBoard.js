import React, { Component } from 'react'
import { connect } from "react-redux";
import { yiYing,qiBingLian,NotFound } from "./App";
import App from './App'
import { BrowserRouter,Route,NavLink,Switch,Redirect } from "react-router-dom";
import { loginIn,loginOut } from "./store";

@connect(
    (state) => ({isLoginIn:state.loginOperation.isAuth}),
    (dispatch) => ({
        loginOut:() => dispatch({type:"LOGIN_OUT"})
    })
    // {loginOut}
)
class DashBoard extends Component {
    render() {
        const toLogin = <Redirect to='/login' />
        const content = 
        (<div>
            <h1>欢迎来到战场</h1>
            <button onClick={this.props.loginOut}>注销</button>
            <BrowserRouter> 
                <ul>
                    <li><NavLink to='/dashboard' >团长</NavLink></li>
                    <li><NavLink to='/dashboard/yiying' >一营</NavLink></li>
                    <li><NavLink to='/dashboard/qibinglian' >骑兵连</NavLink></li>
                </ul>
                {/* Switch只会匹配到第一个符合要求的组件 */}
                <Switch>
                    <Route path='/dashboard' exact component={App}></Route>
                    <Route path='/dashboard/yiying' component={yiYing}></Route>
                    <Route path='/dashboard/qibinglian' component={qiBingLian}></Route>
                    <Route path='/dashboard/:location' component={NotFound}></Route> 
                </Switch> 
            </BrowserRouter>
        </div>)
        return (
            this.props.isLoginIn?content:toLogin
        )
    }
}

export default DashBoard