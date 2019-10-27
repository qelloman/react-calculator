
import {createStore, combineReducers, applyMiddleware} from "redux"
import {logger} from "redux-logger"

import button from "./reducers/buttonReducers"

// only use one reducer.
export default createStore(
    combineReducers(
        {
            button,
        }
    ),
    {},
    applyMiddleware(logger)
);