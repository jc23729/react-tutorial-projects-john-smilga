import "./App.css";
import {books} from './books'

// showing nested components
function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
       
        return <Book key={books.id}{books...}></Book>;
      })}
    </section>
  );
}
//you can destructure it like this as well inside the function parameters. const Book = ({img, title, authour}) => {
const Book = (img, title, author) => {
  //attribute, and eventHandler
  //onClick, onMouseOver

  const clickHandler = (event) => {
    alert('This is going to pay off')
  }
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}></button>
    </article>
  );
};

export default App;
