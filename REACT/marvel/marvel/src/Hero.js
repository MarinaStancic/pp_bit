import './Hero.css';

const Hero = (props) => {

    return (

        <div className='wrapper'>

            <div className='heroCard'>
                <p className='name'>{props.name}</p>
                <img src={props.img} alt='no-img'></img>
                <div className='btnDiv'>
                    <button className='btn1'>Info</button>
                    <button className='btn2'>Add</button>
                </div>
            </div>
        </div>

    )
}


export default Hero