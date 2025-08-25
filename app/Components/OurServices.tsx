const OurServices = () => {
  return (
    <div className="border-2 border-secondary">
      <div className="flex py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img src="Image2.png" alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center text-heading gap-4 ">
          <p>Try Our Services</p>
          <h1 className="text-5xl max-sm:text-3xl">
            Your skin diagnosis in <br /> 3 minutes
          </h1>
          <p>
            Say hello to a more radiant, healthier you with personalized <br />
            skincare that's as unique as you are.
          </p>
          <div>
            <button className="flex items-center px-4 py-2 gap-4 border-2 border-primary">
              Start my diagnosis{" "}
              <img src="Arrow-rightgreen.png" className="h-4" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
