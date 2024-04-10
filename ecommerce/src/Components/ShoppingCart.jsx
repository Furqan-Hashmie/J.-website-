// import { useDispatch, useSelector } from "react-redux";
// import { add, remove, removetocart } from "../Redux/cartSlice";
// import { Link } from "react-router-dom";

// const ShoppingCart = () => {
//   const dispatch = useDispatch();
//   const Rdata = (id) => {
//     dispatch(removetocart(id));
//   };
//   const increment = (x) => {
//     dispatch(add(x));
//   };
//   const decrement = (x) => {
//     dispatch(remove(x));
//   };
//   const getdata = useSelector((state) => state.cartReducer.carts);

//   return (
//     // <div>
//     //   <div className="bg-gray-100 h-screen py-8 w-full">
//     //     <div className="container mx-auto px-4">
//     //       <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//     //       <div>
//     //         <div className="md:w-3/4 lg:w-full">
//     //           <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//     //             <table className="w-full">
//     //               <thead>
//     //                 <tr>
//     //                   <th className="text-left font-semibold">Product</th>
//     //                   <th className="text-justify font-semibold">Title</th>
//     //                   <th className="text-justify font-semibold">Category</th>
//     //                   <th className="text-justify font-semibold">Price</th>
//     //                   <th className="text-left font-semibold pl-28">Quantity</th>
//     //                   <th className="text-left font-semibold">Total</th>
//     //                   <th className="text-wrap font-semibold">Delete</th>
//     //                 </tr>
//     //               </thead>
//     //               <tbody>
//     //                 {getdata.map((x) => {
//     //                  return(
//     //                     <tr key={x.qty}>
//     //                     <td className="py-4">
//     //                       <div className="items-center">
//     //                         <img
//     //                           className="h-20 w-16 mr-3"
//     //                           src={x.image}
//     //                           alt="Product image"
//     //                         />
//     //                       </div>
//     //                       </td>
//     //                 <td className="py-4 w-[17rem] ">{x.title.slice(0,19)}</td>
//     //                   <td className="py-4">{x.category}</td>
//     //                   <td className="py-4">{x.price}</td>
//     //                     <td className="py-4 pl-20">
//     //                       <div className="flex items-center">
//     //                         <button
//     //                           className="border rounded-md py-2 px-4 mr-2"
//     //                           onClick={() => decrement(x)}
//     //                         >
//     //                           -
//     //                         </button>
//     //                         <span className="text-center w-8">{x.qty}</span>
//     //                         <button
//     //                           className="border rounded-md py-2 px-4 ml-2"
//     //                           onClick={() => increment(x)}
//     //                         >
//     //                           +
//     //                         </button>
//     //                       </div>
//     //                     </td>
//     //                     <td className="py-4 pr-10"><h1>{x.price*x.qty}</h1></td>
//     //                     <td className="flex justify-center mt-8 ">
//     //                       <button
//     //                         type="button"
//     //                         className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//     //                         onClick={() => Rdata(x.id)}
//     //                       >
//     //                         <svg
//     //                           xmlns="http://www.w3.org/2000/svg"
//     //                           viewBox="0 0 24 24"
//     //                           fill="currentColor"
//     //                           className="w-6 h-6"
//     //                         >
//     //                           <path
//     //                             fillRule="evenodd"
//     //                             d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//     //                             clipRule="evenodd"
//     //                           />
//     //                         </svg>
//     //                       </button>
//     //                     </td>
//     //                   </tr>
//     //                  )
//     //                 })}
//     //                 {/* More product rows */}
//     //               </tbody>
//     //             </table>
//     //           </div>
//     //         </div>
//     //       </div>
        
//     //     </div>
//     //   </div>
//     // </div>
//     <div>
// <div className="text-gray-900 bg-gray-200">
//   <div className="p-4 flex">
    
//   </div>
//   <div className="px-3 py-4 flex justify-center">
//     <table className="w-full text-md bg-white shadow-md rounded mb-4">
//       <tbody>
//         <tr className="border-b">
//           <th className="text-left p-3 px-5 text-lg font-extrabold">Image</th>
//           <th className="text-left p-3 px-5 text-lg font-extrabold">Title</th>
//           <th className="text-left p-3 px-5 text-lg font-extrabold">Category</th>
//           <th className="text-left p-3 px-5 text-lg font-extrabold">Price</th>
//           <th className="text-left p-3 px-5 text-lg font-extrabold">Quantity</th>
         

  
//           <th />
//         </tr>
//         <>
//            {getdata.map((x)=>{
//             return(
//                 <tr className="border-b hover:bg-orange-100 bg-gray-100" key={x.id}>
//           <td><img className="h-14 w-14 ml-4 border-2 border-black" src={x.image} alt="Product image" /></td>
//           <td className="p-3 px-5 text-lg font-medium w-[20rem]">{x.title}</td>
//           <td className="p-3 px-5 text-lg font-medium">{x.category}</td>
//           <td className="p-3 px-5 text-lg font-medium">{x.price}</td>
//           <td className="py-4">
//           <div className=" justify-center">
//       <div className="flex items-center  bg-gray-400 border rounded-xl w-28">
//                            <button
//                               className="rounded-md py-2 px-4  text-center text-black text-2xl font-extrabold"
//                               onClick={() => decrement(x)}
//                             >
//                               -
//                             </button>
//                             <span className="text-center w-8 text-black font-bold text-xl">{x.qty}</span>
//                             <button
//                               className="rounded-md py-1 px-4  text-black text-2xl font-extrabold"
//                               onClick={() => increment(x)}
//                             >
//                               +
//                             </button>
//                           </div>
//       </div>
//                         </td>
       


//           <td className="p-3 px-5 flex justify-end">
//           <button type="button" className="mr-4 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//   <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
//   <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
// </svg>
// </button>
// <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>Rdata(x.id)}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//   <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
// </svg>

//           </button></td>
//         </tr>
//             )
//            })}
//         </>  
//       </tbody>
//     </table>
//   </div>
//  <div className="mr-5 text-end">

// <Link to="/">
// <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 mb-3  rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce me-5">
// Continue Shopping
// </button>
// </Link>


//  </div>
// </div>

//     </div>
//   );
// };

// export default ShoppingCart;
