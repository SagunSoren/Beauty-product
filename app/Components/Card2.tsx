interface cardProp2 {
  name: string;
  price: string;
  imagecover: string;
}

const Card2 = ({ name, price, imagecover }: cardProp2) => {
  return (
    <div className="w-60 border-2 bg-secondary border-lines">
      <img src={imagecover} alt="" />
      <div className="p-4 bg-bg ">
        <h1>{name}</h1>
        <p className="font-bold">${price}</p>
        <div className="flex gap-2">
          <p className="text-heading">★★★★★</p>
          <p>5.0</p>
        </div>
      </div>
    </div>
  );
};
export default Card2;
