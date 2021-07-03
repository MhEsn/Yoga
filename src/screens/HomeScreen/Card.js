import React from 'react';

function Card(props) {
    return (
        <div className="card-box">
            {/* <div className="title-back">
                <h2>{props.title}</h2>
            </div> */}
            <img src={props.src} alt={props.type} />
        </div>
    )
}

export default Card;