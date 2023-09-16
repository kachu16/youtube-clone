import { useSelector } from "react-redux";
const VideoCard = ({video}) => {
  const isvisible = useSelector(store => store.hamburger.isVisible);
 

  return (
        <div key={video.id} className={`${isvisible ? 'w-[25rem]' : 'w-[22rem]'} mx-2 my-3 cursor-pointer `}>
            <img className="w-[100%] rounded-xl" src={video?.snippet?.thumbnails?.medium?.url} alt='video'/>
            <div className="p-2">
              <span>{video?.snippet?.localized?.title}</span>
            <h1>{video?.snippet?.channelTitle}</h1>
            <span>{video?.statistics?.likeCount} views </span>
            <span>{video?.snippet?.publishedAt}</span>
            </div>
        </div>
  )
}

export default VideoCard
