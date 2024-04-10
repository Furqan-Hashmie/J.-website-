import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { add, remove, removetocart } from "../Redux/cartSlice";


const Shopcart2 = () => {
  const dispatch = useDispatch();
  const Rdata = (id) => {
    dispatch(removetocart(id));
  };
  const increment = (i) => {
    dispatch(add(i));
  };
  const decrement = (d) => {
    dispatch(remove(d));
  };
  const getdata = useSelector((state) => state.cartReducer.carts);
  return (
    <div>
      {!getdata.length ? (
        <div className="ml-96 my-32">
          <button className="w-auto bg-black h-20 my-3 flex items-center justify-center rounded-xl cursor-pointer text-white text-4xl py-32 px-20">Your Shopping Cart is Empty</button>
        </div>
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-gray-100 mr-5 ml-10 mt-20 mb-20 rounded-3xl">
          <div><p className="text-center font-extrabold text-5xl pt-4 pb-10">Shopping Cart</p></div>
          {
            getdata.map((x) => {
              return (
                <div className="container px-5 py-2 mx-auto" key={x.qty}>
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* <img alt="ecommerce" className="lg:w-1/2  object-cover object-center rounded border border-gray-200 " 
        src={res.image} /> */}
                    <div className="md:flex-1 px-2">
                      <div className=" rounded-lg mb-4 mt-8 ml-10">
                        <img className="w-56 h-56 object-cover rounded-xl" src={x.image} alt="Product Image" />
                      </div>

                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h1 className="text-gray-900 text-2xl title-font font-bold mb-3">{x.title}</h1>
                      <p className="w-96 text-black font-bold text-xl mb-3">
                        <b className="text-xl">Category :</b> {x.category}</p>

                      <div className="flex mt-2">
                        <span className="font-bold text-xl text-black">Product Code:</span>
                        <p className="text-black  text-xl font-bold mt-0.5 ml-10">
                          {x.productcode}
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <div className="mr-4 me-5">
                          <span className="font-bold text-black text-xl">Price:</span>
                          <span className="text-gray-900 text-xl font-bold ml-10">{x.price * x.qty} PKR</span>
                        </div>

                      </div>
                      <div className="justify-center mt-3">
                        <div className="flex items-center  bg-gray-300 border rounded-xl w-40">
                          <button
                            className="rounded-md py-2 px-4  text-center text-black text-2xl font-extrabold"
                            onClick={() => decrement(x)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-blue-500">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
                            </svg>

                          </button>
                          <span className="text-center w-8 text-black font-bold text-xl bg-white border border-black px-2">{x.qty}</span>
                          <button
                            className="rounded-md py-1 px-4  text-black text-2xl font-extrabold"
                            onClick={() => increment(x)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-red-700">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>


                    </div>
                    <div>
                      <td className="p-3 flex mt-16">
                        <button type="button" className="mr-4 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                        </button>
                        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => Rdata(x.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                          </svg>

                        </button></td>
                    </div>

                  </div>
                  <p className="border border-b border-solid border-gray-500"></p>
                </div>
              )
            })
          }
          <div className="w-60 px-2 py-4 ml-auto">
            <Link to="/">
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
        </section>
      )}

    </div>

  )
}

export default Shopcart2