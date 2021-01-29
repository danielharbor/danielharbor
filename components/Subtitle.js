import React from 'react';
import styles from '../styles/subtitle.module.css'
import { useEffect, useRef, useState } from 'react';

export default function Subtitle(props) {
  const [message, setMessage] = useState("");
  const messageRef = useRef(message);
  messageRef.current = message;

  useEffect(() => {
    let mounted = true;
    const showText = (val, index) => {
      if (index < val.length && mounted === true) {
        setMessage(messageRef.current + val[index++]);
        let interval = index < val.length && val[index] !== ' ' ? 150 : 0;
        setTimeout(() => showText(val, index), interval);
      }
    };
    showText("the making of", 0);
    return () => {
      messageRef.current = "";
      mounted = false;
    };
  }, []);

  return (
    <div>
      <p className={styles.subtitle}>{message}</p>
    </div>
  );
}
