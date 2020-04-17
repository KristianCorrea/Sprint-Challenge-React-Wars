import React, {useState, useEffect} from "react"
import axios from "axios"
import Character from "./Character"
import styled from "styled-components"

const CharactersContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function Characters(){
    const [characters, setCharacters] = useState([]);

    useEffect(function(){
        axios.get(`https://swapi.py4e.com/api/people`)
            .then(function(response){
                setCharacters(response.data.results);
                console.log(response.data.results)
            })
            .catch(function(error){
                console.log("failed to fetch axios")
            })
    }, [])
    console.log(characters)
    return (
        <CharactersContainer>
            {
                characters.map(function(singleCharacter){
                    return <Character character={singleCharacter} />
                })
            }
        </CharactersContainer>
        
    )
}

export default Characters
