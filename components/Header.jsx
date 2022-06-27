import { useEffect, useState } from "react";
import {
  SearchIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

SwiperCore.use([Autoplay]);

const Header = () => {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  const transitionHeader = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <header className="bg-white w-full">
      <div className="flex items-center justify-between bg-gray-100 p-2 px-10 w-full">
        <img className="w-6" src="nike1.svg" alt="nike_header" />
        <div className="flex items-center gap-x-3 font-medium text-xs headerUpper">
          <h6>Help</h6>
          <span>|</span>
          <h6>Join Us</h6>
          <span>|</span>
          <h5>
            Sign in as <span className="font-bold">Menura Adithya</span>
          </h5>
          <span>|</span>
          <h6>Logout ?</h6>
        </div>
      </div>

      <motion.div
        key={show}
        initial={{ translateY: -100 }}
        animate={{
          translateY: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          translateY: -100,
        }}
        className={`px-10 group bg-white ${show && "fixed top-0 z-50 w-full"}`}
      >
        <div className="inline-grid grid-cols-3 w-full">
          <svg
            className="w-14 h-14 hover:fill-gray-600 cursor-pointer"
            height="60px"
            width="60px"
            fill="#111"
            viewBox="0 0 69 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
          </svg>
          <div className="flex items-center gap-x-1 font-medium justify-center headerMiddle">
            <h4>Men</h4>
            <h4>Women</h4>
            <h4>Kids</h4>
            <h4>Customise</h4>
            <h4>Sale</h4>
            <h4>SNKRS</h4>
          </div>
          <div className="flex items-center gap-x-2 justify-end">
            <div className="bg-gray-100 rounded-full flex items-center hover:bg-gray-200">
              <SearchIcon className="headerIcon" />
              <input
                type="text"
                className="bg-transparent outline-none ml-3 placeholder:font-medium 
              placeholder:text-gray-400 w-28"
                placeholder="Search"
              />
            </div>
            <HeartIcon className="headerIcon" />
            <div
              className="relative select-none"
              onClick={() => setShowCart(!showCart)}
            >
              <ShoppingBagIcon className="headerIcon" />
              <div
                className="p-1 bg-gray-200 border border-gray-300 text-black font-medium rounded-full 
              absolute top-1 right-0 w-5 h-5 flex items-center justify-center animate-bounce"
              >
                5
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{
                translateY: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{
                translateY: -20,
                opacity: 0,
              }}
              className={`h-96 w-96 bg-gray-100 absolute z-50 right-10 top-[100px] rounded-l-lg rounded-b-lg ${
                show && "top-[60px]"
              }`}
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="p-2 bg-gray-100 text-center font-medium">
        <Swiper
          autoplay={{ delay: 5000 }}
          draggable={false}
          speed={1500}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <h4 className="">Free Standard Delivery & 30-Day Free Returns</h4>
            <span className="text-xs underline cursor-pointer font-medium">
              Join Now View Details
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="">Save Up to 40%</h4>
            <span className="text-xs underline cursor-pointer font-medium">
              Shop All Our New Markdowns
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="">20 - 25 June: New Arrivals</h4>
            <span className="text-xs underline cursor-pointer font-medium">
              Stay ahead with exclusive access to the season’s newest styles,
              only on the Nike App. Download
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
