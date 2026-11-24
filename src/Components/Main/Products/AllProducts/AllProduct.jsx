import AllProductCard from "./AllProductCard/AllProductCard";

const AllProduct = ({ productsData, cartProducts, setCartProducts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 justify-items-center">
      {productsData.map((product) => (
        <AllProductCard
          key={product.id}
          product={product}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></AllProductCard>
      ))}
    </div>
  );
};

export default AllProduct;
