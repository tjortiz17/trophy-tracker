import Link from 'next/link';
import React from 'react';
import styles from './games.module.css';

const Games = () => {
    return (
        <div className={styles.tracker__games}>
            <div className={styles.tracker__games_links}>
                <img src='/sly1.png' alt='Sly4' />
            </div>
            <div className={styles.tracker__games_links}>
                <img src='/sly2.png' alt='Sly4' />
            </div>
            <div className={styles.tracker__games_links}>
                <img src='/sly3.png' alt='Sly4' />
               </div>
            <div className={styles.tracker__games_links}>
                <Link href='/games/sly4'>
                    <img src='/sly4.png' alt='Sly4' />
                </Link>
            </div>
        </div>
    );
};
export default Games