/*
 * @Description: In User Settings Edit 
 * @Author: your name
 * @Date: 2019-08-26 21:22:16
 * @LastEditTime: 2019-08-26 21:53:52
 * @LastEditors: Please set LastEditors
 */
import axios from "axios";

const initState = {
    userList:[]
}
export function chatuser(state=initState,action) {
    switch (action.type) {
        case "USER_LIST":
            return {
                ...state,
                userList:action.payload,
            }
    
        default:
            return state
    }
}
function userList(data) {
    return {type: 'USER_LIST', payload: data}
}

export function getUserList(type) {
    return dispatch => {
        axios.get(`/user/list?type=${type}`)
        .then(res => {
            if(res.data.code === 0){
                dispatch(userList(res.data.data))
            }
        })
    }
}