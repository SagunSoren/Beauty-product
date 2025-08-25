import { cormorant, poppins } from "../layout";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-primary h-180"></div>
      <div className="w-1/2 h-180">
        <img src="Image1.png" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute flex justify-center w-full h-220 items-center text-bg">
        <div>
          <img src="Hero.png" alt="" />
        </div>
        <div
          className={`text-7xl max-sm:text-5xl max-sm:leading-16 leading-22 tracking-widest ${cormorant.className}`}
        >
          Let nature take <br /> care of your body <br /> and soul
          <div>
            <div>
              <button
                className={`${poppins.className} flex mt-10 items-center max-sm:py-1 max-sm:mt-2 max-sm:px-2 gap-4 text-xl py-3 px-10 tracking-tight bg-bg text-heading`}
              >
                Shop now
                <img src="Arrow Right.png" className="h-4" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
