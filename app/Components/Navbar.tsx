import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className=" z-10 absolute w-full text-white flex py-5 px-12 max-sm:px-6">
      <div className="w-1/2">
        <img src="Logo.svg" alt="" />
      </div>

      <div className="flex justify-between items-center w-1/2 max-md:hidden">
        <ul className="flex items-center lg:gap-10 max-lg:gap-2 ml-12 max-md:ml-2 ">
          <li className="flex items-center max-sm:hidden">
            PAGES
            <RiArrowDropDownLine className="text-3xl" />
          </li>
          <li>SHOP</li>
          <li>ABOUT</li>
        </ul>
        <ul className="flex items-center gap-10">
          <li>LOGIN</li>
          <li>CART</li>
        </ul>
        <div></div>
      </div>
      <div className="flex text-2xl items-center justify-end md:hidden  w-1/2">
        <CiMenuFries />
      </div>
    </div>
  );
};
export default Navbar;
