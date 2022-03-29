import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
//import slyImage from '/SlyImage.png'

const description = "The Sly series of games for the Playstation 3 has some interesting, yet arbitrary goals for trophies. We're here to make it easier to keep track of what needs to be done to finally get that platinum trophy you've been working towards!"

const Header = () => {
    return (
        <div className={styles.tracker__header} id='home'>
            <div className={styles.tracker__header_content}>
                <h1 className='gradient__text'>Let's track your trophy progress for the Sly Cooper series</h1>
                <p>{description}</p>
            </div>
            <div className={styles.tracker__header_image}>
                    <img src="/SlyImage.png" alt="theGang" />
            </div>
        </div>
    );
};
export default Header