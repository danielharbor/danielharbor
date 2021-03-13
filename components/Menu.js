import Link from 'next/link'
import React from 'react';
import styles from '../styles/menu.module.css'
import { StyledMenu } from './Menu.styled';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/about">
        <a>
          <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          About
        </a>
      </Link>
      <Link href="/contact">
        <a href="/">
          <span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact
        </a>
      </Link>
    </div>
  )
}

export default Menu;
