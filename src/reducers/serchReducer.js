import { createReducer } from "@reduxjs/toolkit";
import { setInputTextAction } from "../actions/serachAction";

const initialState = {
  searchText: "",
};

export default createReducer(initialState, {
  [setInputTextAction]: function(state, action) {
    state.searchText = action.payload
  },
});
