import './style.css'
import loading from '../../assets/loading-k.gif'

export const Loading = () => {
  return (
    <div className='screen_loading'>
        <div className='loading__img'>
            <img src={loading} />

        </div>
        <div className='loading__title'>
            <h2>
            Cargando
    
            </h2>
        </div>
        
        </div>
  )
}
