// Write your Character component here
import React, {useState} from "react"
import styled from "styled-components"
import EpisodeCharacters from "./EpisodeCharacters.js"

const EpisodeDiv = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 2%;
    margin-bottom: 2%;
    width: 75%;
    border-radius: 10px;
`
const EpisodeName = styled.h2`
    width: 100%;
    margin-bottom: 0%;
    color: white;
`
const EpisodeAttribute = styled.span`
    width: 100%;
    font-size: 18px;
    color: white;
`
function Episode(props){
    return (
        <EpisodeDiv>
            <EpisodeName>{props.episode.name}</EpisodeName>
            <span style={{width: "100%", color: "white"}}>{props.episode.episode}</span>
            <EpisodeAttribute>Air Date: {props.episode.air_date}</EpisodeAttribute>
            <h2 style={{color: "white"}}>Characters in Episode:</h2>
            <EpisodeCharacters characters={props.episode.characters} />
        </EpisodeDiv>
    )
}

export default Episode