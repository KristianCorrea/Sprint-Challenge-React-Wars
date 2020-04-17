import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

const Character = styled.div`
    margin: 2%;
`

function EpisodeCharacter(props){
    const [character, setCharacter] = useState([]);
    useEffect(function(){
        axios.get(props.character)
            .then(function(response){
                setCharacter(response.data);
            })
            .catch(function(error){
                console.log("failed to fetch axios")
            })
    }, [])
    return (
        <Character>
            <h3 style={{color: "white"}}>{character.name}</h3>
            <img src={character.image} />
        </Character>
    )
}

export default EpisodeCharacter