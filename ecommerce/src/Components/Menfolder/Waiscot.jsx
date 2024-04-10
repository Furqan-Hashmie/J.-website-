import { Link } from "react-router-dom"
import menswaiscoat from "../../Api/menswaiscoatapi"
import { useDispatch } from "react-redux";
import { add } from "../../Redux/cartSlice";
import { useState } from "react";
import { Button } from "@material-tailwind/react";


const WaisCot = () => {
  const [search , setSearch] = useState("")

  const [allclothes, setAllclothes] = useState(menswaiscoat);
  const [prodata, setProdata] = useState(menswaiscoat);

const filterproduct = (curitem) => {
  const result = allclothes.filter((item) => {
    return item.category === curitem;
  });
  setProdata(result);
};
const filtercolor = (curitem) => {
  const result = allclothes.filter((item) => {
    return item.color === curitem;
  });
  setProdata(result);
};
 const setFilter =()=>{
         setProdata(allclothes)
 }
  const dispatch =useDispatch();
  const addcart = (x)=>{
  dispatch(add(x))
 }
  return (
    <div>
    <nav className="flex mb-5 mt-5" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2">
    <li className="inline-flex items-center">
      <Link to="/" className="text-gray-700 hover:text-gray-900 inline-flex items-center font-extrabold">
        <svg className="w-5 h-5 mr-1 ml-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
          </path>
        </svg>
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <Link to="/men" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Men Collection</Link>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <Link to="/kameez" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Men Waiscoat</Link>
      </div>
    </li>
 
  </ol>
</nav>
    <div className="bg-white">
      <div>
        {/*
    Mobile filter dialog
    
    Off-canvas filters for mobile, show/hide based on off-canvas filters state.
        */}
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          {/*
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.
    
      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            {/*
        Off-canvas menu, show/hide based on off-canvas menu state.
    
        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      */}
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only font-bold text-xl">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <a href="#" className="block px-2 py-3">Wash and Wear</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Boski</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Lawn</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Cotton</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Linen</a>
                  </li>
                </ul>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span className="font-bold text-gray-900 text-lg">Color</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" defaultValue="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" defaultValue="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-2" name="color[]" defaultValue="blue" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" defaultValue="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" defaultValue="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" defaultValue="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                      <span className="font-medium text-gray-900">Category</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                 
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Men WaisCoat</h1>
               {/* search bar */}
                  {/* search bar */}
 <div>
 <button className=" bg-gray-400 p-3 rounded">
    <div className="relative mx-auto  text-gray-600">
          <input className="border-2 border-gray-700 placeholder-current w-80  h-9 px-5 pr-16  rounded-xl text-sm focus:outline-none " type="search" name="search" placeholder="Search"
         onChange={(e)=>setSearch(e.target.value)} />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
    </button>
 </div>
        {/* search bar */}
        {/* search bar */}
            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="group inline-flex justify-center text-sm font-bold text-gray-900 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Sort
                    <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/*
            Dropdown menu, show/hide based on menu state.
    
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}
              
              </div>
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                </svg>
              </button>
              <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                <span className="sr-only">Filters</span>
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-md font-bold text-gray-900">
                  <li>
                  <div className="flex space-x-1 w-[27rem]">
                  <Button onClick={setFilter} >Reset</Button>
                 <Button className="w-52" onClick={()=>filterproduct('Mens Cotton WaisCoat')}>Cotton Waiscot</Button>
                  </div>
                  </li>
                  <li>
                  <Button  onClick={()=>filterproduct('Mens Polyster WaisCoat')} className="w-72">Polyster WaisCoat</Button>
                  </li>
                  <li>
                  <div className="flex w-[26rem] space-x-1">
               <li>
                    <Button>Unstitched</Button>
                  </li>
                  <li>
                    <Button onClick={()=>filterproduct('Mens Blended WaisCoat')}>Blended WaisCoat</Button>
                  </li>
               </div>
                  </li>
                  <li>
                  <Button className="w-72" onClick={()=>filterproduct('Mens Suiting WaisCoat')}>Suiting WaisCoat</Button>
                   
                  </li>
                </ul>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                      <span className="font-bold text-xl text-gray-900">Color</span>
                      <btn onClick={setFilter} className="bg-black p-1.5 px-4 rounded-lg cursor-pointer text-white font-extrabold">Reset Color</btn>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4 font-bold">
                
                      <div className="flex items-center">
                      <button className="w-6 h-6 rounded-full bg-black dark:bg-gray-200 " />
                        <label htmlFor="filter-color-0" className="ml-2 mt-0.5 text-md text-gray-900 cursor-pointer"
                          onClick={()=>filtercolor('Black')}
                        >Black</label>
                      </div>
                      <div className="flex items-center">
                      <button className="w-6 h-6 rounded-full bg-brown-700 dark:bg-gray-200 " />
                        <label htmlFor="filter-color-1" className="ml-2 mt-0.5 text-md text-gray-900 cursor-pointer"
                        onClick={()=>filtercolor('Brown')}>Brown</label>
                      </div>
                      <div className="flex items-center">
                      <button className="w-6 h-6 rounded-full bg- dark:bg-gray-200 " />
                        <label htmlFor="filter-color-2" className="ml-2 mt-0.5 text-md text-gray-900 cursor-pointer"
                        onClick={()=>filtercolor('Black')}>Black</label>
                      </div>
                      <div className="flex items-center">
                      <button className="w-6 h-6 rounded-full bg-gray-700 " />
                        <label htmlFor="filter-color-3" className="ml-2 mt-0.5 text-md text-gray-900"
                        onClick={()=>filtercolor('Grey')}>Grey</label>
                      </div>
                      <div className="flex items-center">
                      <button className="w-6 h-6 rounded-full bg-red-900 " />
                        <label htmlFor="filter-color-5" className="ml-2 mt-0.5 text-sm text-gray-900"
                        onClick={()=>filtercolor('Maroon')}>Maroon</label>
                      </div>
                  
                    </div>
                  </div>
                </div>
             
           
              </form>
              {/* Product grid */}
              <div className="grid grid-cols-3 col-span-3">
            {prodata.filter((x)=>{
              if(search == ""){
                return x
              }
              else if(x.title.toLowerCase().includes(search.toLowerCase())){
                return x
              }
            })
            .map((x)=>{
                return(
                 <>
    <div className="relative m-10 w-72 max-w-xs overflow-hidden rounded-lg bg-white  shadow-xl hover:shadow-gray-700">
  <Link to={`/waiscot/${x.id}`}>
  <div className="relative cursor-pointer">
          <img className="w-full h-64 object-cover transition rounded-xl duration-300 ease-in-out transform hover:scale-110" src={x.image} alt="Placeholder Image" />
          <img className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition duration-300 ease-in-out opacity-0 hover:opacity-100" src={x.imagehover} alt="Hover Image" />
        </div> 
  </Link>
  <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-slate-900">{x.title}</h5>
    </a>
    <div className="mt-2.5 mb-5 flex items-center">
      <span className="mr-2 rounded bg-yellow-700 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    <p>
        <span className="text-xl font-bold text-slate-900">{x.price} PKR</span>
      </p>
    <div className="flex items-center justify-center text-center mt-7 cursor-pointer">
      <a  className="flex items-center text-center rounded-md bg-black px-5 py-2.5 w-56 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={()=>addcart(x)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 ml-8 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart</a>
    </div>
  </div>
</div>


                 </>
                )
              })} 
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    
    
        </div>
  )
}

export default WaisCot