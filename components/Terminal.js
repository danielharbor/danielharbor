import animate from '../lib/animate';
import React, { useEffect } from 'react';
import styles from '../styles/terminal.module.css'
import Typewriter from '../lib/typewriter';
import { useKeypress } from '../lib/hooks';
import { useRouter } from 'next/router'

export default function Terminal(props) {
  const router = useRouter();

  useEffect(() => {
    let typewriter = new Typewriter("terminal");
    typewriter.setCaret("_");
    typewriter.setCaretPeriod(500);
    typewriter.setDelay(150, 50);
    animate(typewriter);
  });

  useKeypress(['Enter', 'Escape'], () => {
    console.log('return key pressed');
    router.push('/');
  });

  return (
    <div className={styles.console}>
      <p id="terminal"></p>
    </div>
  );
}
