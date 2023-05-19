import React from 'react';
import './index.css';

export default function AddItem() {
    let [active, setActive] = React.useState(false);

    let showWindow = () => {
        active = true;
        setActive(active);
    }

    let closeWindow = () => {
        active = false;
        setActive(active);
    }

    return(
        <div className="menu-wrapper"  style={active ? {} : {display: 'none'}} >
            <div className="menu">
                <input type="text" placeholder='Task' maxLength={25} />
                <input type="text" placeholder='Description' maxLength={50} />
                <button className='add'>Add</button>
                <img onClick={closeWindow} className='cancel' src='https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/Cancel-256.png' alt='Cancel'></img>
            </div>
        </div>
    );
}