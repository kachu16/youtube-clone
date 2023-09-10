const VideoCard = ({video}) => {
  return (
        <div key={video.id} className='m-1 w-80'>
            <img src={video?.snippet?.thumbnails?.medium?.url} alt='video'/>
            <span>{video?.snippet?.localized?.title}</span>
            <h1>{video?.snippet?.channelTitle}</h1>
            <span>{video?.statistics?.likeCount} views </span>
            <span>{video?.snippet?.publishedAt}</span>
            {/* <Date dateTime={video?.snippet?.publishedAt}/> */}
        </div>
  )
}

export default VideoCard
