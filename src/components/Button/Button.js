import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.action}>{props.title}</button>
    )
 }

export default Button;