/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:37:53
 * @LastEditTime: 2019-08-26 21:31:24
 * @LastEditors: Please set LastEditors
 */
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import { user } from "./user/user.js";
import {chatuser} from "./chatuser/chatuser";


const reducers = combineReducers({user,chatuser});

const store = createStore(
    reducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f => f 
        )
    )

export default store;