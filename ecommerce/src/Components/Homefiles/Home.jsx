// import { Route } from "react-router-dom";

import Category from "./Category"
import Filters from "./Filters"
import Images from "./Images"
import Slider from "./Slider"



const Home = () => {
    //  const [auth , setAuth] = useAuth();
  return (
    <div>
    <Slider/>
    <Category/>
    <Images/>
    <Filters/>


  
    </div>
  )
}

export default Home