import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user/reducers";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: getDefaultsMiddleware =>
        getDefaultsMiddleware({serializableCheck: true})
})

export default store;