import React from 'react'
import '../styles/card.css'

function characterCard(card) {
    return (
        <div className="card-container">
            <img src={card.image} />
            <div>{card.name}</div>

        </div>
    )

}


export default characterCard