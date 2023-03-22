import {createSlice} from "@reduxjs/toolkit";
import profile from "../data/profile.json"

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
           state.firstName = action.payload.firstName.firstName;
           state.lastName = action.payload.lastName.lastName;
           state.bio = action.payload.bio.bio;
           state.dateOfBirth = action.payload.dateOfBirth.dateOfBirth;
           state.location = action.payload.location.location;
           state.website = action.payload.website.website;
        }
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;