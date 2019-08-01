import React from 'react';
import { Button,List } from "antd-mobile";
import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {num:state};
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addGun:() => {
//       return dispatch({type:'ADD_GUN'});
//     },
//     subGun:() => dispatch({type:'SUB_GUN'}),
//     delayGun:() => dispatch(dispatch => {
//       setTimeout(() => {
//         dispatch({type:'ADD_GUN'})
//       }, 2000);
//     })
//   } 
// }
// //简化connect
// @connect(mapStateToProps,mapDispatchToProps)

// 进一步简化connect
@connect(
  (state) => ({num:state}),
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
class App extends React.Component{
  render(){
    return (
        <div>
            <h2>独立团，团长：{this.props.boss}</h2>
            <一营 boss="张大猫"></一营>
            <骑兵连 boss="孙德胜"></骑兵连>
            <p>现在还有{this.props.num}发子弹</p>
            <Button type="primary" onClick={this.props.addGun}>上弹</Button>
            <Button type="primary" onClick={this.props.subGun}>打枪</Button>
            <Button type="primary" onClick={this.props.delayGun}>延迟上弹</Button>
        </div>
    );
  }
}

function 骑兵连(props) {
    return <h2>骑兵连，连长：{props.boss}</h2>
}
class 一营 extends React.Component {
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
      solders:[...this.state.solders,`新兵：${Math.floor(Math.random()*100)}`]
    })
  }
  
  render() {
    console.log("组件正在渲染");
      return (
      <div>
        <h2>一营，营长：{this.props.boss}</h2>
        <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
        {/* <ul>
            {this.state.solders.map(v=>{
                // 在渲染列表的时候，每个列表都必须有一个唯一的key属性，用来做虚拟dom判断的
                return <li key={v}>{v}</li>
            })}
        </ul>     */}
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



