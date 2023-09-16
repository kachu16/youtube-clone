import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const BodyContainer = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default BodyContainer
