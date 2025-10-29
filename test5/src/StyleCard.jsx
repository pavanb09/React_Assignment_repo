import Data from './assets/db.json'
import './style.css';

export default function StyleCard(){
    return(
        <div className=" cards">

            {
                Data.products.map((item,index)=>(

                    <div className='card' key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                ))
            }
            
        </div>
    )
}