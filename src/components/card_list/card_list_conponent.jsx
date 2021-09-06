import React from 'react';
import {Card } from '../card/card';
import './card_list_conponent.css';
export const CardList = props =>(
    <div className = 'card-list'>{
        props.movies.map((movie, id) =>(
        <Card key={id} movie = { movie }/>)
        )}</div>
);