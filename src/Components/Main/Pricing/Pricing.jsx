import { useState } from "react";

const Pricing = () => {
  const [pricing, setPricing] = useState("pro");

  const activeCardStyle =
    "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl";

  const unActiveBtnStyle =
    "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]";

  const activeBtnTextStyle =
    "bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]";

  return (
    <div className="p-30">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-7.5 mt-10">
          <div className="card w-96 bg-base-100 shadow-sm h-112 rounded-2xl">
            <div
              className={`card-body flex flex-col justify-between p-6 ${pricing === "Starter" ? activeCardStyle : ""}`}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Starter</h2>
                  <p
                    className={`text-[#627382] ${pricing === "Starter" ? "text-white" : ""}`}
                  >
                    Perfect for getting started
                  </p>
                </div>
                <p>
                  <span className="text-4xl font-bold">$0</span>
                  <span
                    className={`text-[#627382] ${pricing === "Starter" ? "text-white" : ""}`}
                  >
                    /Month
                  </span>
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
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
                  <span>Access to 10 free tools</span>
                </li>
                <li>
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
                  <span>Basic templates</span>
                </li>
                <li>
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
                  <span>Community support</span>
                </li>
                <li>
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
                  <span>1 project per Month</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className={`btn  btn-block rounded-full ${pricing === "Starter" ? "bg-white" : unActiveBtnStyle}`}
                  onClick={() => setPricing("Starter")}
                >
                  <span
                    className={`${pricing === "Starter" ? activeBtnTextStyle : ""}`}
                  >
                    Get Started Free
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-sm h-112">
            <div
              className={`card-body flex flex-col justify-between p-6 ${pricing === "pro" ? activeCardStyle : ""}`}
            >
              <span className="badge badge-xs badge-warning self-center">
                Most Popular
              </span>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Pro</h2>
                  <p
                    className={`text-[#627382] ${pricing === "pro" ? "text-white" : ""}`}
                  >
                    Best for professionals
                  </p>
                </div>
                <p>
                  <span className="text-4xl font-bold">$29</span>
                  <span
                    className={`text-[#627382] ${pricing === "pro" ? "text-white" : ""}`}
                  >
                    /Month
                  </span>
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
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
                  <span>Access to all premium tools</span>
                </li>
                <li>
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
                  <span>Basic templates</span>
                </li>
                <li>
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
                  <span>Unlimited templates</span>
                </li>
                <li>
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
                  <span>Priority support</span>
                </li>
                <li>
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
                  <span>Unlimited projects</span>
                </li>
                <li>
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
                  <span>Cloud sync</span>
                </li>
                <li>
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
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className={`btn  btn-block rounded-full ${pricing === "pro" ? "bg-white" : unActiveBtnStyle}`}
                  onClick={() => setPricing("pro")}
                >
                  <span
                    className={`${pricing === "pro" ? activeBtnTextStyle : ""}`}
                  >
                    Start Pro Trial
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-sm h-112">
            <div
              className={`card-body p-6 flex flex-col justify-between ${pricing === "Enterprise" ? activeCardStyle : ""}`}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Enterprise</h2>
                  <p
                    className={`text-[#627382] ${pricing === "Enterprise" ? "text-white" : ""}`}
                  >
                    For teams and businesses
                  </p>
                </div>
                <p>
                  <span className="text-4xl font-bold">$99</span>
                  <span
                    className={`text-[#627382] ${pricing === "Enterprise" ? "text-white" : ""}`}
                  >
                    /Month
                  </span>
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
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
                  <span>Everything in Pro</span>
                </li>
                <li>
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
                  <span>Team collaboration</span>
                </li>
                <li>
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
                  <span>Custom integrations</span>
                </li>
                <li>
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
                  <span>Dedicated support</span>
                </li>
                <li>
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
                  <span>Custom branding</span>
                </li>
                <li>
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
                  <span>Custom branding</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className={`btn  btn-block rounded-full ${pricing === "Enterprise" ? "bg-white" : unActiveBtnStyle}`}
                  onClick={() => setPricing("Enterprise")}
                >
                  <span
                    className={`${pricing === "Enterprise" ? activeBtnTextStyle : ""}`}
                  >
                    Get Started Free
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
