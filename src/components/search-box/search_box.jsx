import React from 'react';

import './search_box.style.css';

export const SearchBox = ({ onKeyDown, className, placeholder, handleChange}) => (
    <input
    onKeyDown ={onKeyDown} 
    className = {className}  
    type = 'search' 
    placeholder = { placeholder } 
    onChange = { handleChange } 
    />
);