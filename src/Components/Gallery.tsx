import GalleryItem from "./GalleryItem";
import './App.css';
import {useEffect, useState} from "react";


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
    const [errorMessage, setErrorMessage] = useState('')
    const items = charName.filter(c => c.name.toLowerCase().includes(character.toLowerCase())).map(element => <div data-testid='gallery-item'> <GalleryItem name={element.name}
                                                                   Species={element.species}
                                                                   img={element.image}
                                                                   origin={element.origin.name}
                                                                   status={element.status}/></div>)


    useEffect(() => {
        fetch (`https://rickandmortyapi.com/api/character/`)
   /*         .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error('Hilfe! Hilfe! Du hast einen falschen Link übergeben.');
            })
            .then((responseBody : ResponseBody)=> responseBody.results)
            .then((data: Array<Character>) => setCharName(data))
            .catch(e => setErrorMessage(e.message));
*/
            .then(response => {
                if (response.ok) {
                    return response.json();
                } throw new Error("nö");
            })
            .then((responseBody:ResponseBody) => responseBody.results)
            .then((data:Array<Character>) => setCharName((data)))
            .catch(() => setErrorMessage('Fehler: Die Seite überträgt einen falschen Hyperlink!'))
        }, []);
/*
    const getCharacterList = () => {
        <div>'läuft'</div>
  /*      fetch(`https://rickandmortyapi.com/api/character`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                setInfo(data.info)
                setFilter('')
            })
            .catch(()=>console.log(`läuft so nicht!`))
    }
*/
    return (
        <div className={'gallery'}>
            <input data-testid={'search-field'} type={"text"} value={character} placeholder='search for a character' onChange={c => setCharacter(c.target.value)}/>
            {items}
            <p>{errorMessage}</p>

        </div>

    )
}

export default Gallery;