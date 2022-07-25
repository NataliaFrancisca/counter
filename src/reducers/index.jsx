import { combineReducers } from "redux";

import {reducerCountHome, reducerCountVisitor} from "./reduce";

export const rootReducer = combineReducers({
    reducerCountHome,
    reducerCountVisitor,
})