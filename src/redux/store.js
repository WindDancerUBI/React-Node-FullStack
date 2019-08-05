import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";



const reducers = combineReducers({});

const store = createStore(
    reducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f => f 
        )
    )

export default store;