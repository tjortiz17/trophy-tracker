import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from'./navbar.module.css';
import logo from '../../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className={styles.tracker__navbar}>
            <div className={styles.tracker__navbar_links}>
                <div className={styles.tracker__navbar_links_logo}>
                    <Image alt='logo' src={logo} layout='fixed' width={100} height={100}/> 
                </div>
                <div className={styles.tracker__navbar_links_container}>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#games'>Games</a></p>
                </div>
            </div>
            <div className={styles.tracker__navbar_sign}>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className={styles.tracker__navbar_menu}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className={styles.tracker__navbar_menu_container} >
                        <div className={styles.tracker__navbar_menu_container_links}>
                            <p><a href='#home'>Home</a></p>
                            <p><a href='#games'>Games</a></p>
                            <div className={styles.tracker__navbar_menu_container_links_sign}>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar