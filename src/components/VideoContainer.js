// import { useEffect  , useState} from 'react';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
// import { API_KEY } from '../utils/config';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

  const video = useSelector(store => store.fetchVideo.videos);

  return !video ? <Shimmer/> : (
    <div className='w-[100vw] text-white flex flex-wrap justify-center bg-black pt-3'>
      {
        video.map((video) => <Link  key={video.id} to={`/video/${video.id}`}><VideoCard video={video}/></Link> )
      }
    </div>
  )
}

export default VideoContainer;