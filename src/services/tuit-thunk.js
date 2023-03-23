import {createAsyncThunk}                               // import createAsyncTrunk
  from "@reduxjs/toolkit"
import * as service                                     // import all exported functions as service
  from "./tuit-service"


export const createTuitThunk = createAsyncThunk(
  'tuits/createTuit',
  async (tuit) => {
    const newTuit = await service.createTuit(tuit)
    return newTuit
})


export const findTuitsThunk = createAsyncThunk(         // create thunk for findTuits
  'tuits/findTuits', async () =>                        // give unique name, thunk invokes
    await service.findTuits()                           // service function. Returned data goes in
)


export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)


export const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuit',
  async (tuitId) => {
    await service.deleteTuit(tuitId)
    return tuitId
})
