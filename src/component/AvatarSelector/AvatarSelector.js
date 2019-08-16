import React, { Component } from 'react'
import { Grid, List } from "antd-mobile";

class AvatarSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
        .split(',')
        .map(
            (i) => ({
                icon: require(`../assert/img/${i}.png`),
                text: i
            })
        )
        return (
            <div>
                {this.state.icon?
                    <div style={{height:40}}>
                        <span>已选择头像</span>
                        <img style={{width:20}} src={this.state.icon} />
                    </div>: 
                    <div style={{height:40}}>
                        请选择头像
                    </div>   
                }
                <Grid 
                    data={avatarList} 
                    columnNum={5} 
                    onClick={elm => {
                        this.setState(elm)
                        this.props.selectAvatar(elm.text)
                        }
                    }
                />
            </div>
        )
    }
}

export default AvatarSelector