import "./App.css";
import book from "./book.jpg";
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
        <img src={book} className="Book-logo" alt="book" />
        <footer className="text-center">
          <small>Coded by: Michelle Stone</small>
        </footer>
      </div>
    </div>
  );
}
