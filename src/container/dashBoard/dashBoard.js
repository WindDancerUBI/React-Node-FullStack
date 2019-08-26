/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 15:57:05
 * @LastEditTime: 2019-08-26 21:12:10
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
import NavLinkBar from "./../navLink/navLink";
import './dashBoard.scss'
import { Switch,Route } from "react-router-dom";
import Boss from './../../component/boss/boss'


function Genius() {
    return  <h2>Genius首页</h2>
}
function Msg() {
    return  <h2>Msg首页</h2>
}
function User() {
    return  <h2>User首页</h2>
}

@connect(
    state => state
)
class DashBoard extends Component {
    

    render() {
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                title: '牛人列表',
                icon: 'boss',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        return (
            <div className="dashboard">
                <NavBar className="fixed-header" mode='dark'>
                    {navList.find(v => v.path === pathname).title}
                </NavBar>
                <div style={{marginTop: 45}}>
                    <Switch> 
                        {navList.map(item =>{
                            return <Route key={item.path} path={item.path} component={item.component} />
                        })}
                    </Switch>
                </div>
                <NavLinkBar data = {navList}/>
            </div>
        )
    }
}

export default DashBoard