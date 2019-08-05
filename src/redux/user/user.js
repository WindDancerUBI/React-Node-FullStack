import axios from "axios";

initState = {
    user:'',
    pwd:'',
    type:'',
    msg:'',
    isAuth:false
}


//Reducer--user
function User(state = initState,action){
    switch (action.type) {
        case "REGISTER_SUCCESS":     
            return{
                ...state,
                msg:'',
                isAuth:true,
                ...action.playload,
            }

        case "ERROR_MSG":
            return{
                ...state,
                msg: action.msg,
                isAuth: false
            }
        default:
            break;
    }
}

//action--user
const registerSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        playload: data,
    }
}

const errorMsg = (msg) => {
    return {
        type: "ERROR_MSG",
        msg: msg,
    }
}

export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('你的信息未填写完整');
    }else if(user !== repeatpwd){
        return errorMsg('两次密码不相同');
    }
    return dispatch(
        axios.post('/user/register',{user,pwd,type})
        .then(res => {
            if(res.status == 200 && res.data.code == 0){
                dispatch(registerSuccess({user,pwd,type}));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    )
    
}