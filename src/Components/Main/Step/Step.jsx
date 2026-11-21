import packageImg from "../../../assets/package.png";
import rocketImg from "../../../assets/rocket.png";
import userImg from "../../../assets/user.png";
const Step = () => {
  return (
    <div className=" mt-30 p-30 bg-[#f9fafc]">
      <div className="text-center space-y-4 container mx-auto">
        <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mt-10">
        <div className="border-2 border-[#F1F1F1] p-5 space-y-4 size-95 rounded-2xl">
          <div className="flex justify-end">
            <div className="size-12 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 text-center">
              01
            </div>
          </div>
          <div className="size-24 rounded-full p-6 bg-[#f3e8fe] mx-auto">
            <img src={userImg} alt="" />
          </div>
          <div className="text-center ">
            <h4 className="font-bold text-2xl">Create Account</h4>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>

        <div className="border-2 border-[#F1F1F1] p-5 space-y-4 size-95 rounded-2xl">
          <div className="flex justify-end">
            <div className="size-12 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 text-center">
              02
            </div>
          </div>
          <div className="size-24 rounded-full p-6 bg-[#f3e8fe] mx-auto">
            <img src={packageImg} alt="" />
          </div>
          <div className="text-center ">
            <h4 className="font-bold text-2xl">Choose Products</h4>
            <p className="text-[#627382]">
              Browse our catalog and select the tools <br /> that fit your
              needs.
            </p>
          </div>
        </div>

        <div className="border-2 border-[#F1F1F1] p-5 space-y-4 size-95 rounded-2xl">
          <div className="flex justify-end">
            <div className="size-12 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 text-center">
              03
            </div>
          </div>
          <div className="size-24 rounded-full p-6 bg-[#f3e8fe] mx-auto">
            <img src={rocketImg} alt="" />
          </div>
          <div className="text-center ">
            <h4 className="font-bold text-2xl">Start Creating</h4>
            <p className="text-[#627382]">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
