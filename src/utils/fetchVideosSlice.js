import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY , INITIAL_VIDEOS} from './config';

export const fetchVideos = createAsyncThunk("fetchVideos", async (id) => {
  const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&videoCategoryId='+ id + '&key=' + API_KEY);
  const json = await data.json();
  // console.log(json.items);
  return json.items;
})

const fetchVideoSlice = createSlice({
    name : "fetchVideo",
    initialState : {
        videos : INITIAL_VIDEOS,
        isloading : false
    },
    reducers : {
      setInitialVideo : (state) => {
        state.videos = INITIAL_VIDEOS;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchVideos.pending, (state) => {
        state.isloading = true;
      })
      builder.addCase(fetchVideos.fulfilled, (state , action) => {
        state.isloading = false;
        state.videos(action.payload);
      })

      builder.addCase(fetchVideos.rejected, (state , action) => {
        console.log('Error' , action.payload)
      })
    }
})

export const {fetchData, setInitialVideo } = fetchVideoSlice.actions;
export default fetchVideoSlice.reducer;
