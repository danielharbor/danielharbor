import './App.css';

const FooterIcon = ({ src, srcOnHover, alt, iconClass }) => (
  <img
    src={src}
    alt={alt}
    title={alt}
    className={`icon ${iconClass}`}
    onMouseOver={(e) => {
      srcOnHover && (e.currentTarget.src = srcOnHover);
    }}
    onMouseOut={(e) => {
      srcOnHover && (e.currentTarget.src = src || '');
    }}
  />
);

export default FooterIcon;
