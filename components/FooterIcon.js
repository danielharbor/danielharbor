import styles from '../styles/footericon.module.css'

export default function FooterIcon({ src, srcOnHover, alt, iconClass }) {
  return (
    <img
      src={src}
      alt={alt}
      title={alt}
      className={`${styles.icon} ${styles[iconClass]}`}
      onMouseOver={(e) => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e) => {
        srcOnHover && (e.currentTarget.src = src || '');
      }}
    />
  );
}
