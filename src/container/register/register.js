import React, { Component } from 'react'
import logoImg from "./../../component/assert/job.png";
import './register.less'
import { InputItem,List,WhiteSpace,Button, Radio } from 'antd-mobile';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:'genius'
        }
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div className="logo">
                <img src={logoImg} alt='/' />
                <h1>注册页面</h1>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>设置密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'genius'}>求职者</RadioItem>
                    <RadioItem checked={this.state.type ==='boss'}>老板</RadioItem>
                    <Button>注册</Button>
                </List>
            </div>
        )
    }
}

Register.propTypes = {

}

export default Register 