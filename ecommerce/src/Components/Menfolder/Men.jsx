import { Link } from "react-router-dom"

const Men = () => {
  return (
    <div className="mt-8">
   <section className="text-gray-600 body-font font-extrabold">
   <nav className="flex mb-5" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2">
    <li className="inline-flex items-center">
      <Link to="/" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
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
 
  </ol>
</nav>
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/kameez">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Mens Card Images/Mens Card Image 1.webp" />
        </div>
       </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/menkurta">
       <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Mens Card Images/Mens Card Image 2.webp" />
        </div>
       </Link>

      </div>
    </div>
  </div>
</section>
{/* three card */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col">
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full " src="/Images/Mens Card Images/Mens Footwear Card Image.webp" />
        </div>
        <h2 className="text-xl font-bold text-center  title-font text-gray-900 mt-5">Men Footwear</h2>
       
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Mens Card Images/Mens Kurta Pajama Card IMage.webp" />
        </div>
        <h2 className="text-xl font-bold text-center  title-font text-gray-900 mt-5">Men Kurta Pajama</h2>
     
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
       <Link to="/manfragrance">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-[27.5rem] w-full" src="/Images/Slider Images/Slider Image 3.webp" />
        </div>
       </Link>
        <h2 className="text-xl font-bold text-center  title-font text-gray-900 mt-5">Men Fragnances</h2>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font font-extrabold">

  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/waiscot">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Mens Card Images/Mens Card Image Waiscoat.webp" />
        </div>
       </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Mens Card Images/Mens Card Image Wedding.webp" />
        </div>

      </div>
    </div>
  </div>
</section>





    </div>
    
  )
}

export default Men