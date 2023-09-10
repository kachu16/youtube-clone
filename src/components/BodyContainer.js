import Sidebar from "./Sidebar"
import VideoContainer from "./VideoContainer"

const BodyContainer = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <VideoContainer/>
    </div>
  )
}

export default BodyContainer
