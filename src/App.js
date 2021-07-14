import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Search</header>
        <main>
          <Dictionary defaultKeyword="night" />
        </main>
        <br />

        <footer className="text-center">
          <small>
            This project is coded by Michelle Stone and is open-sourced on{" "}
            <a
              href="https://github.com/shellyst/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Git-Hub
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://modest-bassi-8e7353.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
