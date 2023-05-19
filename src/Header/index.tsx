import React from 'react';
import AddItem from '../AddItem';
import './index.css';

export default function Header() {
    return(
        <header>
            <h1>ToDo</h1>
            <p onClick={AddItem}>Add</p>
        </header>
    );
}