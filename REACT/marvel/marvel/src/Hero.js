import './Hero.css';

const Hero = (props) => {

    return (

        <div className='heroCard'>
            <span className='name'>{props.name}</span>
            <img src={props.img} alt='no-img'></img>
            <div className='btnDiv'>
                <button>Info</button>
                <button>Add</button>
            </div>
        </div>
    )
}


export default Hero