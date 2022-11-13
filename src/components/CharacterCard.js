import React from 'react'
import '../styles/card.css'

function characterCard({ card }) {
    return (
        <div className="card-container">
            <img src={card.image} className="character-card" />
            <div>{card.name}</div>
            <a href={`/details/${card.id}`}><button>See Details</button></a>

        </div>
    )

}


export default characterCard