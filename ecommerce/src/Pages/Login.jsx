import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/TokenAuth";


const Login = ({setIsloged}) => {
  const navigate = useNavigate();
const [auth, setAuth]= useAuth();
const [email, setEmail]= useState('');
const [password, setPassword]=useState('');
const [error , setError] = useState('');


console.log(auth)
  const onSubmit = async(e) => {
    e.preventDefault();
 
    try {
      const res =  await axios.post("http://localhost:5000/api/login",{email,password} )
      setAuth({
        user:res.data.user,
        token:res.data.token
      })
      localStorage.setItem( "auth", JSON.stringify(res.data));
      navigate('/')
    } catch (error) {
      console.log(error)
       setError(error.response.data.message)
    }
      // setDispalyname(user.name)
  };

  return (
 <div className="mt-8">
   <h4 className="block font-sans text-2xl text-center antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
    Sign In
  </h4>
  <p className="block mt-1 font-sans text-base antialiased text-center font-bold leading-relaxed text-gray-700">
    Nice to meet you! Enter your details to Login.
  </p>
  {!error ?(""):(
    <div className="items-center text-center mt-4">
       <button className="bg-red-500 text-white border border-red-900 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group ">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {error}
</button>
       </div>
  )}
      
     <div className="mt-4">   
<form className="max-w-sm mx-auto" onSubmit={onSubmit}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    onChange={(e)=>{
        setEmail(e.target.value)
      }}  placeholder="name@gamil.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Your password</label>
    <input type="password" placeholder="*********"  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={(e)=>{
      setPassword(e.target.value)
      }}  required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto lg:w-96 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setIsloged(true)}>Sign In</button>
  <p className="block mt-4 font-sans text-base antialiased font-bold leading-relaxed text-center text-gray-700">
      Dont have an account?
      <Link to="/signup" className="ml-2 font-extrabold border-b-2 hover:border-b-black text-gray-900">
        Sign Up
      </Link>
    </p>
</form>


    </div>
 </div>
  )
}

export default Login