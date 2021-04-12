import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    routes,
    userInfo
} from "./reducer";
import thunkMiddleware from "redux-thunk";

let reducer = combineReducers({routes, userInfo});

let middleWare = [thunkMiddleware];

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
    reducer,
    /* preloadedState, */ composeEnhancers(
        applyMiddleware(...middleWare)
        // other store enhancers if any
    )
);

export default store;
