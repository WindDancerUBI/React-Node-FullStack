/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 19:54:31
 * @LastEditTime: 2019-08-28 21:03:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank } from "antd-mobile";

class UserCard extends Component {

    render() {
        const Header = Card.Header;
        const Body = Card.Body;
        return (
            <div>
                <WingBlank>
                    {this.props.userList.map(v => (
                        v.avatar
                        ? <Card key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../../component/assert/img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            />
                            <Body>
                            {v.type === 'boss'?<div>公司：{v.company}</div>:null}
                            {v.type === 'boss'?<div>薪资：{v.money}</div>:null}
                            要求:
                            {v.desc.split('\n').map(v=>(
                                <div key={v}>{v}</div>
                            ))}
                            
                            </Body>
                        </Card>
                        :null
                    ))}
                </WingBlank>
            </div>
        )
    }
}

UserCard.propTypes = {
    userList: PropTypes.array.isRequired,
}

export default UserCard