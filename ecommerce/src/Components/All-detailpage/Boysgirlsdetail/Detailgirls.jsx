import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import kidsgirls from "../../../Api/kidsgirlsapi";
import { useDispatch } from "react-redux";
import { add } from "../../../Redux/cartSlice";

const Detailgirls = () => {
   
  const dispatch =useDispatch();
  const addcart = (x)=>{
  dispatch(add(x))
 }

  const [detail, setDetail] = useState(kidsgirls)
  console.log(setDetail)
  let { id } = useParams();
  let res = detail.find((b) => b.id == id)
  return (
   <div className="cursor-pointer">
  {/* component */}
  <section className="text-gray-700 body-font overflow-hidden bg-gray-100 mr-5 ml-10 mt-20 mb-20 rounded-3xl">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        {/* <img alt="ecommerce" className="lg:w-1/2  object-cover object-center rounded border border-gray-200 " 
        src={res.image} /> */}
        <div className="md:flex-1 px-2">
          <div className=" rounded-lg bg-gray-300 mb-4 mt-4">
          <img className="w-full h-[25rem] object-cover rounded-xl" src={res.image} alt="Product Image" />
          </div>
            <div className="flex justify-center">
          <img className="w-32 h-32 me-3 object-cover rounded-lg" src={res.imagehover} alt="Product Image" />
          <img className="w-32 h-32  me-3 object-cover rounded-lg" src={res.imagehover} alt="Product Image" />
          <img className="w-32 h-32 object-cover rounded-lg" src={res.imagehover} alt="Product Image" />
            </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">{res.title}</h1>
        <p className="w-96 text-black-600 dark:text-gray-300 font-medium text-xl mb-3">
            <b className="text-xl">Category :</b> {res.category} </p>
          
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-gray-900 font-medium ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
          </div>
          <div className="flex mt-6">
            <span className="font-bold text-2xl text-black-700 dark:text-gray-300">Product Code:</span>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-bold mt-0.5 ml-10">
             {res.productcode}
            </p>
          </div>
          <div className="mb-6 mt-5 flex items-center">
            <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Select Color:</span>
            <div className="flex ml-14">
              <button className="6 w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
              <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
              <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
              <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
            </div>
          </div>
          <div className="flex">
            <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Select Size:</span>
            <div className="flex items-center mb-2 ml-14">
              <button className="bg-gray-300 text-gray-700 dark:text-white py-1.5 px-3.5 rounded-full font-bold mr-2 hover:bg-gray-400">S</button>
              <button className="bg-gray-300 text-gray-700 dark:text-white py-1.5 px-3 rounded-full font-bold mr-2 hover:bg-gray-400 ">M</button>
              <button className="bg-gray-300  text-gray-700 dark:text-white py-1.5 px-3 rounded-full font-bold mr-2 hover:bg-gray-400 ">L</button>
              <button className="bg-gray-300  text-gray-700 dark:text-white py-2 px-3 rounded-full font-bold mr-2 hover:bg-gray-400 ">XL</button>
       
            </div>
          </div>
       
          <div className="flex mt-5">
            <div className="mr-4 me-5">
              <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Price:</span>
              <span className="text-gray-600 text-2xl font-bold ml-10">{res.price} PKR</span>
            </div>
            
          </div>
          <div className="flex -mx-2 mb-4 mt-10">
            <div className="w-60 px-2">
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-5 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>addcart(res)}>Add to Cart</button>
            </div>
            <div className="w-60 px-2">
            <Link to="/kidsgirls">
            <button className="w-full bg-yellow-600 dark:bg-gray-700 text-white dark:text-white py-1.5 px-4  rounded-full font-bold flex">
            <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 mt-0.5 text-black w-6 h-6">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
  </svg>
   </div>
  <div className="text-lg">
              Continue Shopping
              </div></button>
            </Link> 
            </div>
          </div>
           
     
        </div>
     
      </div>
    </div>
  </section>
</div>

  )
}

export default Detailgirls