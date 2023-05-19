import React from 'react';
import './index.css';

export default function item(props: any) {
    let [comlete, setCompleted] = React.useState(false);

    function checkItem() {
        comlete = true;
        setCompleted(comlete);
    }
    
    return(
        <div className="item" style={comlete ? {background: 'lightgreen'} : {}}>
            <h2  className='title'>{props.title}</h2>
            <p className='desc'>{props.desc}</p>
            <img src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/Cancel-256.png"
                className='delete'
                alt="Delete" 
                title='delete' />
            <img src="https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/tick-256.png"
                className='check'
                alt="Check" 
                title='check'
                onClick={checkItem} />
        </div>
    );
}