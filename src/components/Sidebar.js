import { useDispatch } from "react-redux";
import { categories } from "../utils/config";
import { fetchVideos } from "../utils/fetchVideosSlice";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleVideoCategory = (id) => {        
        dispatch(fetchVideos(id));
    }

    return (
        <div className="text-white" style={{backgroundColor: '#0f0f0f'}}>
            <div>
                {
                    categories.map((item) => <p className="cursor-pointer bg-gray-600 p-2 m-4 rounded-lg" onClick={() => handleVideoCategory(item.id)} key={item.id}>{item.name}</p>)
                }
            </div>
        </div>
    )
}

export default Sidebar
