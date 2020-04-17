import React, {useState, useEffect} from "react"
import axios from "axios"
import Episode from "./Episode"
import styled from "styled-components"

const EpisodesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function Episodes(){
    const [episodes, setEpisodes] = useState([]);

    useEffect(function(){
        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(function(response){
                setEpisodes(response.data.results);
            })
            .catch(function(error){
                console.log("failed to fetch axios")
            })
    }, [])
    return (
        <EpisodesContainer>
            {
                episodes.map(function(singleEpisode){
                    return <Episode episode={singleEpisode} />
                })
            }
        </EpisodesContainer>
        
    )
}

export default Episodes
