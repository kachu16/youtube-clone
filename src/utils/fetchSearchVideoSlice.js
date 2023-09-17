import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "./config";

export const getSearchVideo = createAsyncThunk("getSearchVideo", async (searchText) => {
  const video  = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + searchText + '&type=video&key=' + API_KEY);
  const jsonData = await video.json();
  console.log(jsonData.items)
  return jsonData.items;
})

const fetchSearchSlice = createSlice({
    name : 'searchVideo',
    initialState : {
        searchVideos : []
    }, 
    extraReducers : (builder) => {
      builder.addCase(getSearchVideo.pending, (state) => {
        state.isloading = true;
      })
      builder.addCase(getSearchVideo.fulfilled, (state , action) => {
        state.isloading = false;
        state.searchVideos = action.payload;
      })

      builder.addCase(getSearchVideo.rejected, (state , action) => {
        console.log('Error' , action.payload)
      })
    }
})

export const {} = fetchSearchSlice.actions;
export default fetchSearchSlice.reducer;