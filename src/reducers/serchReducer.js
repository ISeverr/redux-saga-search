import { createReducer } from "@reduxjs/toolkit";
import { setInputText } from "../actions/serachAction";


export default createReducer( '', {
    [setInputText.type]: (text, action) => {
        const { inputText } = action.payload;
        return text = inputText;
    },
})