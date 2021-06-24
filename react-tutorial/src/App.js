import "./App.css";
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
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "I love you to the moon and back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />

      <h1>{title}</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  );
};

export default App;
