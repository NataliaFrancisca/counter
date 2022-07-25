import { combineReducers } from "redux";

import {reducerCountHome, reducerCountVisitor} from "./reduce";
import { reducerModal } from "./modal";

export const rootReducer = combineReducers({
    reducerCountHome,
    reducerCountVisitor,
    reducerModal
})