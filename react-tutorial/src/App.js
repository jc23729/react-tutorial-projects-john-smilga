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

  const title = 'I love you to the moon and back';
  return (
    <article className></article>
  );
  
};




export default App;
