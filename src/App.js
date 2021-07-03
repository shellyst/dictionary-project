import "./App.css";
import book from "./book.jpg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary Application</header>

      <br />
      <img src={book} className="Book-logo" alt="book" />
    </div>
  );
}
