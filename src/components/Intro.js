import React from 'react';
import '../assets/css/Intro.css';
import DownArrow from '../assets/images/arrow.svg';

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro-texts">
                <h2>Hello <span role="img" aria-label="victory hand emoji">✌️</span>,<br/>I'm <span>Ali</span></h2>
                <p className="details">A Hard-working Front-End Developer</p>
                <button className="btn-primary">About Me</button>
            </div>
            <div className="logo">logo</div>
            <img className="down-arrow" src={DownArrow} alt="go down"/>
        </div>
    )
}

export default Intro;