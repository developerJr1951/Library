import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { baseUrl } from '../../helpers/fetch'
import { getBooks } from '../../store/slices/librarys/thunks'
import './style.css'
export const ListBooks = () => {

  const {id}= useSelector(state=>state.user.usuario)
  const {books}= useSelector(state=>state.book)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getBooks(id))
  }, [])
  

  return (
    <div className='screen_mylist'>
     <h1>Lista de libros</h1>
    <div className='cards'>

      {
        books.map(({id,name,portada})=>{
          return( 
            <div className='card' key={id}>

                <img src={`${baseUrl}/api/files/libros/${id}/${portada}`} />
                <h2 className='card-title'>             {name}             </h2>
                <h2 className='card-title'>             buttons           </h2>
            </div>
          )
        })
      }
      </div>

    </div>
  )
}
