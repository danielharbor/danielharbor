import React from 'react';
import { bool, func } from 'prop-types';
import styles from '../styles/burger.module.css'

const Burger = ({ open, setOpen }) => {
  const toggleClassTopBun = open ? 'topBunOpen' : 'bunClose';
  const toggleClassBottomBun = open ? 'bottomBunOpen' : 'bunClose';

  return (
    <button className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={`${styles.bun} ${styles[toggleClassTopBun]}`}/>
      <div className={`${styles.bun} ${styles[toggleClassBottomBun]}`}/>
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
