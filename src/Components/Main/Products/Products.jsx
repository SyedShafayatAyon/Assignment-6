import { use, useState } from "react";
import AllProduct from "./AllProducts/AllProduct";
import SelectedProduct from "./SelectedProducts/SelectedProduct";

const Products = ({
  productPromise,
  cartProducts,
  setCartProducts,
  handelTotalPrice,
  setHandelTotalPrice,
}) => {
  const productsData = use(productPromise).data;

  const [selectedTypeForProOrCar, setSelectedTypeForProOrCar] =
    useState("product");
  return (
    <div className="container mx-auto mt-32">
      <div className="text-center space-y-4">
        <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382] ">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div>
          <button
            className={`btn rounded-full ${selectedTypeForProOrCar === "product" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
            onClick={() => setSelectedTypeForProOrCar("product")}
          >
            Products
          </button>
          <button
            className={`btn rounded-full ${selectedTypeForProOrCar === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
            onClick={() => setSelectedTypeForProOrCar("cart")}
          >
            Cart ({cartProducts.length})
          </button>
        </div>
      </div>
      <div className="mt-10">
        {selectedTypeForProOrCar === "product" ? (
          <AllProduct
            productsData={productsData}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></AllProduct>
        ) : (
          <SelectedProduct
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            handelTotalPrice={handelTotalPrice}
            setHandelTotalPrice={setHandelTotalPrice}
          ></SelectedProduct>
        )}
      </div>
    </div>
  );
};

export default Products;
