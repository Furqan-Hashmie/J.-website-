import { createContext, useContext, useEffect, useState } from "react";

const Authcontext = createContext();

const Authprovider =({children})=>{
    const [auth , setAuth]= useState({
        user:null,
        token:''
    })
    useEffect(()=>{
      let data =   localStorage.getItem('auth') 
      if(data){
          let parseData= JSON.parse(data)
           setAuth({user : parseData.user ,token : parseData.token})
      }
    },[])
    return(
        <Authcontext.Provider value={[auth,setAuth]}>
{children}
        </Authcontext.Provider>
    )
}
const useAuth = ()=>useContext(Authcontext);


export {useAuth , Authprovider}