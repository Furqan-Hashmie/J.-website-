import { Link } from "react-router-dom"
import toddlers from "../../Api/Toddlers"

const BoysGirls = () => {
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
        <Link to="/boygirls" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Boy&Girls Collection</Link>
      </div>
    </li>
 
  </ol>
</nav>
</section>
 <section className="text-gray-600 body-font font-extrabold">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/kidsboys">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Boys & Girls Home/kids boys new.webp" />
        </div>
       </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <Link to="/kidsgirls">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Boys & Girls Home/kids girls new.webp" />
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>
{/* three card */}
 {/* toddlers cards */}
 <h1 className="text-center text-2xl font-bold border-b-2 border-black py-1">Toddlers</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {toddlers.map((b) => (
              <>
       <div className="m-3 group px-10 py-5 bg-yellow-100 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-gray-300 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
        <div className="relative cursor-pointer">
          <img className="w-full object-cover transition duration-300 ease-in-out transform hover:scale-105 border-2 border-gray-950 rounded-xl" src={b.image} alt="Placeholder Image" />
        </div>
      <p className="cardtxt font-semibold text-black tracking-wider group-hover:text-gray-900 text-md">
        {b.title}
      </p>
     
      <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
        <p className="ordernow-text text-black font-semibold group-hover:text-gray-900 text-lg">
          {b.price}
        </p>
        <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-black  group-hover:text-white bg-yellow-300 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
          Add to Cart
        </p>
      </div>
    </div>
                 </>
            ))}
        </div>
          {/* toddlers cards end */}




          <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/teenboys">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Boys & Girls Home/teen-boys.webp" />
        </div>
       </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="/teengirls">
       <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/Images/Boys & Girls Home/teen-girls_.webp" />
        </div>
       </Link>
      </div>
    </div>
  </div>






    </div>
    
  )
}

export default BoysGirls