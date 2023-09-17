import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  
  const video = useSelector(store => store.fetchVideo.videos);

  return !video ? <Shimmer/> : (
    <div className='w-[100vw] text-white flex flex-wrap justify-center bg-black pt-3'>
      {
        video.map((video) => <VideoCard video={video} key={video.id}/> )
      }
    </div>
  )
}

export default VideoContainer;