import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginIn} from "./store";
import axios from "axios";
import { getUserData } from "./store";
import "./config";

@connect(
    (state) => state.loginOperation,
    // (dispatch) => ({
    //     loginIn:() => {
    //         return dispatch({type:"LOGIN_IN"})
    //     }
    // })
    {loginIn,getUserData}
)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    componentDidMount(){
        // // 常规的使用axios获取后台数据的方法
        // axios.get('/data').then(
        //     res => {
        //         console.log(res);
        //         if(res.status == 200){
        //             this.setState({
        //                 data: res.data[0]
        //             })
        //         }
        //     }
        // )
        this.props.getUserData();
    }
    
    render() {
        return (
            <div>
                {this.props.isAuth?<Redirect to='/dashboard' />:null}
                <h1>欢迎您，请登录</h1>
                <h2>我的名字是{this.props.user}，我的年龄是{this.props.age}</h2>
                <button onClick={this.props.loginIn}>登录</button>
            </div>
        )
    }
}
export default Login