import emptyCartImg from "../../../../../assets/shopping-cart.png";
const EmptyCard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <img src={emptyCartImg} alt="" />
      <h3 className="text-[#627382]">Your cart is empty</h3>
    </div>
  );
};

export default EmptyCard;
