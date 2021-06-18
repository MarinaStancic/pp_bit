import './Hero.css';
import {Link} from 'react-router-dom';

const Hero = (props) => {

    return (

        <div className='wrapper'>

            <div className='heroCard'>
                <p className='name'>{props.name}</p>
                <img src={props.img} alt='no-img'></img>
                <div className='btnDiv'>
                   <Link to={`/hero/${props.id}`}><button className='btn1'>Info</button></Link>
                    <button className='btn2'>Add</button>
                </div>
            </div>

        </div>

    )
}


export default Hero