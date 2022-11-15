import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/card.css'
import { ThemeContext } from '../contexts/ThemeContext';



function CharacterDetails() {
    const { characterId } = useParams()
    const [character, setCharacter] = useState('')
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                console.log(res.data)
                setCharacter(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className={darkMode ? "details-container details-dark" : "details-container"}>
            <img src={character?.image} />
            <div className="container-info">
                <p>Name: {character?.name}</p>
                <p>Gender: {character?.gender}</p>
                <p>Location: {character?.location?.name}</p>
                <p>Species: {character?.species}</p>
                <p>Status: {character?.status}</p>
            </div>



        </div>
    )
}

export default CharacterDetails