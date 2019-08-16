import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "./../../redux/user/user";

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component {
    componentDidMount(){
        // 如果为注册页或登录页,则停留在该界面
        const routerList = ['/login','/register'];
        const curRouter = this.props.location.pathname;
        if(routerList.indexOf(curRouter) >0){
            return null;
        }
        //判断用户信息，未验证通过的强制跳转login页面
        axios.get('/user/info')
        .then((res) => {
            if(res.status == 200){
                if(res.data.code == 0){
                    this.props.loadData(res.data.data);
                }else{
                    //没有登录信息，需要跳转到登录login页面
                    this.props.history.push('/login');
                }
            }
        })
    }

    render() {
        return null;
    }
}


export default AuthRoute