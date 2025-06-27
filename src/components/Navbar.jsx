//icons
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
//logo
import logoNav from "../assets/icons/logoNav.png";
import profile from "../assets/icons/profile.png";

const Navbar = () => {
  return (
    <div className="p-2 mt-8 mr-10 ml-10 mb-4 bg-gradient-to-r from-white to-[#EEEEEE] rounded-full backdrop-blur-xl">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-2 p-2 justify-center items-center rounded-full bg-[#EEEEEE] shadow-md">
            <img className="w-[40px] h-[40px]" src={logoNav} alt="logoNavbar" />
            <p className="font-semibold">Nitec.</p>
          </div>

          <div className="flex justify-center items-center ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-4 pr-12 py-3 bg-white rounded-full shadow-md placeholder:text-black placeholder:text-md focus:outline-none"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2">
                <IoSearch className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-white rounded-full p-1 shadow-md">
            <MdOutlineShoppingCart className="text-4xl p-2 " />
          </div>
          <div className="bg-white rounded-full p-1 shadow-md">
            <FaHeart className="text-red-500 text-4xl p-2" />
          </div>
          <div className="bg-white rounded-full flex gap-2 p-1 justify-center items-center shadow-md">
            <p className="pl-2 text-md font-semibold">Phoo Phoosith</p>
            <img src={profile} className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
