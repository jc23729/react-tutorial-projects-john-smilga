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


const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book"><img src={img} alt='' /></article>
    
  )
}
 
const Book = () => {
  const title = "I love you to the moon and back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />

   
    </article>
  );
};

export default App;
