import React from 'react'
import Search from '../components/Search';
import CharacterCard from '../components/CharacterCard';
import '../styles/Home.css'

function HomePage({ characters }) {

    return (
        <div>
            <Search />
            <h1>Main Characters</h1>
            <div className="characters-container">
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