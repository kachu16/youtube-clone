import { createSlice } from "@reduxjs/toolkit";

const hamburgerToggleSlice = createSlice({
    name : "hamburger",
    initialState : {
        isVisible : true
    },
    reducers: {
        toggleSidebar : (state) => {
            state.isVisible = !state.isVisible;
        },
        toggleSidebarFalse : (state) => {
            state.isVisible = false;
        }
    }
});

export default hamburgerToggleSlice.reducer;
export const {toggleSidebar, toggleSidebarFalse} = hamburgerToggleSlice.actions;