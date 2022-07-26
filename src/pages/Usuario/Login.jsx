import { useForm } from "../../hooks/useForm"
import { useDispatch ,useSelector} from 'react-redux'
import { getUsuario } from "../../store/slices/user/thunks"
import { Link } from "react-router-dom"
import './style.css'

export const Login = () => {
    const {isLoading}=useSelector(state=>state.user)
    const dispatch=useDispatch()


    const [formValues, handleInputChange] = useForm({
        nameL: '',
        emailL: '',
        passwordL: '',

    })

    const { nameL, emailL, passwordL } = formValues

    const guardar = async (e) => {
        e.preventDefault()

        const data = { ...formValues }

        dispatch(getUsuario(emailL,passwordL))



    }
    return (

        <div>
            {



           

            

           ( 
           <div className="form">


            <h1>Login de usuario !</h1>
            <hr />
            
            <form onSubmit={guardar}>
          
                <div  className="form-input">

                    <label>Email: </label>
                    <input type={'email'} value={emailL} name='emailL' placeholder="Email de usuario" onChange={handleInputChange} />
                </div>
                <div className="form-input"> 

                    <label>Password: </label>
                    <input type={'password'} value={passwordL} name='passwordL' placeholder="Contraseña de usuario" onChange={handleInputChange} />
                </div>


            </form>
            <button className="form-button"  onClick={guardar}  type={"submit"}><h2>Ingresar</h2></button>

            <Link to={'/auth/register'}><h3>No tengo cuenta</h3></Link>



            </div>)

            }
        </div>
    )
}
