import React from 'react';

import classes from './Toolbar.css';
import logo from '../../../assets/images/logo.png';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className={classes.Input}>
            <input 
                type="text" 
                name="search" 
                placeholder="Seach Post here" 
                onChange={props.changed} />
        </div>
        <div>by <i className="fab fa-monero">Rogene</i> <i className="fas fa-sliders-h"></i></div>
    </div>
);

export default toolbar;