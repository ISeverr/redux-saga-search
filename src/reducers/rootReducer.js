import { combineReducers } from "redux";
import searchReducer from "./serchReducer";

const rootReducer = combineReducers({
    searchData: searchReducer
})

export default rootReducer;