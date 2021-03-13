import React from 'react';
import styles from '../styles/burger.module.css'

const Burger = () => {
  return (
    <button className={styles.burger}>
      <div className={styles.bun}/>
      <div className={styles.bun}/>
    </button>
  )
}

export default Burger;
