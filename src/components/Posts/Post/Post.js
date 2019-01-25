import React from 'react';

import classes from './Post.css';

const post = (props) => (
    <div className={classes.Post}>
        <p><strong>Name: </strong>{props.name}</p>
        <p><strong>Email: </strong>{props.email}</p>
        <p>{props.body}</p>
    </div>
);

export default post;