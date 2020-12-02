import './App.css';
import SubTitle from './SubTitle';
import FooterIcon from './FooterIcon';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <SubTitle />
        <h1 className="app-title">
          Daniel Harbor
        </h1>
      </header>
      <footer className="app-footer">
        <a href="https://linkedin.com/in/danielharbor">
          <FooterIcon
            src="github-icon.png"
            srcOnHover="github-hover.png"
            iconClass="github-icon"
            alt="Daniel Harbor on GitHub"
          />
        </a>
        <a href="https://github.com/danielharbor">
          <FooterIcon
            src="linkedin-icon.png"
            srcOnHover="linkedin-hover.png"
            iconClass="linkedin-icon"
            alt="Daniel Harbor on LinkedIn"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
