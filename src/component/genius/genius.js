/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 19:48:59
 * @LastEditTime: 2019-08-28 20:01:45
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUserList } from "./../../redux/chatuser/chatuser";
import UserCard from "./../userCard/userCard";

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        return (
            <div>
                <UserCard userList = {this.props.userList} />
            </div>
        )
    }
}

export default Genius