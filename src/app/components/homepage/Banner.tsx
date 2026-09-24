import banner from "../../assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className=" h-screen lg:h-[87vh] px-10 sm:px-12 lg:px-18 py-6 sm:py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between  lg:gap-26 bg-[#15171D] my-4 rounded-2xl ">
        {/* Left Side */}
        <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
          <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Buttons */}
          <div className="flex  gap-4 mt-3 justify-center lg:justify-start">
            <button
              className="border bg-[#C2F800] font-semibold
            px-6 py-3 rounded-lg hover:bg-
             duration-300 cursor-pointer 
            w-full sm:w-auto"
            >
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={banner} width={400} height={400} alt="Banner logo" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
