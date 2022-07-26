import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux"
import { createUsuaio } from "../../store/slices/user/thunks"
import { Link } from "react-router-dom"

import './style.css'
export const Register = () => {

const dispatch=useDispatch()
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',

    })

    const { name, email, password, passwordConfirm } = formValues

    const guardar =  (e) => {
        e.preventDefault()

  
        dispatch(createUsuaio(formValues))

    }

    return (

        <div className="form">
            <h1>Registro de usuario</h1>
            <hr />
            <form onSubmit={guardar}>
                <div className="form-input">

                    <label>Username: </label>
                    <input type='text' value={name} name="name" placeholder="Nombre de usuario" onChange={handleInputChange} />
                </div>
                <div className="form-input">


                    <label>Email: </label>
                    <input type={'email'} value={email} name='email' placeholder="Email de usuario" onChange={handleInputChange} />
                </div>
                <div className="form-input">


                    <label>Password: </label>
                    <input type={'password'} value={password} name='password' placeholder="Contraseña de usuario" onChange={handleInputChange} />
                </div>
                <div className="form-input">


                    <label>Repeat Password: </label>
                    <input type={'password'} value={passwordConfirm} name='passwordConfirm' placeholder="Contraseña de usuario" onChange={handleInputChange} />
                </div>



            </form>
            <button className="form-button" onClick={guardar} type={"submit"}><h2>Registar</h2></button>

            <Link to={'/auth/login'}> <h3>Ya tengo cuenta</h3></Link>

        </div>
    )
}
