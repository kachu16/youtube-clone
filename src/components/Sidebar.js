import { useDispatch, useSelector } from "react-redux";
import { categories } from "../utils/config";
import { fetchVideos } from "../utils/fetchVideosSlice";
import {AiFillHome} from 'react-icons/ai';
import { Link } from "react-router-dom";
import {setInitialVideo} from '../utils/fetchVideosSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(store => store.hamburger.isVisible);

    const handleVideoCategory = (id) => {        
        dispatch(fetchVideos(id));
    }
    const handleHomeVideoCategory = () => {
        dispatch(setInitialVideo());
    }

    return !isVisible ? null : (
        <div className="text-white w-72 border-r-2 h-[92vh]">
            <div>
                <Link to='/' onClick={() => handleHomeVideoCategory()}>
                <div className="cursor-pointer p-2 m-4 rounded-lg flex items-center ">
                        <span className="ml-1 mr-4"><AiFillHome/></span>
                        <p>Home</p>
                </div>
                </Link>

                {
                    categories.map((item) => (
                        <div key={item.id} className="cursor-pointer p-2 m-4 rounded-lg flex items-center ">
                            <span className="ml-1 mr-4">{item.icon}</span>
                            <p onClick={() => handleVideoCategory(item.id)} >{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
