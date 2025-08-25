const Inspiredby = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center max-sm:p-2 sm:p-4 md:p-20">
        <h1 className="text-5xl max-sm:text-3xl tracking-wide text-heading">
          Inspired by <br /> traditional knowlege and nature
        </h1>
      </div>
      <div className="w-1/2 bg-[#e4ece0] h-100 max-sm:h-120 sm:h-100 flex flex-col justify-around max-sm:gap-2 max-sm:p-2 sm:p-4 md:p-10 lg:p-20">
        <div className="flex gap-6 items-center">
          <img src="Organic.png" className="h-10 w-10 md:h-16 md:w-16" alt="" />
          <div>
            <h1 className="font-bold text-green-950">100% Organic</h1>
            <p className="max-sm:text-sm text-darkgreen">
              We craft skincare using the most exqusite ingredients from the
              plant, earth and mineral realms.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src="skin 1.png" className="h-10 w-10 md:h-16 md:w-16" alt="" />
          <div>
            <h1 className="font-bold text-green-950">Fits your skin</h1>
            <p className="max-sm:text-sm text-darkgreen">
              It&apos;s all natural and processed based on traditional knowledge
              with modern technology.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src="serum 3.png" className="h-10 w-10 md:h-16 md:w-16" alt="" />
          <div>
            <h1 className="font-bold text-green-950">Easy to use</h1>
            <p className="max-sm:text-sm text-darkgreen">
              Packed with a unique design as well as usefull that can help you
              perform routine skin care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inspiredby;
