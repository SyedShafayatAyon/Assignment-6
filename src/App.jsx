import "./App.css";
import Banner from "./Components/Main/Banner/Banner";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <header>
        <nav>
          <Nav />
        </nav>
      </header>

      <main>
        <Banner></Banner>
      </main>
    </>
  );
}

export default App;
