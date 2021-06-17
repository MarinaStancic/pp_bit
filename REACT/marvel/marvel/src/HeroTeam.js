import './HeroTeam.css';
import Hero from './Hero';


const HeroTeam = (props) => {


    return (

        <div className='heroTeamContainer'>
            {props.data.map(e => <Hero name={e.name} img={`${e.thumbnail.path}.${e.thumbnail.extension}`} />)}
        </div>
    )
}

export default HeroTeam