import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // post:postSlice // TODO: add more slice here for posts
    }
})

export default store
