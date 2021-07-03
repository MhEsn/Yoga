import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Section4() {
    return (
        <div className="contact-section-container">
            <div className="left-section">
                <img src="images/chakrapol.jpeg" alt="stone" />
            </div>
            <div className="right-section">
                <span>راه های ارتباطی</span>
                <p>راه های ارتباطی برای شرکت در کلاس ها و برقراری ارتباط</p>
                <p style={{ fontFamily: 'sans-serif' }}>fatemeyoga.m@gmail.com</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <a style={{ color: 'black', margin: '10px' }} target="_blank" href="https://www.instagram.com/fateme_yoga/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a style={{ color: 'black', margin: '10px' }} target="_blank" href="https://www.instagram.com/fateme_yoga/">
                        <FontAwesomeIcon icon={faTelegram} size="2x" />
                    </a>
                    <a style={{ color: 'black', margin: '10px' }} target="_blank" href="https://www.instagram.com/fateme_yoga/">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a style={{ color: 'black', margin: '10px' }} target="_blank" href="https://www.instagram.com/fateme_yoga/">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
                {/* <a href="https://www.instagram.com/fateme_yoga/" target="_blank">Instagram</a> */}
            </div>
        </div>
    )
}

export default Section4;