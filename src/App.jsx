import "./App.css";
import Banner from "./Components/Main/Banner/Banner";
import Stats from "./Components/Main/Stats/Stats";
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
        <Stats></Stats>
      </main>
    </>
  );
}

export default App;
