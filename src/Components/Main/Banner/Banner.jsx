import { Play } from "lucide-react";
import bannerImg from "../../../assets/banner.png";
import { useState } from "react";

const Banner = () => {
  const [selectBtn, setSelectBtn] = useState("ExploreProducts");
  return (
    <div className="flex items-center justify-between mt-20 container mx-auto">
      <div className="space-y-6">
        <div className="flex items-center gap-1.5 bg-[#E1E7FF] px-4 rounded-full max-w-75">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-primary animate-ping"></div>
            <div className="status status-primary"></div>
          </div>{" "}
          <p className="bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-medium">
            New: AI-Powered Tools Available
          </p>
        </div>
        <div className="space-y-6">
          <h1 className="text-7xl font-extrabold ">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className=" text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="space-x-4">
            <button
              className={`btn rounded-full  ${selectBtn === "ExploreProducts" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "border-[#4F39F6] bg-white bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
              onClick={() => setSelectBtn("ExploreProducts")}
            >
              Explore Products
            </button>
            <button
              className={`btn rounded-full ${selectBtn === "WatchDemo" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "border-[#4F39F6] bg-white bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
              onClick={() => setSelectBtn("WatchDemo")}
            >
              <Play
                className={
                  selectBtn === "WatchDemo" ? "text-white" : "text-[#4F39F6]"
                }
              />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
