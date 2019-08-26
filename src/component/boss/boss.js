/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 20:56:04
 * @LastEditTime: 2019-08-26 21:38:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import axios from "axios";
import { Card, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import { getUserList } from "./../../redux/chatuser/chatuser";

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // axios.get('/user/list?type=genius')
        // .then(res => {
        //     if(res.data.code === 0){
        //         this.setState({
        //             data:res.data.data
        //         })
        //     }
        // })
        this.props.getUserList('genius')
    }

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

export default Boss