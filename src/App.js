import './App.css';
import SubTitle from './SubTitle';

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
          <img className="icon github-icon" alt="" src="github-icon.png" title="Daniel Harbor on GitHub"/>
        </a>
        <a href="https://github.com/danielharbor">
          <img className="icon linkedin-icon" alt="" src="linkedin-icon.png" title="Daniel Harbor on LinkedIn"/>
        </a>
      </footer>
    </div>
  );
}

export default App;
