import { useEffect, useState } from 'react';
import { Hero } from './Hero';

const HeroPage = (props) => {
console.log(props);
    const [character, setCharacter] = useState();

    useEffect(() => {
        return fetch(`http://gateway.marvel.com/v1/public/characters/${props.match.params.id}?apikey=8af52818657f6cf8ae209f2e74712d5c`)
            .then(res => res.json())
            .then(data => setCharacter(data.data.results[0]))
        
    }, [])
   


    return (
        <>
        <span><h2>Marvel Heros</h2></span>
        <div className='heroPage'>{character?.name}{character?.thumbnail.path}</div>
        </>
    );
}

export default HeroPage;