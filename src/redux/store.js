import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import { user } from "./user/user.js";


const reducers = combineReducers({user});

const store = createStore(
    reducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f => f 
        )
    )

export default store;