import { bool } from 'prop-types';
import Link from 'next/link'
import React from 'react';
import styles from '../styles/menu.module.css'

const Menu = ({ open }) => {
  const toggleClass = open ? 'open' : 'close';

  return (
    <div className={`${styles.menu} ${styles[toggleClass]}`}>
      <Link href="/about">
        <a className={styles.link}>
          about
        </a>
      </Link>
      <Link href="/contact">
        <a className={styles.link}>
          contact
        </a>
      </Link>
    </div>
  )
};

Menu.propTypes = {
  open: bool.isRequired,
};

Menu.defaultProps = {
  open: false,
};

export default Menu;
