import logo from '../assets/ylogo.svg';
import hamburger from '../assets/hamburger.png';
import user from '../assets/usericon.png';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/hamburgerToggleSlice';
import { useEffect, useState } from 'react';
import { getSearchVideo } from '../utils/fetchSearchVideoSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [searchText , seTSearchText] = useState('');
  const [suggestions , setSuggestions] = useState();
  const [showDiv , setShowDiv] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handletoggleSidebar () {
    dispatch(toggleSidebar());
  }

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchText]);

  async function getSearchSuggestions () {
    const data = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
  }

  function handleSearchVideos(text) {
    if(text) {
      navigate('/search/' + text);
    }
    seTSearchText('');
  }


  return (
    <div className='relative top-0'>
    <div className='flex justify-between items-center px-4 sm:bg-red-300 md:bg-yellow-400 bg-purple-500' style={{backgroundColor : '#282828'}} >

    <div className='flex items-center'>
        <img src={hamburger} alt='hamburger' className='h-6 cursor-pointer' onClick={() => handletoggleSidebar()}/>
        <img src={logo} alt='logo' className='ml-2 h-16'/>
    </div>

    <div className='flex items-center'>
        <input placeholder='Search' className='focus:outline-none caret-white w-[28rem] px-5 py-2 rounded-l-full text-white text-sm
        ' style={{backgroundColor:'rgb(49 47 47)'}} value={searchText} 
          onChange={(e) => seTSearchText(e.target.value)}
          onFocus={()=> setShowDiv(true)} 
          onBlur={() => setShowDiv(false)}/>
          
        
          <span className='w-10 h-9 text-xl cursor-pointer rounded-r-full p-1' style={{backgroundColor: 'rgb(80 77 77)'}}
        onClick={()=> handleSearchVideos(searchText)}
        >🔍</span>
      
    </div>

    <div>
        <img src={user} alt='user' className='h-9 cursor-pointer'/>
    </div>
    </div>

    {
      showDiv && (
        <ul className='fixed left-[35rem] shadow-lg rounded-lg'>
        {
          suggestions && (
            suggestions.map((item) => <li key={item} className=' rounded-sm py-1 px-3 text-white  w-[30rem] bg-gray-900 hover:bg-white hover:text-blue-900 hover:font-semibold cursor-pointer'>{item}</li>)
          )
        }
         </ul>
      )
    }
   </div>
  )
}

export default Header
