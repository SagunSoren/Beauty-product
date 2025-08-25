const Refer = () => {
  return (
    <div className="py-20 max-sm:px-2 border-t-2 border-secondary flex justify-between">
      <div className=" flex flex-col w-full items-center justify-end text-heading">
        <p className="mb-6">
          <img src="Container.png" alt="" />
        </p>
        <p>Loyalty Program</p>
        <h1 className="text-4xl max-sm:text-2xl font-semibold text-center">
          For Happy Skin
        </h1>
        <div className="mt-2">
          <button className="flex items-center px-4 py-2 gap-2 border-2 border-primary">
            Join the program{" "}
            <img src="Arrow-rightgreen.png" className="h-4" alt="" />
          </button>
        </div>
      </div>

      <div className="w-1 bg-secondary"></div>
      <div className=" flex flex-col w-full items-center justify-end text-heading">
        <p className="mb-6">
          <img src="feedback.png" alt="" />
        </p>
        <p>Loyalty Program</p>
        <h1 className="text-4xl max-sm:text-2xl font-semibold text-center">
          Sponsor those you love!
        </h1>
        <div className="mt-2">
          <button className="flex items-center px-4 py-2 gap-2 border-2 border-primary">
            Join the program{" "}
            <img src="Arrow-rightgreen.png" className="h-4" alt="" />
          </button>
        </div>
      </div>

      <div className="w-1 bg-secondary"></div>
      <div className=" flex flex-col w-full  items-center justify-end text-heading">
        <p className="mb-6">
          <img src="beauty-treatment.png" alt="" />
        </p>
        <p>Loyalty Program</p>
        <h1 className="text-4xl max-sm:text-2xl font-semibold text-center">
          at Maison Absolution
        </h1>
        <div className="mt-2">
          <button className="flex items-center px-4 py-2 gap-2 border-2 border-primary">
            Join the program{" "}
            <img src="Arrow-rightgreen.png" className="h-4" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Refer;
