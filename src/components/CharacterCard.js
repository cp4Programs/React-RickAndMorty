import React from 'react'
import '../styles/card.css'

function characterCard({ card }) {
    return (
        <div className="card-container">
            <img src={card.image} className="character-card" />
            <div>{card.name}</div>
            <button className="character-card">See Details</button>

        </div>
    )

}


export default characterCard