import "./App.css";
// showing nested components
function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
];
const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});

console.log(newName);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}
//you can destructure it like this as well inside the function parameters. const Book = ({img, title, authour}) => {
const Book = () => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
