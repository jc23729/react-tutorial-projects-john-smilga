import "./App.css";
// showing nested components
function App() {
  return (
    <div className="App">
      <h1>This is a bookstore</h1>
      <BookList />
      <Image />
    </div>
  );
}

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>this is a car</article>;
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

export default App;
