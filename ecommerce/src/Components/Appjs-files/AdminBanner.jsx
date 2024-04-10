import { Link } from "react-router-dom"


const AdminBanner = () => {
  return (
  <div className="flex bg-black w-[98%] p-4 m-2 rounded-xl">
         <p className=" text-lg text-white  font-medium">
           Admin's Choice: Discover What's Hot in Fashion Today
       </p>
   <Link to="/sale" className="ml-auto">
   <button className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-white  overflow-hidden h-10 w-28 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900  delay-150 group-hover:delay-75" />
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-800 delay-150 group-hover:delay-100" />
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150" />
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-200" />
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300" />
  <p className="z-10">Add product</p>
</button>
   </Link>




  </div>
  )
}

export default AdminBanner