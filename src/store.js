import {createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";

function countGun(state = 0, action){
    switch (action.type) {
        case 'ADD_GUN':
            return state+1;
        case 'SUB_GUN':
            if(state > 0){
                return state-1;
            }else{
                alert('子弹用完，无法开枪');
                return state;
            }  
        default:
            return 0;
    }
}

const store = createStore(countGun,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():alert("没有安装插件")
    )
);

// const initState = store.getState();
// console.log(initState);

// function listener(){
//     const state = store.getState();
//     console.log(`还剩${state}颗子弹`)
// }

// store.subscribe(listener);

export default store;

// store.dispatch({type:'ADD_GUN'});
// store.dispatch({type:'ADD_GUN'});
// store.dispatch({type:'ADD_GUN'});
// store.dispatch({type:'ADD_GUN'});
// store.dispatch({type:'SUB_GUN'});
// store.dispatch({type:'SUB_GUN'});
// store.dispatch({type:'SUB_GUN'});
// store.dispatch({type:'SUB_GUN'});
// store.dispatch({type:'SUB_GUN'});
