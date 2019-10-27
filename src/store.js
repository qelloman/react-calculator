
import {createStore, combineReducers, applyMiddleware} from "redux"
import {logger} from "redux-logger"

import button from "./reducers/buttonReducers"

// sort of state manager.
export default createStore(
    combineReducers(
        {
            button,
            //logic
        }
    ),
    {},
    applyMiddleware(logger)
);