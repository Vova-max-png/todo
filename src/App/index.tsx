import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Item from '../Item';
import AddItem from '../AddItem';
import './index.css';

const itemsData = [
    {
        'title': 'Do the homework',
        'description': 'Do English and French',
    },
    {
        'title': 'Do the home task',
        'description': 'Do the washing up'
    },
    {
        'title': 'Play with Oman',
        'description': 'Go to the Hoi4 as Soviet Union'
    },
    {
        'title': 'Play with Nez',
        'description': 'Play Squad with Nez'
    },
    {
        'title': 'Bye a new game',
        'description': 'Bye a new game costs 600rubs'
    }
]

export default function App() {
    return(
        <div className='wrapper'>
            <Header />
            {itemsData.map((item: any, index: number) => <Item key={index} title={item.title} desc={item.description}/>)}
            <AddItem />
        </div>
    );
}