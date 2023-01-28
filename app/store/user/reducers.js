import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeUserData(state, { payload }) {
            state.user = payload.user;
        },
    },
});


export const actions = userSlice.actions;
export default userSlice.reducer;