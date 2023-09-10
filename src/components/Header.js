import logo from '../assets/ylogo.svg';
import hamburger from '../assets/hamburger.png';
import user from '../assets/usericon.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-4 sm:bg-red-300 md:bg-yellow-400 bg-purple-500' style={{backgroundColor : '#282828'}} >

    <div className='flex items-center'>
        <img src={hamburger} alt='hamburger' className='h-6'/>
        <img src={logo} alt='logo' className='ml-2 h-16'/>
    </div>

    <div className='flex items-center'>
        <input placeholder='Search' className='focus:outline-none caret-white w-[28rem] px-5 py-2 rounded-l-full text-white text-sm
        ' style={{backgroundColor:'rgb(49 47 47)'}}/>
        <span className='w-10 h-9 text-xl cursor-pointer rounded-r-full p-1' style={{backgroundColor: 'rgb(80 77 77)'}}>🔍</span>
    </div>

    <div>
        <img src={user} alt='user' className='h-9 cursor-pointer'/>
    </div>
    </div>
  )
}

export default Header