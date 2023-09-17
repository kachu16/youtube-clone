import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SearchVideoCard = ({video}) => {
  const isvisible = useSelector(store => store.hamburger.isVisible);
  
  return (
    <Link to={'/video/' + video.id.videoId}>
        <div className={`${!isvisible && 'ml-40'} flex my-6 mx-3  hover:bg-gray-900 cursor-pointer rounded-lg`}>
        <img className="rounded-lg" src={video?.snippet?.thumbnails?.medium?.url} alt="not found"/>
        <div className="w-[50rem] my-5 mx-3">
        <h1 className="text-lg font-bold">{video?.snippet?.title}</h1>
        <h1 className="text-sm fonr-bold text-gray-400 my-2">{video?.snippet?.channelTitle}</h1>
        <h2 className="font-semibold">{video?.snippet?.description}</h2>
        </div>
    </div>
    </Link>
  )
}

export default SearchVideoCard
