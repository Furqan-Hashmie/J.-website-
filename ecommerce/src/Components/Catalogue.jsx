import { Link } from "react-router-dom"
import { catalogueapi } from "../Api/catalogue"
import { useState } from "react"
import { Button } from "@material-tailwind/react"


const Catalogue = () => {
  
const [search , setSearch] = useState("")

const [allfragrances, setAllFragrances] = useState(catalogueapi);
const [prodata, setProdata] = useState(catalogueapi);

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
    
    <section className="text-gray-600 body-font font-extrabold mt-10">
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
        <Link to="/catalogue" className="text-black hover:text-gray-900 ml-1 md:ml-2 text-md  font-extrabold items-center ">Catalogue</Link>
      </div>
    </li>
       {/* search bar */}
       <div className="ml-64">
 <button className="ml-64 bg-gray-400 p-3 rounded">
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
  </ol>
</nav>
<ul role="list" className="ml-64 mt-8 flex space-x-5  pb-6 text-md font-bold text-gray-900">
        <Button>
          <li>
            <a onClick={resetFilter}>Reset All</a>
          </li>
        </Button>
        <li>
          <Button>
            <a onClick={() => filterProduct('Mens Collection')}>Men Collection</a>
          </Button>
        </li>
        <li>
                <Button>
                <a onClick={()=>filterProduct('Women Collection')}>Women Collection</a>
                </Button>
                  </li>
                  <li>
                <Button>
                <a onClick={()=>filterProduct('Kids Collection')}>Kids Collection</a>
                </Button>
                  </li>
                  <li>
                <Button>
                <a onClick={()=>filterProduct('Wedding Collection')}>Wedding Collection</a>
                </Button>
                  </li>
      </ul>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
     {prodata.filter((x)=>{
        if(search==""){
          return x
        }
        else if(x.title.toLowerCase().includes(search.toLowerCase())){
          return x
        }
      }).map((x)=>{
      return(
        <div className="p-4 w-96 sm:mb-0 mb-6 rounded-xl shadow-xl hover:shadow-gray-700 mx-6 my-4">
       <Link to="#">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-[27.5rem] w-full" src={x.image} />
        </div>
       </Link>
        <h2 className="text-xl font-bold text-center  title-font text-gray-900 mt-5">{x.title}</h2>
      </div>
      )
     })}
    </div>
  </div>
</section>
    </div>
  )
}

export default Catalogue