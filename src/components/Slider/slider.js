import React from 'react';

function Slider() {
    return (
        <div className="slider-container">
            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
            <div className="slide">
                <img className="slider-img" src="images/img_mountains_wide.jpeg" alt="1" />
            </div>
        </div>
    )
}

export default Slider;