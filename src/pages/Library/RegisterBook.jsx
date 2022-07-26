import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { UploadBook } from '../../store/slices/librarys/thunks'
let image;


export const RegisterBook = () => {
const {id}= useSelector(state=>state.user.usuario)

const dispatch=useDispatch()
  const [formValues,handleInputChange]=useForm({
    name:'',

  })
  const {name}=formValues

  const handleFileChange=(e)=>{
    image= e.target.files[0]

  }


const guardar=(e)=>{
  e.preventDefault()

  dispatch(UploadBook({...formValues,image,id}))

}

  return (
    <div>
      
        <form onSubmit={guardar}>
          <div>
            <label >Nombre: </label>
            <input name='name' value={name}  onChange={handleInputChange} placeholder='Nombre' type={'text'} />  
          </div>
          <div>
            <label >Portada: </label>
            <input name='portada'  onChange={handleFileChange} type={'file'} />  
          </div>
          <button type='submit'>Crear !!</button>

        </form>


    </div>
  )
}
