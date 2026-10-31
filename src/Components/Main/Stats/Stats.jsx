const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 flex justify-evenly items-center text-white text-center mt-21.25">
      <div className="border-r border-white/25 space-y-3 px-32">
        <h2 className="font-extrabold text-6xl ">50K+</h2>
        <h4 className="font-medium text-2xl">Active Users</h4>
      </div>
      <div className="border-r border-white/25 space-y-3 px-32">
        <h2 className="font-extrabold text-6xl ">200++</h2>
        <h4 className="font-medium text-2xl">Premium Tools</h4>
      </div>
      <div className=" space-y-3 px-32">
        <h2 className="font-extrabold text-6xl ">4.9+</h2>
        <h4 className="font-medium text-2xl">Rating</h4>
      </div>
    </div>
  );
};

export default Stats;
