import landscape from '../assets/img/landscape.png'
import '../style/Banner.css'
function Banner() { 
    return (
        
         <div>
            <img src={landscape} alt='Paysage mer et montagne' className='banner' />
        </div>
        
    )
}

export default Banner