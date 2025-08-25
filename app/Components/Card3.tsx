interface CardProp2 {
  desc: string;
}
const Card3 = ({ desc }: CardProp2) => {
  return (
    <div className="bg-bg">
      <p className="mb-6 text-darkgreen text-2xl">★★★★★</p>
      <p className=" text-4xl text-darkgreen max-sm:text-3xl w-140">"{desc}"</p>
    </div>
  );
};
export default Card3;
