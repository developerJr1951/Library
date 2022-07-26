import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Usuario/HomePage";
import { Login } from "../pages/Usuario/Login";
import { Register } from "../pages/Usuario/Register";
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import { startChecking } from "../store/slices/user/thunks";
import { Loading } from "../components/ux/Loading";
export const AuthRouter = () => {
  
  const {isLoading}=useSelector(state=>state.user)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(startChecking())
  
  }, [])
  
  
  return (
  <>
{
   isLoading ? 
   (<Loading/>)
   :(
   <div className="main">

    {/* <HomePage /> */}
    <Routes>
         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />
      </Routes>
   </div>
   )
}

   
  </>
  )
}
