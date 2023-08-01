import { BsBarChartLineFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import React from 'react';
import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <div className={styles.nav_header}>
            <ul className={styles.ul_nav}>
                <li className={styles.li_nav}><BsBarChartLineFill /></li>
                <li className={styles.li_nav}><BiSolidMessageDetail /></li>
            </ul>
        </div>
    );
};

export default Header;
