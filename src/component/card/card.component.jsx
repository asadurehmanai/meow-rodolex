import React from "react";
import './card.style.css';

export const Card = props => {
    return(
        <div className="card">
            <img className="monster-card-image" alt='monster' src={`https://robohash.org/${props.monster.id}?set=set4&size=250x250`}/>
            <div>
                <h2>{ props.monster.name }</h2>
                <p>{ props.monster.email }</p>
            </div>
        </div>
    )
}