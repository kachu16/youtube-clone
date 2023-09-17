import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/config";

const SearchVideos = () => {
  const [videos , setVideos] = useState();
  const {searchTerm} = useParams();

  useEffect(()=>{
    getSearchData();
  }, [searchTerm])


  async function getSearchData() {
      const video = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + searchTerm + '&type=video&key=' + API_KEY);
      const jsonData = await video.json();
      setVideos(jsonData.items);
      console.log(jsonData.items);
  }
  return (

    <div className="text-white">
      {
        videos && (
         <div>
          {
            videos.map((video) => (
              <div>
                <img src={video?.snippet?.thumbnails?.high?.url} alt="not found"/>
                <div>
                  <h1>{video?.snippet?.channelTitle}</h1>
                  <h2>{video?.snippet?.description}</h2>
                  </div>
              </div>
            ))
          }
          </div>
        )
      }
    </div>
  )
}

export default SearchVideos
