//icon
import { GiMusicSpell } from "react-icons/gi";
import { LuMousePointerClick } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
//image
import airpod from "../assets/icons/airpod.png";
import earbud from "../assets/icons/earbud.avif";
import earbudP from "../assets/icons/earbudP.jpg";
import visionpro from "../assets/icons/visionpro.jpg";
import profile3 from "../assets/icons/profile3.png";
import visionproP from "../assets/icons/visionproP.jpg";
import airpodP from "../assets/icons/airpodP.webp";
import applewatch from "../assets/icons/applewatch.webp";

const Home = () => {
  return (
    <div className="grid grid-cols-12 mr-10 ml-10 mb-4 gap-4 ">
      <div className="col-span-9 bg-gradient-to-r h-fit from-white to-[#EEEEEE] shadow-lg rounded-3xl backdrop-blur-xl">
        <div className="flex flex-col p-6">
          <div className="flex justify-center items-center p-2 bg-white gap-2 rounded-full  shadow-md w-fit">
            <GiMusicSpell className="text-xl" />

            <p className=" font-semibold text-md   ">Music is Classic</p>
          </div>

          <div className="flex justify-between items-start  mt-4 ">
            <div className="basis-3/5 flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Sequoia Inspiring Musico.</h1>

              <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-semibold">01</h1>
                <h1 className="text-gray-400">___________________</h1>
                <div>
                  <h4 className="font-semibold text-xl">Clear Sound</h4>
                  <p>
                    Making your dream music come true. Stay with Sequoia Sounds!
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-[#D2FF72] flex justify-start items-center p-2 rounded-full gap-1 w-fit">
                  <button type="button" className="font-semibold">
                    View All Products
                  </button>
                  <div className="bg-black rounded-full p-2">
                    <LuMousePointerClick className="text-xl text-white rotate-100" />
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-2/5 self-center flex justify-around">
              <img src={airpod} className="w-[200px] h-auto object-contain " />
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-start items-center">
            <p className="font-semibold">Follow us on:</p>
            <div className="bg-white rounded-full p-2 shadow-md">
              <FaTwitter className="text-xl" />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md">
              <FaTiktok className="text-xl" />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md">
              <AiFillInstagram className="text-xl" />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md">
              <FaLinkedin className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 grid grid-rows-[1fr_3fr_50%] gap-4 ">
        <div className="bg-gradient-to-b from-white to-[#EEEEEE] rounded-3xl h-fit shadow-md">
          <div className="flex flex-col p-4">
            <p className="text-lg  font-semibold">Popular Colors</p>
            <div className="flex gap-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-[#4880d4] border-4 border-white shadow-md"></div>
              <div className="w-6 h-6 rounded-full bg-[#ff7c1b] border-4 border-white shadow-md"></div>
              <div className="w-6 h-6 rounded-full bg-[#1da730] border-4 border-white shadow-md"></div>
              <div className="w-6 h-6 rounded-full bg-[#ed403b] border-4 border-white shadow-md"></div>
              <div className="w-6 h-6 rounded-full bg-[#29c9d4] border-4 border-white shadow-md"></div>
            </div>
          </div>
        </div>

        <div className="relative  rounded-3xl overflow-hidden bg-gradient-to-b from-white to-[#EEEEEE] shadow-md">
          <img
            src={earbud}
            alt="Earbud"
            className="absolute right-0 bottom-0 w-[250px] h-[250px] object-contain "
          />
          <div className="relative z-10 p-4">
            <p className="text-lg font-semibold">
              New Gen <br />
              X-Bud
            </p>
          </div>

          <div className="absolute bottom-2 left-2 z-10 bg-white rounded-full p-2 shadow-md w-fit">
            <LuMousePointerClick className="text-xl text-black rotate-100" />
          </div>
        </div>

        <div className="relative bg-gradient-to-b from-white to-[#EEEEEE] overflow-hidden rounded-3xl h-fit shadow-md">
          <div className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md w-fit">
            <LuMousePointerClick className="text-xl text-black rotate-100" />
          </div>
          <img src={visionpro} alt="VisionPro" className="rounded-md" />
          <div className="absolute bottom-15 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-20"></div>
          <div className="p-2">
            <p className="text-md font-semibold">
              Light Grey Surface Headphone <br />
              <span className="text-xs text-gray-400 font-normal">
                Boosted with bass
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative col-span-9">
        <div className="absolute bottom-20 left-2">
          <div className="grid grid-cols-12  gap-4 ">
            <div className="col-span-3 bg-gradient-to-r  from-white to-[#EEEEEE] rounded-3xl shadow-lg p-4 pt-10">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                  <p className="text-md font-semibold">More Products</p>
                  <p className="text-xs ">460 plus items.</p>
                </div>
                <div className="bg-gray-200 rounded-3xl  shadow-md">
                  <FaHeart className="text-red-500 text-4xl p-2" />
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <img
                  src={airpodP}
                  alt="Airpod"
                  className="h-12 w-12 rounded-xl   shadow-md"
                />
                <img
                  src={earbudP}
                  alt="Earbud"
                  className="h-12 w-12  rounded-xl shadow-md"
                />
                <img
                  src={visionproP}
                  alt="VisionPro"
                  className="h-12 w-12  rounded-xl shadow-md"
                />
              </div>
            </div>

            <div className="col-span-3  bg-gradient-to-r from-white to-[#EEEEEE] rounded-3xl shadow-lg p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="img">
                  <img
                    src={profile3}
                    alt="User"
                    className="h-14 w-14  z-10 relative"
                  />
                </div>
                <div className="absolute z-0 top-10 flex flex-col bg-gradient-to-b from-[#366ab6] to-blue-400 rounded-full items-center justify-center h-24 w-24">
                  <p className="text-lg font-semibold text-white"> 5m+</p>
                  <p className="text-md font-semibold text-white">Downloads</p>
                </div>
                <div className="absolute bottom-12 p-2 bg-white rounded-xl w-fit shadow-md flex gap-2 justify-center items-center">
                  <FaStar className="text-[#e2fd75] text-md" />
                  <p>4.6 reviews</p>
                </div>
              </div>
            </div>
            <div className="col-span-6 bg-gradient-to-r from-white to-[#EEEEEE] rounded-3xl shadow-lg p-4">
              <div className="flex justify-between ">
                <div className="flex flex-col ">
                  <div className=" flex justify-center items-center p-1 bg-white shadow-md border-2 border-gray-400 rounded-3xl">
                    <FaHeart className="text-red-500 text-4xl p-2" />
                    <p className="text-xs font-semibold">Popular</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold text-md">
                      Listenint Has <br /> Been Released
                    </p>
                  </div>
                  <div className="">
                    <div className="flex pt-2">
                      <img
                        src={airpodP}
                        alt="Airpod"
                        className="w-10 h-10 rounded-full shadow-xl z-0"
                      />
                      <img
                        src={visionproP}
                        alt="Visionpro"
                        className="w-10 h-10 rounded-full shadow-xl -ml-4 z-10"
                      />
                      <img
                        src={earbud}
                        alt="Earbud"
                        className="w-10 h-10 rounded-full shadow-xl -ml-4 z-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-white rounded-full shadow-md p-2 w-fit self-end">
                    <LuMousePointerClick className="text-xl text-black rotate-100 " />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={applewatch}
                      alt="Apple Watch"
                      className="w-30 h-30"
                    />
                    <div className=" flex gap-2 self-end bg-gray-200 rounded-xl shadow-md backdrop-blur-2xl w-fit ">
                      <FaStar className="text-amber-400" />
                      <p className="text-md">4.7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
