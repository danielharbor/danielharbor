import Burger from '../components/Burger'
import FooterIcon from '../components/FooterIcon'
import Link from 'next/link'
import Menu from '../components/Menu'
import React, { useState, useRef } from 'react';
import styles from '../styles/home.module.css'
import Subtitle from '../components/Subtitle'
import { useOnClickOutside } from '../lib/hooks'

export default function Home() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.home}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <header className={styles.header}>
        <Subtitle />
        <h1 className={styles.title}>
          Daniel Harbor
        </h1>
      </header>
      <footer className={styles.footer}>
        <a href="https://github.com/danielharbor">
          <FooterIcon
            src="/github-icon.png"
            srcOnHover="/github-hover.png"
            iconClass="github-icon"
            alt="Daniel Harbor on GitHub"
          />
        </a>
        <a href="https://linkedin.com/in/danielharbor">
          <FooterIcon
            src="/linkedin-icon.png"
            srcOnHover="/linkedin-hover.png"
            iconClass="linkedin-icon"
            alt="Daniel Harbor on LinkedIn"
          />
        </a>
      </footer>
    </div>
  );
}
