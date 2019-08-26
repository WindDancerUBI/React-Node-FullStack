/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 16:23:52
 * @LastEditTime: 2019-08-24 16:43:34
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";

@withRouter
class NavLinkBar extends Component {
    
    render() {
        const navList = this.props.data.filter(v => !v.hide);
        const {pathname} = this.props.location;
        return (
            <TabBar>
                {navList.map(item => (
                    <TabBar.Item
                        key={item.path}
                        title={item.text}
                        icon={{uri: require(`./../../component/assert/navLogo/${item.icon}.png`)}}                    
                        selectedIcon = {{uri: require(`./../../component/assert/navLogo/${item.icon}-active.png`)}}
                        selected = {pathname === item.path}
                        onPress = {() =>{
                            this.props.history.push(item.path)
                        }}
                    />
                ))}
            </TabBar>
                
        )
    }
}

NavLinkBar.propTypes = {
    data: PropTypes.array.isRequired
}

export default NavLinkBar