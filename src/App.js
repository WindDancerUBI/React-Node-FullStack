import React from 'react';
import { Button,List } from "antd-mobile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

@connect(
  (state) => {
    console.log(state)
    return({count:state.countGun});
  },
  (dispatch) => ({
    addGun:() => {
      return dispatch({type:'ADD_GUN'});
    },
    subGun:() => dispatch({type:'SUB_GUN'}),
    delayGun:() => dispatch(dispatch => {
      setTimeout(() => {
        dispatch({type:'ADD_GUN'})
      }, 2000);
    })
  }) 
)
@withRouter
class App extends React.Component{
  render(){
    return (
        <div>
            <h2>独立团，团长：{this.props.boss}</h2>
            <button onClick={() => {this.props.history.push('/dashboard/qibinglian')}}>去往骑兵连</button>
            <p>现在还有{this.props.count}发子弹</p>
            <Button type="primary" onClick={this.props.addGun}>上弹</Button>
            <Button type="primary" onClick={this.props.subGun}>打枪</Button>
            <Button type="primary" onClick={this.props.delayGun}>延迟上弹</Button>
        </div>
    );
  }
}


export class NotFound extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        404，页面不存在
      </div>
    )
  }
}

export function qiBingLian(props) {
    return(
      <div>
        <h2>骑兵连，连长：{props.boss}</h2>
        <h4>欢迎来到骑兵连</h4>
      </div>
    )
}

@withRouter
class yiYing extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          solders:['虎子','柱子','王根生']
      }
      console.log("组件初始化");
  }
  componentWillMount() {
    console.log("组件将要挂载");
  }

  componentDidMount() {
    console.log("组件挂载完毕");
  }

  componentWillReceiveProps(nextProps) {
    console.log("组件将要接收父组件属性");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("组件是否应该更新");
    // 可以阻止组件更新，更新默认阻止
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("组件即将更新");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("组件更新完毕");
  }

  componentWillUnmount() {
    console.log("组件将要卸载");
  }


  addSolder(){
    console.log(`以下为点击了按钮之后-------------------------`)
    this.setState({
      solders:[...this.state.solders,`新兵编号：${Math.floor(Math.random()*100)}`]
    })
  }
  
  render() {
    console.log("组件正在渲染");
      return (
      <div>
        <h2>一营，营长：{this.props.boss}</h2>
        <button onClick={() => {this.props.history.push('/dashboard/qibinglian')}}>去往骑兵连</button>
        <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
        <List renderHeader={() => '士兵列表'}>
            {this.state.solders.map((v,index)=>{
                return <List.Item key={index}>{v}</List.Item>
            })}
        </List>
      </div>
    );
  }
}


export default App;
export {yiYing}



