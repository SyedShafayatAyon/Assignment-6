import { toast } from "react-toastify";

const AllProductCard = ({ product, cartProducts, setCartProducts }) => {
  const { name, description, price, period, tag, features, icon } = product;
  const tagStyle = {
    "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
    Popular: "bg-[#E1E7FF]  text-[#4F39F6] ",
    New: "bg-[#DBFCE7] text-[#0A883E]",
  };
  const handelBuyNow = () => {
    setCartProducts([...cartProducts, product]);
    toast.success(`${name} is added to cart`);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-end ">
            <span className={`rounded-full px-3 py-1.5 ${tagStyle[tag]}`}>
              {tag}
            </span>
          </div>

          <div className="mb-7">
            <img src={icon} alt="" />
          </div>

          <div className="space-y-4.5">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-[#627382]">{description}</p>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-[#627382]">
              /{period == "monthly" ? "mo" : period}
            </span>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              className="btn text-white bg-linear-to-r  from-[#4F39F6] to-[#9514FA] w-full rounded-full"
              onClick={handelBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
