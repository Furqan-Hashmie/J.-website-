import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const deluser = () =>      toast.success('Product deleted successfully.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  });




    
    const [cartdata , setCartdata ] = useState([])

    const getdata = async()=>{
  try {
    await axios.get('http://localhost:5000/api/item').then((res)=>{
      setCartdata(res.data.message)
    })
  } catch (error) {
    console.log(error)
  }
    }
    useEffect(()=>{
      getdata()
    },[])


    const deleteuser=async(id)=>{
      try {
        const data = await fetch(`http://localhost:5000/api/item/${id}`,{
          method : 'DELETE',
        });
       await data.json();
        console.log(data)
        if(data){
        getdata()
        deluser();
        }
      } catch (error) {
        console.log(error)
        toast.error('Product could not be deleted', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }
     
 }
  return (
    <div>
<div className="text-gray-900 bg-gray-200">
  <div className="p-4 flex">
    <h1 className="text-3xl font-bold">
      DataBase Products
    </h1>
  </div>
  <div className="px-3 py-4 flex justify-center">
    <table className="w-full text-md bg-white shadow-md rounded mb-4">
      <tbody>
        <tr className="border-b">
          <th className="text-left p-3 px-5 text-lg font-extrabold">Image</th>
          <th className="text-left p-3 px-5 text-lg font-extrabold">Title</th>
          <th className="text-left p-3 px-5 text-lg font-extrabold">Price</th>
          <th className="text-left p-3 px-5 text-lg font-extrabold">Description</th>
          <th className="text-left p-3 px-5 text-lg font-extrabold">Category</th>
          <th />
        </tr>
        <>
           {cartdata.map((x)=>{
            return(
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
          <td><img className="h-14 w-14 ml-4 border-2 border-black" src={x.image} alt="Product image" /></td>
          <td className="p-3 px-5 text-lg font-medium">{x.title}</td>
          <td className="p-3 px-5 text-lg font-medium">{x.price} PKR</td>
          <td className="p-3 px-5 text-lg font-medium">{x.description.slice(0,38)}...</td>
          <td className="p-3 px-5 text-lg font-medium">{x.category}</td>


          <td className="p-3 px-5 flex justify-end">
          <button type="button" className="mr-4 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
</svg>
</button>
<button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>deleteuser(x._id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>

          </button></td>
        </tr>
            )
           })}
        </>  
      </tbody>
    </table>
  </div>
 <div className="mr-5 text-end">

<Link to="/addproductform">
<button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 mb-3  rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce me-5">
  Add product
</button>
</Link>
<Link to="/apimenfilter">
<button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 mb-3  rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
  View Card
</button>
</Link>

 </div>
</div>
 <ToastContainer/>
    </div>
  )
}

export default Checkout