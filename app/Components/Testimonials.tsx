"use client";
import Card3 from "./Card3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

function SampleNextArrow(props:any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 bottom-1/5 -translate-y-1/2 z-10 "
    >
      <img src="Arrow Right.png" alt="" />
    </button>
  );
}

function SamplePrevArrow(props:any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/5 -translate-y-1/2 z-10 "
    >
      <img src="Arrow Left.png" alt="" />
    </button>
  );
}
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex max-md:flex-col py-20 w-full">
      <div className="md:w-1/4 max-md:w-1/2 max-md:ml-10 bg-secondary rounded-[100%] ">
        <img
          src="Velvety1.png"
          className="w-full h-full object-cover drop-shadow-[20px_20px_20px_rgba(0,0,0,0.8)]"
          alt=""
        />
      </div>
      <div className="py-10 md:ml-10 w-full md:w-2/3 ">
        <div className="">
          {" "}
          <p className="mb-10 font-bold text-primary text-2xl">
            Product Testimonials
          </p>
          {/* Corousel */}
          <div className="w-full max-w-full">
            <Slider {...settings}>
              <div>
                <Card3 desc="I have really sensitive skin, so I&apos;m always cautious about trying new products. This one surprised me — no irritation, no redness, and it actually calms my skin. The fragrance is subtle and refreshing too!" />
              </div>
              <div>
                <Card3 desc="This is honestly the first product I look forward to using every day. The packaging feels premium, and the results speak for themselves — smoother skin and a healthy glow. I&apos;ve already recommended it to my friends." />
              </div>
              <div>
                <Card3 desc="I&apos;ve been using this product for about three weeks, and I can already see a big difference in my skin. It feels softer, looks more radiant, and the texture has improved. I love that it&apos;s lightweight and doesn&apos;t feel greasy at all." />
              </div>
            </Slider>
          </div>
          <p className="mt-10">Customer Review</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

{
  /* <div className="w-full max-w-3xl mx-auto">
        <Slider {...settings}>
          <div>
            <img src="/images/slide1.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div> */
}
