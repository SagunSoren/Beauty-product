
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Inspiredby from "./Components/Inspiredby";
import Featured from "./Components/Featured";
import AboutUs from "./Components/AboutUs";
import AsSeen from "./Components/AsSeen";
import AllProducts from "./Components/AllProducts";
import OurServices from "./Components/OurServices";
import Testimonials from "./Components/Testimonials";
import Refer from "./Components/Refer";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-bg">
      <Navbar />
      <Hero />
      <Inspiredby />
      <Featured />
      <AboutUs />
      <AsSeen />
      <AllProducts />
      <OurServices />
      <Testimonials />
      <Refer />
      <Footer />
    </div>
  );
}
