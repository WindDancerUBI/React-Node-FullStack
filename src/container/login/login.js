import React, { Component } from 'react'
import logoImg from "./../../component/assert/job.png";
import  "./login.less";
import { InputItem,List,WingBlank,WhiteSpace,Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from "./../../redux/user/user";
import { Redirect } from "react-router-dom";

@connect(
    state => state.user,
    {login}
)
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
        }
    }

    // 跳转到注册界面
    register(){
        console.log(this.props);
        this.props.history.push('/register')
    }

    loginHandle(){
        this.props.login(this.state);
    }

    changeHandle(key,val){
        this.setState({
            [key]:val
        });
    }

    render() {
        return (
            <div className='logo'>
                {(this.props.toRedirect != '')?<Redirect to={this.props.toRedirect} />:null}        
                <img src={logoImg} alt='/' />
                <h1>登陆界面</h1>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <WingBlank>
                    <List>
                        <InputItem onChange={(val) => this.changeHandle('user',val)}>用户</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={(val) => this.changeHandle('pwd',val)}>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => this.loginHandle()}>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => this.register()}>注册</Button>
                </WingBlank>
                
            </div>
        )
    }
}

export default Login