import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { logout } from '../../store/slices/user/User';
import './style.css'


export const Menu = () => {
    const dispatch= useDispatch()
    const handleLogout=()=>{
dispatch(logout())
    }
    return (
        <nav className='menu'>

            <ul>
                <li>

                    <NavLink to={'home'} >
                        

                           Home
                        
                    </NavLink>
                </li>
                <li>

                    <NavLink to={'create'} >
                        

                            Crear libros
                        
                    </NavLink>
                </li>
                <li>

                    <NavLink to={'view'}>
                        

                            Mis libros
                        
                    </NavLink>
                    {/* <Link to={'/auth/login'}> */}
                        
                    {/* </Link> */}
                </li>
            </ul>
            <button className='logout' onClick={handleLogout}>Salir</button>


        </nav>
    )
  
}
