import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

function characterCard({ card }) {
    return (
        <div className="card-container">
            <img src={card.image} className="character-card" />
            <div>{card.name}</div>
            <Link to={`/details/${card.id}`}><button>See Details</button></Link>

        </div>
    )

}


export default characterCard