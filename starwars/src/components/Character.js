// Write your Character component here
import React, {useState} from "react"
import styled from "styled-components"

const CharacterDiv = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 2%;
    margin-bottom: 2%;
    width: 60%;
`
const CharacterName = styled.h2`
    width: 100%;
`
const CharacterAttribute = styled.span`
    width: 30%;
    font-size: 18px;
`
function Character(props){
    console.log(props)
    return (
        <CharacterDiv>
            <CharacterName>{props.character.name}</CharacterName>
            <CharacterAttribute>Birth Year: {props.character.birth_year}</CharacterAttribute>
            <CharacterAttribute>Gender: {props.character.gender}</CharacterAttribute>
            <CharacterAttribute>Hair Color: {props.character.hair_color}</CharacterAttribute>
            <CharacterAttribute>Skin Color: {props.character.skin_color}</CharacterAttribute>
            <CharacterAttribute>Eye Color: {props.character.eye_color}</CharacterAttribute>
            <CharacterAttribute>Height: {props.character.height}in</CharacterAttribute>
            <CharacterAttribute>Mass: {props.character.mass}g</CharacterAttribute>
        </CharacterDiv>
    )
}

export default Character