import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
// import AllBooks from "./components/AllBooks.jsx";
import AllBooks2 from "./components/AllBooks2.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <Welcome brand="EpiBooks" />
        {/* <AllBooks /> */}
        <AllBooks2 />
      </main>
      <MyFooter name="EpiBooks"> </MyFooter>
    </div>
  );
}

export default App;
