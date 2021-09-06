import React from 'react';
import './card.style.css';
export const Card = (props) =>(
    <div className = 'card-container'>
        <img alt="movies" src = {`${props.movie.Poster}`}/>
        <h2>{props.movie.Title}</h2>
        <p>A {props.movie.Year} {props.movie.Type}</p>
    </div>
);