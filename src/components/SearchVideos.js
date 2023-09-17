import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/config";
import SearchVideoCard from "./SearchVideoCard";

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

    <div className="text-white mx-3 my-5">
      {
        videos && (
         <div>
          {
            videos.map((video) => <SearchVideoCard video={video}/>)
          }
          </div>
        )
      }
    </div>
  )
}

export default SearchVideos
