import { Link } from "react-router-dom"
import {Button}  from "@material-tailwind/react"
import { useState } from "react"
import { allfragrances } from "../Api/fragranceapi"
import { motion } from "framer-motion";


const  Fragnances = () => {
  const [search , setSearch] = useState("")

  const [allperfumes, setAllperfumes] = useState(allfragrances);
  const [prodata, setProdata] = useState(allfragrances);

const filterproduct = (curitem) => {
  const result = allperfumes.filter((item) => {
    return item.category === curitem;
  });
  console.log(result);
  setProdata(result);
};
 const setFilter =()=>{
         setProdata(allperfumes)
 }
  return (
    <div>
            <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  
>
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
        <Link to="/fragrance" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Fragnances</Link>
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
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <a href="#" className="block px-2 py-3">Totes</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Backpacks</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                  </li>
                </ul>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span className="font-medium text-gray-900">Color</span>
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
                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-category-0" name="category[]" defaultValue="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-category-1" name="category[]" defaultValue="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-category-2" name="category[]" defaultValue="travel" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-category-3" name="category[]" defaultValue="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-category-4" name="category[]" defaultValue="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                      <span className="font-medium text-gray-900">Size</span>
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
                  <div className="pt-6" id="filter-section-mobile-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-size-0" name="size[]" defaultValue="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-size-1" name="size[]" defaultValue="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-size-2" name="size[]" defaultValue="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-size-3" name="size[]" defaultValue="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-size-4" name="size[]" defaultValue="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-size-5" name="size[]" defaultValue="40l" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Fragnances</h1>
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
              
                   
              
                  <div className="flex space-x-1 w-[27rem]">
                  <Button onClick={setFilter} >All Fragnances</Button>
                 <Button  onClick={()=>filterproduct('Mens Fragrances')}>Men Fragnances</Button>
                  </div>
                <div>
                <li>
                <Button  onClick={()=>filterproduct('Women Fragrances')} className="w-72">Women Fragnances</Button>
                  </li>
                </div>
               <div className="flex w-[26rem] space-x-1">
               <li>
                    <Button onClick={()=>filterproduct('Kids Fragrances')}>Kid Fragnances</Button>
                  </li>
                  <li>
                    <Button onClick={()=>filterproduct('Mens Fragrances')} >Boy Fragnances</Button>
                  </li>
               </div>
                  <li>
                    <Button className="w-72"  onClick={()=>filterproduct('Women Fragrances')} >Girls Fragnances</Button>
                  </li>
           
                 
                </ul>
            
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                      <span className="font-bold text-lg text-gray-900">Category</span>
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
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4 font-bold">
                      <div className="flex items-center">
                        <input id="filter-category-0" name="category[]" defaultValue="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-900">Eau Fraiche</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-1" name="category[]" defaultValue="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">Solid Perfume
</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-2" name="category[]" defaultValue="travel" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Aftershave
</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-3" name="category[]" defaultValue="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-600">Aftershave
</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-4" name="category[]" defaultValue="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">Body Mist
</label>
                      </div>
                    </div>
                  </div>
                </div>
             
              </form>
              {/* Product grid */}
              <div className=" grid grid-cols-3 col-span-3">
              {prodata.filter((x)=>{
        if(search==""){
          return x
        }
        else if(x.title.toLowerCase().includes(search.toLowerCase())){
          return x
        }
      }).map((b)=>{
                return(
                 <>
       <div className="m-3 group px-10 py-5 bg-green-100 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-gray-300 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">


        <div className="relative cursor-pointer">
          <img className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-110  border-2 border-gray-950 rounded-xl" src={b.image} alt="Placeholder Image" />
          <img className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 ease-in-out opacity-0 hover:opacity-100  border-2 border-gray-950 rounded-xl" src={b.imagehover} alt="Hover Image" />
        </div>

      <p className="cardtxt font-semibold text-black tracking-wider group-hover:text-gray-900 text-md">
        {b.title}
      </p>
     
      <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
        <p className="ordernow-text text-black font-semibold group-hover:text-gray-900 text-lg">
          {b.price}
        </p>
        <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-black  group-hover:text-white bg-green-400 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
          Add to Cart
        </p>
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
    </motion.div> </div>
        
  )
  
}

export default Fragnances