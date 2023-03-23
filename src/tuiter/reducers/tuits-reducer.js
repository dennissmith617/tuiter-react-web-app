import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {createTuitThunk, findTuitsThunk, updateTuitThunk, deleteTuitThunk}
  from "../../services/tuit-thunk";
/*
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg"
};
*/
const initialState = {                                          // initial state has
   tuits: [],                                                   // no tuits
   loading: false                                               // loading flag to display spinner
}

/*
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
};*/

const tuitSlice = createSlice({
 name: 'tuits',
 initialState,                                                  // same as "initialState": initialState
  extraReducers: {                                              // define asynchronous reducers
    [findTuitsThunk.pending]:                                   // if request is not yet fulfilled...
       (state) => {
          state.loading = true                                  // set loading true so UI can display spinner
          state.tuits = []                                      // empty tuits since we are still fetching them
    },
    [findTuitsThunk.fulfilled]:                                 // when we get response, request is fulfilled
       (state, { payload }) => {                                // we extract/destruct payload from action object
          state.loading = false                                 // turn off loading flag since we have the data
          state.tuits = payload                                 // payload has tuits from server and update redux state
    },
    [findTuitsThunk.rejected]:                                  // if request times out, or responds with error
       (state, action) => {
          state.loading = false                                 // reset Loading flag
          state.error = action.error                            // report error
    },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
          (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
        }
      }
  },
 reducers: { }                                                  // we're not going to use the old reducers anymore
});

export const {createTuit, deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;