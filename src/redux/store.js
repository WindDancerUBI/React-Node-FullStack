import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";

export const reducerName = (state = 0, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}

const reducers = combineReducers({});

const store = createStore(
    reducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f => f 
        )
    )

export default store;