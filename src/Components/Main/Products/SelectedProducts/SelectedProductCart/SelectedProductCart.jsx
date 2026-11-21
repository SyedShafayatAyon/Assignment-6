import { toast } from "react-toastify";

const SelectedProductCart = ({ product, cartProducts, setCartProducts }) => {
  const handelRemove = () => {
    const newCartProducts = cartProducts.filter(
      (cartProduct) => cartProduct != product,
    );
    setCartProducts([...newCartProducts]);
    toast.warning(`${product.name} is removed from cart`);
  };
  return (
    <>
      <div className="bg-[rgba(249,250,252,1)] p-6 mb-4 rounded-2xl ">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-white size-16 flex items-center justify-center border border-white/10">
              <img src={product.icon} alt="" />
            </div>
            <div>
              <h5 className="text-xl font-semibold">{product.name}</h5>
              <p className="text-[rgba(98,115,130,1)]">${product.price}</p>
            </div>
          </div>
          <button
            className="btn btn-ghost text-[rgba(255,57,128,1)]"
            onClick={handelRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedProductCart;
