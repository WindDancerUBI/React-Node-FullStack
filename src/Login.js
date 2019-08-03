import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginIn} from "./store";
import axios from "axios";

@connect(
    (state) => {
        console.log(state);
        return {isLoginIn:state.loginOperation.isAuth}
    },
    // (dispatch) => ({
    //     loginIn:() => {
    //         return dispatch({type:"LOGIN_IN"})
    //     }
    // })
    {loginIn}
)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    // 常规的使用axios获取后台数据的方法
    componentDidMount(){
        axios.get('/data').then(
            res => {
                console.log(res);
                if(res.status == 200){
                    this.setState({
                        data: res.data[0]
                    })
                }
            }
        )
    }
    
    render() {
        return (
            <div>
                {this.props.isLoginIn?<Redirect to='/dashboard' />:null}
                <h1>欢迎您，请登录</h1>
                <h2>我的名字是{this.state.data.user}，我的年龄是{this.state.data.age}</h2>
                <button onClick={this.props.loginIn}>登录</button>
            </div>
        )
    }
}
export default Login