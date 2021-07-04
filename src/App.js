import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Application</header>
        <main>
          <Dictionary />
        </main>
        <br />

        <footer className="text-center">
          <small>Coded by: Michelle Stone</small>
        </footer>
      </div>
    </div>
  );
}
