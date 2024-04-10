import { useAuth } from "../Context/TokenAuth";


const Localstoragedata = () => {
    const [auth, setAuth]=useAuth();
    console.log(setAuth)
  return (
    <div>
    <h1 className=" font-bold text-xl">Localstoragedata</h1>
    <h1 className="text-xl font-bold  bg-gray-600 p-3  text-black">{JSON.stringify(auth,null)}</h1>
    </div>
    
  )
}

export default Localstoragedata