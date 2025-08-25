import Card1 from "./Card1";

const Featured = () => {
  return (
    <div>
      <div className="flex  justify-center items-center py-20 md:px-20">
        <div className="flex text-heading justify-center flex-col items-center gap-4">
          <h1 className="text-3xl">Our featured products</h1>
          <p className="text-5xl text-center">
            Facial and skincare, natural and <br /> certified organic
          </p>
        </div>
      </div>

      <div className="flex max-sm:flex-wrap">
        <Card1 coverimage="Velvety1.png" name="CHICORI" price="20" rating="4.0" />
        <Card1 coverimage="Velvety4.png" name="NOTORIOUS" price="23" rating="5.0" />
        <Card1 coverimage="Velvety6.png" name="HOLOCENA" price="20" rating="5.0" />
      </div>
    </div>
  );
};
export default Featured;
