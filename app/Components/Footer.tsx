import { poppins } from "../layout";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="h-50 bg-primary justify-between flex items-center py-20 max-sm:px-2 sm:px-10 md:px-20 ">
          <h1 className="md:text-5xl lg:text-6xl max-sm:text-3xl sm:text-4xl text-white w-1/2">
            Subscribe to get 10% off your first order
          </h1>
          <div className="flex w-2/5 bg-bg px-5 py-3 justify-between gap-4 items-center">
            <input
              type="text"
              placeholder="Drop your email here"
              className="w-full   border-r-2 border-r-heading h-full text-2xl outline-none "
            />
            <img src="Arrow-rightgreen.png" alt="" />
          </div>
        </div>
        <div
          className={`h-80 max-sm:px-2 sm:px-4 md:px-10 lg:px-40 text-center flex justify-between items-start bg-secondary text-heading border-b-2 border-b-primary`}
        >
          <div className="mt-10">
            <img src="Logo1.png" className="w-full mb-6" alt="" />
            <p className={`${poppins.className}`}>Opening hours</p>
            <p className={poppins.className}>Monday to Saturday</p>
            <p className={poppins.className}>10:30 a.m. to 7 p.m.</p>
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
          <div className="text-center mt-10">
            <p className="mb-4 font-bold">Shop</p>
            <ul className="flex flex-col items-center gap-2 text-center">
              <li className={poppins.className}>Skincare</li>
              <li className={poppins.className}>Facial</li>
              <li className={poppins.className}>Soap</li>
              <li className={poppins.className}>Candles</li>
              <li className={poppins.className}>Fragrances</li>
              <li className={poppins.className}>Gifts</li>
            </ul>
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
          <div className="text-center mt-10">
            <p className="mb-4 font-black">Help Desk</p>
            <ul className="flex flex-col items-center gap-2 text-center">
              <li className={poppins.className}>Chat</li>
              <li className={poppins.className}>FAQ</li>
              <li className={poppins.className}>Shipping & Returns</li>
              <li className={poppins.className}>Contact</li>
              <li className={poppins.className}>Policies</li>
              <li className={poppins.className}>Accessibility</li>
              <li className={poppins.className}>My Account</li>
            </ul>
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
          <div className="text-center mt-10">
            <p className="mb-4 font-black">Stores</p>
            <ul className="flex flex-col items-center gap-2 text-center">
              <li className={poppins.className}>India</li>
              <li className={poppins.className}>Tokyo</li>
              <li className={poppins.className}>Paris</li>
              <li className={poppins.className}>Manhattan</li>
              <li className={poppins.className}>Brooklyn</li>
              <li className={poppins.className}>Buenos Aires</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-heading p-4 px-10">
        <h1 className="tracking-wider">
          © Designed by Sagun Soren,Powered by Next.js
        </h1>
        <ul className="flex gap-4">
          <li>Licenses</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
