const AboutUs = () => {
  return (
    <div className="py-20 max-sm:px-2 sm:px-4 lg:px-20 flex border-b-secondary border-b-1">
      <div className="left-side w-1/2 flex flex-col gap-4">
        <p className="text-heading">About Us</p>
        <p className="text-4xl text-heading">
          Velvety facial and <br /> skincare company
        </p>
      </div>
      <div className="right-side w-1/2 flex flex-col gap-8">
        <p className=" font-bold text-heading">
          Velvety is an indigenous company that specializes in the manufacture
          and development of facial and skincare products using the medicinal
          properties of the traditional First Nations pharmacopoeia, with a
          concern for sustainable development.
        </p>
        <p className=" font-bold text-heading">
          The products offered, whose benefits have been scientifically
          confirmed, are 100% natural and allow you to take care of your body
          and mind: calming teas, energizing infusions, anti-inflammatory
          essential oils, anti-age soaps and creams, etc.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
