import { configureStore } from "@reduxjs/toolkit";
import fetchVideosSlice from "./fetchVideosSlice";
import hamburgerToggleSlice from "./hamburgerToggleSlice";

const store = configureStore({
    reducer : {
        fetchVideo : fetchVideosSlice,
        hamburger : hamburgerToggleSlice
    }
});

export default store;