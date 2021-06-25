import "./App.css";
import "./books"
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
        const { img, title, author } = book;
        return <Book img={img}></Book>;
      })}
    </section>
  );
}
//you can destructure it like this as well inside the function parameters. const Book = ({img, title, authour}) => {
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
