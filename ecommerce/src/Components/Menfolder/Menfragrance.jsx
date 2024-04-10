import { Link } from "react-router-dom";
import menfragrances from "../../Api/mensfragapi";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";



const Menfragrance = () => {
  
  const [allfragrances, setAllFragrances] = useState(menfragrances);
  const [prodata, setProdata] = useState(menfragrances);

  const filterProduct = (curitem) => {
    const result = allfragrances.filter((item) => {
      return item.category === curitem;
    });
    console.log(result);
    setProdata(result);
  };

  const resetFilter = () => {
    setProdata(allfragrances);
  };

  return (
    <div>
        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className=""
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
        <Link to="/men" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Men Collection</Link>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <Link to="/manfragrance" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Men Fragnances</Link>
      </div>
    </li>
 
  </ol>
</nav>

<h1 className="text-center text-3xl font-bold  border-b border-gray-200 py-4">Men Fragrance</h1>
      <ul role="list" className="ml-96 mt-4 flex space-x-5  pb-6 text-md font-bold text-gray-900">
        <Button>
          <li>
            <a onClick={resetFilter}>All Fragnances</a>
          </li>
        </Button>
        <li>
          <Button>
            <a onClick={() => filterProduct('Mens Fragrances')}>Men Fragnances</a>
          </Button>
        </li>
        <li>
                <Button>
                <a onClick={()=>filterProduct('Women Fragrances')}>Women Fragnances</a>
                </Button>
                  </li>
      </ul>
 
      <div className="lg:col-span-6 flex flex-wrap mt-5 justify-center">
        {prodata.map((x) => (
            <div className="relative m-4 w-80 max-w-sm   rounded-lg bg-white shadow-xl hover:shadow-gray-700" key={x.id}>
               
               <Link to={`/manfragrance/${x.id}`}>
               <div className="relative cursor-pointer">
              <img className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-110" src={x.image} alt="Placeholder Image" />
              <img className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 ease-in-out opacity-0 hover:opacity-100" src={x.imagehover} alt="Hover Image" />
            </div>
               </Link>
                        <button className="absolute top-0 left-0 w-30 mt-2 ml-3 px-4 py-1 bg-yellow-300 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
      Sale
    </button>
                        <div className="mt-4 px-5 pb-5">
                          
                            <p>
                                <h5 className="text-xl font-bold mb-2 text-center tracking-tight text-slate-900">{x.title}</h5>
                            </p>
                          
    
                            <div className="flex items-center justify-between mt-10">
                                <p>
                                    <span className="text-3xl font-bold text-slate-900">{x.discounted}</span>
                                    <span className="text-sm text-slate-900 line-through">{x.price}</span>
                                </p>
                                <p className="bg-red-600 flex items-center rounded-md  px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart</p>
                            </div>
                        </div>
                    </div>
        ))}
      </div>
      </motion.div>
    </div>
    
  
  );
};

export default Menfragrance;