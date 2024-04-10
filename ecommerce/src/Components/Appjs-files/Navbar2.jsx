import { Link } from "react-router-dom"


const Navbar2 = () => {
  return (
<div>
  <nav className="relative  flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-xl hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 rounded-xl" data-te-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      {/* Hamburger button for mobile view */}
      <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent8" aria-controls="navbarSupportedContent8" aria-expanded="false" aria-label="Toggle navigation">
        {/* Hamburger icon */}
        <span className="[&>svg]:w-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {/* Collapsible navbar container */}
      <div className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent8" data-te-collapse-item>
        {/* Left links */}
        <ul className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row space-x-6" data-te-navbar-nav-ref>
          {/* Home link */}
          <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <Link to="/newarival" className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 hover:border-b-2 border-b-black font-semibold max-w-fit text-xl" aria-current="page" href="#" data-te-nav-link-ref>New Arival</Link>
          </li>
          {/* Link */}
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/online" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Online Edition</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/cast" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Cast & Crew</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/women" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Women</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/men" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Men</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/boygirls" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Boys & Girls</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/fragrances" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Fragrances</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/catalogue" className="p-0 text-neutral-600 transition duration-200 hover:text-black hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Catalogue</Link>
          </li>
          <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <Link to="/sale" className="p-0 text-red-500 transition duration-200 hover:text-red-600 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none text-xl hover:border-b-2 border-b-black font-semibold max-w-fit lg:px-2 [&.active]:text-black/90 " data-te-nav-link-ref>Sale</Link>
          </li>
      
          
      
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar2