import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Sale = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); 
  };


  let a = selectedRole;
  if (a == "admin" ) {
   navigate("/addproductform")
  } else {
    toast.error('You have not access to this component.', {
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
  return (
    <div className="ml-[34rem] my-20">
      <div className="border-2  border-gray-700 rounded-md w-80 bg-gray-400">
         <div className="container mx-8 mt-4 ">
      <h1 className="text-2xl font-bold mb-4">What is your Role</h1>
      <form>
        <div className="mb-4 w-48">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="roleSelect">
            Choose a Role:
          </label>
          <select
            className="shadow appearance-none border-2 border-black rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="roleSelect"
            onChange={handleRoleChange} // Call handleRoleChange function on change
            value={selectedRole} // Set the value of the select input to selectedRole
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </form>
    </div>
    </div>
    <ToastContainer/>
    </div>

  )
}

export default Sale