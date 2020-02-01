import tipsReducer from "./tipsReducerr";
import authReducer from "./authReducerss"
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    tipsReducer:tipsReducer,
    authReducer:authReducer
})
export default rootReducer