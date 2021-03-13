import Link from 'next/link'
import styles from '../styles/home.module.css'
import FooterIcon from '../components/FooterIcon'
import Subtitle from '../components/Subtitle'

export default function Home() {
  return (
    <div className={styles.home}>
      <Link href="/about">
        <a>about</a>
      </Link>
      <header className={styles.header}>
        <Subtitle />
        <h1 className={styles.title}>
          Daniel Harbor
        </h1>
      </header>
      <footer className={styles.footer}>
        <a href="https://linkedin.com/in/danielharbor">
          <FooterIcon
            src="/github-icon.png"
            srcOnHover="/github-hover.png"
            iconClass="github-icon"
            alt="Daniel Harbor on GitHub"
          />
        </a>
        <a href="https://github.com/danielharbor">
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
