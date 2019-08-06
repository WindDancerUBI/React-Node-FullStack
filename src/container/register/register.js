import React, { Component } from 'react'
import logoImg from "./../../component/assert/job.png";
import './register.less'
import { InputItem,List,WhiteSpace,Button, Radio,WingBlank } from 'antd-mobile';
import { register } from "./../../redux/user/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

@connect(
    state => state.user,
    {register}
)
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'boss'
        }
    }

    registerHandle(){
        this.props.register(this.state);
    }

    changeHandle(key,val){
        this.setState({
            [key]:val
        });
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div className="logo">
                {(this.props.toRedirect != '')?<Redirect to={this.props.toRedirect} />:null}
                <img src={logoImg} alt='/' />
                <h1>注册页面</h1>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <List>
                    <InputItem onChange={(val) => this.changeHandle('user',val)}>用户名</InputItem>
                    <InputItem onChange={(val) => this.changeHandle('pwd',val)} type="password">设置密码</InputItem>
                    <InputItem onChange={(val) => this.changeHandle('repeatpwd',val)} type="password">确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem onChange={() => this.changeHandle('type',"genius")} checked={this.state.type === 'genius'}>求职者</RadioItem>
                    <RadioItem onChange={() => this.changeHandle('type',"boss")} checked={this.state.type === 'boss'}>老板</RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => this.registerHandle()}>注册</Button>
                </List>
            </div>
        )
    }
}

Register.propTypes = {

}

export default Register 