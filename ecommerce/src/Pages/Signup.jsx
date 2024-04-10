import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {
    const [err , setErr] = useState()


    const adduser = ()=>      toast.success('👍 User registered successfully', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });

  
  
  const [sign , setSign] = useState({
    name: "",
    email:"",
    password: "",
    mobile: "",
    address: "",
  })

 const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user", sign);
      setSign({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: ""
      });
      
      adduser();
       
    } catch (error) {
       console.log(error);
       setErr(error.response.data.message);
      toast.error('User registration failed. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  };



  return (
    <div>
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
 <div className="ml-20">
 <h4 className="block font-sans text-2xl text-center antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
    Sign Up
  </h4>
  <p className="block mt-1 font-sans text-base antialiased text-center font-bold leading-relaxed text-gray-700">
    Nice to meet you! Enter your details to register.
  </p>
  {!err ?(""):(
    <div className="items-center text-center mt-4">
       <button className="bg-red-500 text-white text-xl font-bold border border-red-900 border-b-4  overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group ">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500  shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {err}
</button>
       </div>
  )}
 
 </div>
    <form action="https://formbold.com/s/FORM_ID" method="POST" className="mt-5 w-[42rem]" onSubmit={onSubmit}>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="Name" className="mb-3 block text-md font-bold text-[#07074D]">
               Name
            </label>
            <input type="text" name="Name" id="Name" placeholder="Your Name" className="w-80 rounded-md border border-black border-1 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"  onChange={(e)=>{setSign({...sign, name:e.target.value})}} />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="mobile" className="mb-3 block text-md font-bold text-[#07074D]">
              Mobile No
            </label>
            <input type="text" name="Name" id="Name" placeholder="Your mobile no" className="w-80 rounded-md border border-black border-1 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"  onChange={(e)=>{setSign({...sign, mobile:e.target.value})}} />
          </div>
        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-bold text-[#07074D]">
              Email Address
            </label>
            <input type="text" name="Name" id="Name" placeholder="Your Email address" className="w-80 rounded-md border border-black border-1 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"  onChange={(e)=>{setSign({...sign, email:e.target.value})}} />
   
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label htmlFor="password" className="mb-3 block text-base font-bold text-[#07074D]">
             Password
            </label>
            <input type="password" name="password" id="passwor" placeholder="*******" className="w-80  rounded-md border border-black border-1 bg-white py-3 px-6 text-md font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"  onChange={(e)=>{setSign({...sign, password:e.target.value})}} />
 
          </div>
        </div>
      </div>
      <div className="mb-1">
        <label htmlFor="address" className="mb-3 block text-lg font-bold text-[#07074D]">
          Address
        </label>
            <input type="text" name="Name" id="Name" placeholder="Your address" className="w-full rounded-md border border-black border-1 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"  onChange={(e)=>{setSign({...sign, address:e.target.value})}} />
      </div>
      <div>
      <button className="mt-6 block w-[30rem] m-auto select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
      sign up
    </button>
      </div>
      <p className="block mt-4 font-sans text-base antialiased font-bold leading-relaxed text-center text-gray-700">
      Already have an account?
      <Link to="/login" className="ml-2 font-extrabold border-b-2 border-b-black text-gray-900">
        Sign In
      </Link>
    </p>
    </form>
  </div>
</div>
<ToastContainer/>
    </div>
  )
}

export default Signup