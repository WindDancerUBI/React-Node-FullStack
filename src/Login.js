import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginIn,loginOut } from "./store";

@connect(
    (state) => {
        console.log(state);
        return {isLoginIn:state.loginOperation.isAuth}
    },
    (dispatch) => ({
        loginIn:() => {
            return dispatch({type:"LOGIN_IN"})
        }
    })
    // {loginIn}
)
class Login extends Component {
    render() {
        return (
            <div>
                {this.props.isLoginIn?<Redirect to='/dashboard' />:null}
                <h1>欢迎，请登录</h1>
                <button onClick={this.props.loginIn}>登录</button>
            </div>
        )
    }
}
export default Login