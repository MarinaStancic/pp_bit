import './HeroTeam.css';
import Hero from './Hero';
import AddHero from './AddHero';

const HeroTeam = (props) => {

    return (

        <div className='wrap-container'>
            <div className='heroTeamContainer'>
                {props.data.map(e => <Hero name={e.name} id={e.id} img={`${e.thumbnail.path}.${e.thumbnail.extension}`} />)}
            </div>
            <AddHero />
        </div>
    )
}

export default HeroTeam