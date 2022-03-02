import GalleryItem from "./GalleryItem";
import './App.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
    origin: {name : string};
    species: string;
}

export interface ResponseBody {
    results: Array<Character>;
}

function Gallery() {

    const [character, setCharacter] = useState('');
    const [charName, setCharName] = useState([] as Array<Character>);
    const [errorMessage, setErrorMessage] = useState('');

    const items = charName.filter(c => c.name.toLowerCase()
        .includes(character.toLowerCase()))
        .map(element =>
            <div data-testid='gallery-item' key={element.id}>
                <GalleryItem   name={element.name}
                               id={element.id}
                               Species={element.species}
                               img={element.image}
                               origin={element.origin.name}
                               status={element.status}/>
            </div>)


    useEffect(() => {
        fetch (`https://rickandmortyapi.com/api/character/`)
         .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error('Die Adresse ist leider falsch.');
            })
            .then((responseBody : ResponseBody)=> responseBody.results)
            .then((data: Array<Character>) => setCharName(data))
            .catch(e => setErrorMessage(e.message));
        },[]);

    return (

        <div className={'gallery'}>

            <input data-testid={'search-field'} type={"text"} value={character} placeholder='Morty Smith' onChange={c => setCharacter(c.target.value)}/>
            <div>{charName.length > 0 ? items : 'loading ...'}</div>
            <p>{errorMessage}</p>
        </div>


    )
}

export default Gallery;