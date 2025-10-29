import imgage from './assets/elephant.jpg';
import './Display.css';



export default function Display(){

    return(

        <section className="cards">
            <div className='card'>
            <img src={imgage} alt="" ></img>
            <h3>Elephant</h3>
            </div>
        </section>
    )
}