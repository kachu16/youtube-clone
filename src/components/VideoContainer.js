import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  // const [videos , setVideos] = useState([]);
  const video = useSelector(store => store.fetchVideo.videos);


  return video.length === 0 ? <h1>No videos</h1> : (
    <div className='w-[100vw] bg-black text-white flex flex-wrap'>
      {
        video.map((video) => <VideoCard video={video} key={video.id}/> )
        // video.map((el, index) => <h1 key={index}>{el}</h1>)
      }
    </div>
  )
}

export default VideoContainer;