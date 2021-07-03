import React from 'react';
import Section1 from '../HomeScreen/Section1';
import Section2 from '../HomeScreen/Section2';
import Section3 from '../HomeScreen/Section3';
import Section4 from '../HomeScreen/Section4';

function Home() {
    return (
        <div className="container">
            <div className="first-section">
                <Section1 />
            </div>
            <div className="about-me-info-section">
                <Section2 />
            </div>
            <div className="cards-section">
                <Section3 />
            </div>
            <div className="contact-section">
                <Section4 />
            </div>
        </div>
    )
}

export default Home;