import React from 'react'
import Search from '../components/Search';

function HomePage({ characters }) {

    return (
        <div>
            <Search />
            <h1>Main Characters</h1>
            <div className="characters-container">
                {
                    characters.map((item) => {
                        return <p>{item.name}</p>
                    })
                }

            </div>
        </div>
    )



}

export default HomePage