interface CardPros1 {
  coverimage: string;
  name: string;
  price: string;
  rating: string;
}
const Card1 = ({ coverimage, name, price, rating }: CardPros1) => {
  return (
    <div className="w-180 bg-bg p-4 border-2 border-l-0 border-lines ">
      <div className="bg-secondary flex justify-center items-center">
        <img
          src={coverimage}
          alt="image of product"
          className="drop-shadow-[20px_20px_20px_rgba(0,0,0,1)]"
        />
      </div>
      <div className=" flex w-full items-center">
        <div className="w-full">
          <h2 className="text-xl mt-4 font-semibold text-heading">{name}</h2>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-bold text-lg text-heading">${price}</p>
            </div>

            <div className="flex items-center gap-2 text-heading">
              <p>★★★★★</p>
              <p>{rating}</p>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center">
          <p>rating</p>
          <p>4.0</p>
        </div> */}
      </div>
    </div>
  );
};
export default Card1;
