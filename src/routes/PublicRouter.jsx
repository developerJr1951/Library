import {  Route,Navigate } from "react-router-dom";



export const PublicRouter = ({children,user}) => {
  return (
  user
  ?<Navigate to={'/home'} />
  :children
  )
}
