import React, { Component } from 'react'
import { NavBar,InputItem,TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "./../../component/AvatarSelector/AvatarSelector";
import { connect } from "react-redux";
import { update } from "./../../redux/user/user";
import { Redirect } from "react-router-dom";

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    changeHandle(key,val){
        this.setState({
            [key]:val
        })
    }

    render() {
        const redirect = this.props.toRedirect;
        const path = this.props.location.pathname
        return (
            <div>
                {redirect&&redirect!==path?<Redirect to={redirect} />:null}
                <NavBar>GeniusInfo信息完善页面</NavBar>
                <AvatarSelector 
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}
                />
                <InputItem onChange={(val) => this.changeHandle('title',val)}>求职岗位</InputItem>
                <TextareaItem
                    onChange={(val) => this.changeHandle('desc',val)}
                    rows={3}
                    autoHeight
                    title="个人简介"
                />
                <Button type='primary' onClick={() => this.props.update(this.state)}>保存</Button>
            </div>
        )
    }
}

export default GeniusInfo;