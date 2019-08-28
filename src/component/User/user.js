/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 21:06:06
 * @LastEditTime: 2019-08-28 22:01:42
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
import { connect } from "react-redux";
import { Item } from 'antd-mobile/lib/tab-bar';
import { Brief } from 'antd-mobile/lib/list/ListItem';
import browserCookie from 'browser-cookies';
import { withRouter } from "react-router-dom";

@withRouter
@connect(
    state => state.user,
)
class User extends Component {

    logout(){
        Modal.alert(
            '注销', '确认退出登录吗???', [
                { text: '取消', onPress: () => console.log('cancel') },
                { text: '确认', onPress: () => {
                        browserCookie.erase('userid');
                        // window.location.href = window.location.href;
                        this.props.history.push('/login')
                    }}
            ])
    }
    
    render() {
        // 一开始还未加在state数据，防止报错--条件渲染                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        return this.props.user?(
            <div>
                <Result
                    img = {<img src={require(`./../../component/assert/img/${this.props.avatar}.png`)} alt='' style={{width:50}}/>}
                    title = {this.props.user}
                    message = {this.props.type === 'boss'?this.props.company:null}
                />
                <List renderHeader={() => '简介'}>
                    <Item multipleLine> 
                        {this.props.title}
                        {this.props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
                        {this.props.money?<Brief>薪资:{this.props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <Item >
                    <div onClick={this.logout.bind(this)}>退出登录</div>
                </Item>
            </div>
        ):null
    }
}


export default User