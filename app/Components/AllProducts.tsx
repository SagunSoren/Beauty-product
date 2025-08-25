import Card2 from "./Card2";
const AllProducts = () => {
  return (
    <div className="">
      <div className="px-20 py-8 bg-primary flex items-center justify-between">
        <p className="text-3xl text-white">
          Let&apos;s see the processing of our products
        </p>
        <img src="Arrow-right.svg" alt="" />
      </div>

      <div className="py-20 flex max-sm:flex-col">
        <div className="left-side max-sm:px-2 sm:px-4 md:px-10 lg:px-20 sm:w-1/2">
          <p className="mb-4">All Products</p>
          <h1 className="text-4xl mb-4">
            Mild Skincare & facial <br /> routine
          </h1>
          <div className="flex items-center flex-wrap gap-2">
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              All needs
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Project
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Regenerates
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Revitalizes
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Feeds
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Regulates
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Purifies
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Makeup Removal
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Exfoliate
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Antioxidant
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Soothes
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Smoothes skin texture
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Tones
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Anti-waste
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Hydrate
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Strengthens
            </button>
            <button className="px-4 py-2 border-2 hover:bg-primary/20 border-secondary rounded-full">
              Regenerates after UV exposure Strengthens
            </button>
          </div>
        </div>

        <div className="right-side sm:w-1/2 max-sm:mt-6 px-20 max-sm:px-2 mx-auto">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1 gap-4 ">
              <Card2 name="CLASSWING" imagecover="./item.png" price="20" />
              <Card2 name="HOLOCANE" price="23" imagecover="./item1.png" />
              <Card2 name="INAMORATA" price="12" imagecover="./item (3).png" />
              <Card2 name="LIGHTCOOL" price="22.5" imagecover="./item3.png" />
              <div>
                <button className="px-4 mt-4 gap-4 py-2 flex items-center border-primary border-2">
                  Shop Now
                  <img src="Arrow-rightgreen.png" className="h-4" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
