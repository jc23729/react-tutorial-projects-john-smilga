import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is a bookstore</h1>
      <BookList/>
      
    </div>
  );
}

function BookList() {
  return (
    <section> 
     <Book/>
      
    </section>
  )
}


const Book = () => {
  return <article>this is a car</article>
}

export default App;
