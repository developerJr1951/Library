import { useSelector} from 'react-redux'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { LibraryRouter } from "./LibraryRoute";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
export const RouterApp = () => {

const {isAutenticate}=useSelector(state=>state.user)



    return (
        <BrowserRouter>



            <Routes>
            <Route path="/*" element={
                           <PrivateRouter user={isAutenticate}>

                           <LibraryRouter/>
                        </PrivateRouter>
                }/>
                <Route  path="auth/*" element={
                        <PublicRouter user={isAutenticate}>
                           <AuthRouter/>
                        </PublicRouter>
                }/>
                    
                
               
                    
            </Routes>
        </BrowserRouter>
    )
}
