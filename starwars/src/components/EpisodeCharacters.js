import React from "react"
import styled from "styled-components"
import EpisodeCharacter from "./EpisodeCharacter"

const CharactersContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    background-color: #000033;
    justify-content: 
`
function EpisodeCharacters(props){
    console.log(props)
    return (
        <CharactersContainer>
            {
                props.characters.map(function (selectedCharacter){
                    return <EpisodeCharacter character={selectedCharacter} />
                })
            }
        </CharactersContainer>
    )
}

export default EpisodeCharacters