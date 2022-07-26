import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const HomePage = () => {
    return (
        <nav>

            <ul>
                <li>

                    <NavLink to={'register'} >
                        <h2>

                            Crear usuario
                        </h2>
                    </NavLink>
                </li>
                <li>

                    <NavLink to={'login'}>
                        <h2>

                            Loguear usuario
                        </h2>
                    </NavLink>
                </li>
            </ul>


        </nav>
    )
}
