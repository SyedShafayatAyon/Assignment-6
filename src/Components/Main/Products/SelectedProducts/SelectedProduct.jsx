import { toast } from "react-toastify";
import EmptyCard from "./EmptyCard/EmptyCard";
import SelectedProductCart from "./SelectedProductCart/SelectedProductCart";

const SelectedProduct = ({
  cartProducts,
  setCartProducts,
  handelTotalPrice,
  setHandelTotalPrice,
}) => {
  const handelProceedtoCheckout = () => {
    setCartProducts([]);
    toast.success("Order is confirmed");
  };

  const totalPrice = cartProducts.reduce((previous, current) => {
    return previous + current.price;
  }, 0);
  setHandelTotalPrice(totalPrice);
  return (
    <div className="border-2 border-[#f1f1f1] rounded-2xl p-10 space-y-6">
      <h4 className="font-bold text-2xl">Your Cart</h4>
      {cartProducts.length != 0 ? (
        <>
          {cartProducts.map((product) => (
            <SelectedProductCart
              product={product}
              key={product.id}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            ></SelectedProductCart>
          ))}
          <div className="flex justify-between">
            <h4 className="text-[#627382]">Total:</h4>
            <h4 className="font-bold text-2xl">${handelTotalPrice}</h4>
          </div>
          <button
            className="text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full py-3 rounded-full btn"
            onClick={handelProceedtoCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      ) : (
        <EmptyCard></EmptyCard>
      )}
    </div>
  );
};

export default SelectedProduct;
