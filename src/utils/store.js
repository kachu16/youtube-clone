import { configureStore } from "@reduxjs/toolkit";
import fetchVideosSlice from "./fetchVideosSlice";
import hamburgerToggleSlice from "./hamburgerToggleSlice";
import fetchSearchVideoSlice from "./fetchSearchVideoSlice";

const store = configureStore({
    reducer : {
        fetchVideo : fetchVideosSlice,
        hamburger : hamburgerToggleSlice,
        searchVideo : fetchSearchVideoSlice
    }
});

export default store;