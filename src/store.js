import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from "redux-thunk";

export const loginIn = () => ({
    type:"LOGIN_IN"
});

export const loginOut = () => ({
    type:"LOGIN_OUT"
});

function countGun(state = 0, action){
    switch (action.type) {
        case 'ADD_GUN':
            return state+1
        case 'SUB_GUN':
            if(state > 0){
                return state-1
            }else{
                alert('子弹用完，无法开枪');
            }  
        default:
            return 0;
    }
}

function loginOperation(state = {isAuth:false},action){
    switch (action.type) {
        case "LOGIN_IN":
            return {
                ...state,
                isAuth:true,
            }
        case "LOGIN_OUT":
            return {
                ...state,
                isAuth:false,
            }
        default:
            return {
                ...state,
            }
    }
}

const reducers = combineReducers({
    countGun,
    loginOperation,
})

const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():alert("没有安装插件")
    )
);

export default store
