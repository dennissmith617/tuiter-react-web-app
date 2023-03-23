import {createAsyncThunk}                               // import createAsyncTrunk
  from "@reduxjs/toolkit"
import * as service                                     // import all exported functions as service
  from "./tuit-service"

export const findTuitsThunk = createAsyncThunk(         // create thunk for findTuits
  'tuits/findTuits', async () =>                        // give unique name, thunk invokes
    await service.findTuits()                           // service function. Returned data goes in
)                                                       // redux action's payload