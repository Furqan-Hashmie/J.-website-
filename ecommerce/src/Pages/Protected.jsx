import { Navigate, Outlet, } from 'react-router-dom'


const Protected = ({isloged}) => {
      return(

       isloged ? <Outlet/> : <Navigate to={'/login'}/>
       
  
      )  
  
}

export default Protected