import Carousel from "./components/Carousel";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__flag" aria-hidden="true">
          <span className="header__flag-blue" />
          <span className="header__flag-cross" />
        </div>
        <div>
          <h1 className="header__title">Explore Sweden</h1>
          <p className="header__subtitle">8 breathtaking places to discover</p>
        </div>
      </header>
      <main className="main">
        <Carousel />
        <p className="hint">Use ← → arrow keys or buttons to navigate</p>
      </main>
    </div>
  );
}
