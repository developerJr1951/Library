import {  Route,Navigate } from "react-router-dom";


export const PrivateRouter = ({children,user}) => {
  return (
  user
  ?  children
  :  <Navigate to={'/auth/login'} />
  )
  }
  