import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../../Context/TokenAuth"
import { useSelector } from "react-redux"
import Badge from '@mui/material/Badge';
import { Newlogin } from "../../Pages/Newlogin";
import { useState } from "react";




const Navbar = ({setIsloged}) => {
  const getdata = useSelector((state) => state.cartReducer.carts)

     const [auth , setAuth] =useAuth()

     const handlelogout =()=>{
      setIsloged(false)
        setAuth({
          ...auth,
          user: null,
          token: null
        })
        localStorage.removeItem("auth")
     }
  return (
<div> 
  <nav className="relative px-4 flex justify-between items-center bg-[#FBFBFB] rounded-xl">

    <a className="text-md font-bold items-center  text-black flex flex-wrap list-none space-x-10 " href="#">
     <li className="font-extrabold text-lg hover:border-b-2 border-b-black flex">Welcome to <img src="/Images/new_logo.webp" className="h-5 mt-1.5 ml-1"></img></li>
     <li className="hover:border-b-2 border-b-black transition-shadow lg:flex-none">Tracking info</li>
     <li className="hover:border-b-2 border-b-black transition-transform">About Us</li>
    </a>
    <div className="lg:hidden">
      <button className="navbar-burger flex items-center text-violet-600 p-1" id="navbar_burger">
        <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Hamberger menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
      <li>
        <div className="relative mx-auto text-gray-900">
          <input className="border border-gray-700 placeholder-current w-80  h-9 px-5 pr-16  rounded-xl text-sm focus:outline-none " type="search" name="search" placeholder="Search" />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg className="text-black font-extrabold h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
    <div className="hidden lg:flex items-center space-x-9">
    <div className="flex">
  <div className="group relative cursor-pointer py-2">
    <div className="flex items-center rounded-3xl justify-between  bg-white-300 px-4">
      <a className="flex flex-wrap space-x-2 menu-hover  py-2 text-sm  font-bold text-black lg:mx-4">
      <img src="/Images/pakistan (1).png" className="h-5"/><p>PKR</p>
      </a>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </div>
    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important] me-2" />
       AUD
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1196px_!important] me-2" /> GBP
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-36px_-910px_!important] me-3" /> CAD
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-600 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1430px_!important] me-3" /> EUR
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1976px_!important] me-3" /> JPY
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-0px_-1742px_!important] me-3" /> SEK
      </a>
      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] me-3" />  USD
      </a>
    </div>
  </div>
</div>
    <div>
    {/* bag icon */}
    <a className="text-2xl font-extrabold text-black" href="#">
    <Link to='/cart' className="text-black">  <Badge badgeContent={getdata.length} color="primary">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
</svg>

    </Badge></Link>
    </a>
    </div>
    <div>
      <Newlogin/>
    </div>
   <div>
        <span className="hidden" id="util_data" data="{{ json_encode($util_data) }}" />
        {!auth.user ? (
          <Link className="bg-gray-200  py-1.5 px-3 m-1 text-md font-extrabold text-centerborder border-gray-300 rounded-md text-black  hover:bg-gray-100  hidden lg:inline-block hover:border-b-2 border-b-black" to="/signup" >
      Sign up
        </Link>
        ):(
        <Link className="bg-gray-200  py-1.5 px-3 m-1 text-md font-extrabold text-center border border-gray-300 rounded-md text-black  hover:bg-gray-100  hidden lg:inline-block hover:border-b-2 border-b-black" 
        onClick={handlelogout} >
       Log-Out
        </Link>
        )}
      
      </div>
    </div>
  </nav>
  {/* mobile navbar */}
  <div className="navbar-menu relative z-50 hidden">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
    <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <Link className="mr-auto text-xl font-bold text-black dark:text-gray-100" >
          Welcome to J.
        </Link>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
            </path>
          </svg>
        </button>
      </div>
      <div className=" relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-5 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:placeholder-gray-200 dark:bg-gray-500 dark:border-gray-50" type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      <div className="mt-auto">
        <div className="pt-6">
          <button id="theme-toggle-2" type="button" className=" py-2.5 w-[97.6%] mb-3 rounded-xl flex justify-center align-middle px-3 m-1 text-center bg-gray-100 border border-gray-300  text-black   dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg id="theme-toggle-dark-icon-2" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg id="theme-toggle-light-icon-2" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
  <Outlet/>
</div>

  )
}

export default Navbar