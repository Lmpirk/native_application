import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeUserData(state, { payload }) {
            state.user = payload;
        },
        clearUser(state) {
            state.user = null;
        }
    },
});


export const actions = userSlice.actions;
export default userSlice.reducer;