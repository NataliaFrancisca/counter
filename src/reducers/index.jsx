import { combineReducers } from "redux";

import {reducerCountHome, reducerCountVisitor} from "./counter";
import { reducerModal } from "./modal";
import { reducerMatchs } from "./match";

export const rootReducer = combineReducers({
    reducerCountHome,
    reducerCountVisitor,
    reducerModal,
    reducerMatchs
})