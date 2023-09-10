import { configureStore } from "@reduxjs/toolkit";
import fetchVideosSlice from "./fetchVideosSlice";

const store = configureStore({
    reducer : {
        fetchVideo : fetchVideosSlice
    }
});

export default store;