import axios from "axios";
import "./App.css";
import Banner from "./Components/Main/Banner/Banner";
import Products from "./Components/Main/Products/Products";
import Stats from "./Components/Main/Stats/Stats";
import Nav from "./Components/Nav/Nav";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Step from "./Components/Main/Step/Step";

const productPromise = axios.get("ProductDetails.json");

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [handelTotalPrice, setHandelTotalPrice] = useState(0);
  return (
    <>
      <header>
        <nav>
          <Nav
            cartProducts={cartProducts}
            handelTotalPrice={handelTotalPrice}
          />
        </nav>
      </header>

      <main>
        <Banner></Banner>
        <Stats></Stats>
        <Products
          productPromise={productPromise}
          cartProducts={cartProducts}
          handelTotalPrice={handelTotalPrice}
          setHandelTotalPrice={setHandelTotalPrice}
          setCartProducts={setCartProducts}
        ></Products>

        <Step></Step>
      </main>

      <footer></footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
