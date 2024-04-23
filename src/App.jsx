import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllBooks from "./components/AllBooks.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <Welcome brand="EpiBooks" />
        <AllBooks />
      </main>
      <MyFooter name="EpiBooks"> </MyFooter>
    </div>
  );
}

export default App;
