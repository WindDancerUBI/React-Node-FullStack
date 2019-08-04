import React, { Component } from 'react'
import logoImg from "./../../component/assert/job.png";
import  "./login.less";
import { InputItem,List,WingBlank,WhiteSpace,Button } from 'antd-mobile';


class Login extends Component {
    register(){
        console.log(this.props);
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className='logo'>
                <img src={logoImg} alt='/' />
                <h1>登陆界面</h1>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => this.register()}>注册</Button>
                </WingBlank>
                
            </div>
        )
    }
}

export default Login