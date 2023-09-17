import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({video}) => {

  const isvisible = useSelector(store => store.hamburger.isVisible);
 
  return (
        <Link to={`/video/${video.id}`}>
        <div key={video.id} className={`${isvisible ? 'w-[25rem]' : 'w-[22rem]'} mx-2 my-3 cursor-pointer `}>
            <img className="w-[100%] rounded-xl" src={video?.snippet?.thumbnails?.medium?.url} alt='video'/>
            <div className="p-2">

              <span>{video?.snippet?.localized?.title}</span>

            <h1  className="text-gray-500 font-bold">{video?.snippet?.channelTitle}</h1>
            <span className="text-gray-500">{video?.statistics?.likeCount} views </span>
            <span className="text-gray-500 ml-3">{video?.snippet?.publishedAt}</span>
            </div>
        </div>
        </Link>
  )
}

export default VideoCard
