import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import kameezshalware from "../../../Api/kameezshalwarapi";
import { useDispatch } from "react-redux";
import { add } from "../../../Redux/cartSlice";

const Detailpage2 = () => {
     const dispatch = useDispatch()
     const addcart =(x)=>{
         dispatch(add(x))
     }  
   
    const [detail, setDetail] = useState(kameezshalware)
    console.log(setDetail)
    let { id } = useParams();
    let res = detail.find((b) => b.id == id)
    return (
      <div className="cursor-pointer">
      <div className="text-center font-bold text-5xl underline mt-5"><p>Products Detail</p></div>
       <div className="bg-gray-100 dark:bg-gray-800 py-8 ml-20 mr-20 mb-20 mt-5 rounded-3xl">
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row md:flex-row w-full">
   
        <div className="md:flex-1 px-2">
          <div className=" rounded-lg bg-gray-300 mb-4">
          <img className="w-full h-96 object-cover rounded-xl" src={res.image} alt="Product Image" />
            {/* <ReactImageMagnify {...{
      smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: res.image
      },
      largeImage: {
          src: res.image,
          width: 600,
          height: 1200
      },
      enlargedImagePosition:"over"
  
  }} /> */}
          </div>
            <div className="flex justify-around">
          <img className="w-32 h-32 me-2 object-cover rounded-xl" src={res.imagehover} alt="Product Image" />
          <img className="w-32 h-32 me-2 object-cover rounded-xl" src={res.imagehover} alt="Product Image" />
          <img className="w-32 h-32 object-cover rounded-xl" src={res.imagehover} alt="Product Image" />
            </div>
        </div>
        <div className="md:flex-1 pl-20">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{res.title}</h2>
          <p className="w-96 text-black-600 dark:text-gray-300 font-medium text-xl mb-3">
            <b className="text-2xl">Category :</b> {res.category} </p>
          <div className="flex">
            <div className="mr-4 me-5 mb-2">
              <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Price:</span>
              <span className="text-gray-600 text-xl font-bold ml-4">{res.price} PKR</span>
            </div>
            
          </div>
          <div>
              <span className="font-bold text-black-100 text-2xl dark:text-gray-300">Availability:</span>
              <span className="text-xl text-red-600 dark:text-gray-300 ml-4 font-bold">                  In Stock</span>
            </div>
          <div className="mb-4 mt-3">
            <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Select Color:</span>
            <div className="flex mt-2">
              <button className="6 w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
              <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
              <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
              <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold text-black-700 text-2xl dark:text-gray-300">Select Size:</span>
            <div className="flex items-center mt-2">
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
            </div>
          </div>
          <div className="flex mt-6">
            <span className="font-bold text-2xl text-black-700 dark:text-gray-300">Product Code:</span>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-bold mt-0.5 ml-10">
             {res.productcode}
            </p>
          </div>
                 <div className="flex -mx-2 mb-4 mt-10">
            <div className="w-60 px-2">
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-5 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>addcart(res)}>Add to Cart</button>
            </div>
            <div className="w-60 px-2">
            <Link to="/kameez">
            <button className="w-full bg-yellow-700 dark:bg-gray-700 text-white dark:text-white py-1.5 px-4  rounded-full font-bold flex">
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
  </div>
  
  
      </div>



    )
}
export default Detailpage2;