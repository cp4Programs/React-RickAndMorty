import React, { useContext } from 'react'
import Search from '../components/Search';
import CharacterCard from '../components/CharacterCard';
import '../styles/Home.css'
import { ThemeContext } from '../contexts/ThemeContext'


function HomePage({ characters, setCharacters }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <div className={darkMode ? "home-container home-dark" : "home-container"}>
            <Search setCharacters={setCharacters} />
            <h1 className={darkMode ? "characters-container characters-dark" : "characters-container"}>Main Characters</h1>
            <div className={darkMode ? "characters-container characters-dark" : "characters-container"}>
                {
                    characters.map((item) => {
                        return <CharacterCard key={item.id} card={item} />
                    })
                }

            </div>
        </div>
    )



}

export default HomePage