import axios from "axios";
import getRedirectPath from "./../../utils/getRedirectPath";

const initState = {
    toRedirect: '',
    user:'',
    type:'',
    msg:'',
    isAuth:false
}

//Reducer--user
export function user(state=initState,action){
    switch (action.type) {
        case "Auth_SUCCESS":     
            return{
                ...state,
                msg:'',
                toRedirect: getRedirectPath(action.payload),
                isAuth:true,
                ...action.payload,
            }

        case "LOAD_DATA":
            return{
                ...state,
                ...action.payload
            }

        case "ERROR_MSG":
            return{
                ...state,
                msg: action.msg,
                isAuth: false
            }

        default:
            return{
                ...state,
            }
    }
}

//action--user
function AuthSuccess(data){
    return {
        type: "Auth_SUCCESS",
        payload: data,
    }
}

function errorMsg(msg){
    return {
        type: "ERROR_MSG",
        msg: msg,
    }
}

export function loadData(userinfo){
    return {
        type: "LOAD_DATA",
        payload: userinfo,
    }
}


export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('你的信息未填写完整');
    }
    if(pwd !== repeatpwd){
        return errorMsg('两次密码不相同');
    }
    return dispatch => (
        axios.post('/user/register',{user,pwd,type})
        .then(res => {   
            if(res.status == 200 && res.data.code == 0){
                dispatch(AuthSuccess({user,pwd,type}));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    )
    
}

export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('用户名密码必须填写')
    }
    return dispatch => {
        axios.post('/user/login',{user,pwd})
        .then(res => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(AuthSuccess(res.data.data));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function update(data){
    return dispatch => {
        axios.post('/user/update',data)
        .then(res => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(AuthSuccess(res.data.data));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}