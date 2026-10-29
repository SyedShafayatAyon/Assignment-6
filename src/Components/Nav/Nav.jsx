const Nav = () => {
  return (
    <header>
      <nav className="py-6  ">
        <div className="navbar bg-base-100 shadow-sm flex justify-evenly items-center">
          <div className="">
            <a className=" text-4xl bg-clip-text text-transparent font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              DigiTools
            </a>
          </div>

          <ul className="flex gap-8 font-semibold ">
            <li>
              <a href="" alt="">
                Products
              </a>
            </li>
            <li>
              <a href="" alt="">
                Features
              </a>
            </li>
            <li>
              <a href="" alt="">
                Pricing
              </a>
            </li>
            <li>
              <a href="" alt="">
                Testimonials
              </a>
            </li>
            <li>
              <a href="" alt="">
                FAQ
              </a>
            </li>
          </ul>

          <div className="flex gap-5">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-ghost">Login</button>
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
