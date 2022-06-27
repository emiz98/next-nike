import { LocationMarkerIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div className="bg-black p-3 lg:px-20 lg:p-10 text-white space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10">
        <div className="flex flex-col lg:flex-row col-span-6 gap-x-40 text-sm gap-y-6">
          <div className="grid col-span-2 footerText">
            <h4 className="font-bold !text-base mb-2 !text-white">
              FIND A STORE
            </h4>
            <span>Become a Member</span>
            <span>Sign Up for Email</span>
            <span>Student Discounts</span>
            <span>Send Us Feedback</span>
          </div>
          <div className="grid col-span-2 footerText">
            <h4 className="font-bold !text-base mb-2 !text-white">GET HELP</h4>
            <span>Order Status</span>
            <span>Delivery</span>
            <span>Returns</span>
            <span>Payment Options</span>
            <span>Contact Us</span>
          </div>
          <div className="grid col-span-2 footerText">
            <h4 className="font-bold !text-base mb-2 !text-white">
              ABOUT NIKE
            </h4>
            <span>News</span>
            <span>Careers</span>
            <span>Investors</span>
            <span>Sustainability</span>
          </div>
        </div>
        <div className="col-span-6 flex gap-x-4 justify-start lg:justify-end">
          <svg
            className="bg-gray-500 p-2 rounded-full hover:bg-white cursor-pointer transitionClass"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="35"
            height="35"
          >
            <path
              d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
          <svg
            className="bg-gray-500 p-2 rounded-full hover:bg-white cursor-pointer transitionClass"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="35"
            height="35"
          >
            <path
              d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
          <svg
            className="bg-gray-500 p-2 rounded-full hover:bg-white cursor-pointer transitionClass"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="35"
            height="35"
          >
            <path
              d="M13.83 19.259L19.262 16l-5.432-3.259z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
            <path
              d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.688 16.701c0 1.5-.174 3-.174 3s-.17 1.278-.69 1.839c-.661.738-1.401.742-1.741.786-2.432.186-6.083.192-6.083.192s-4.518-.044-5.908-.186c-.387-.077-1.254-.055-1.916-.792-.521-.562-.69-1.839-.69-1.839s-.174-1.499-.174-3v-1.406c0-1.5.174-2.999.174-2.999s.17-1.278.69-1.841c.661-.739 1.401-.743 1.741-.785 2.431-.188 6.079-.188 6.079-.188h.008s3.648 0 6.079.188c.339.042 1.08.046 1.741.784.521.563.69 1.841.69 1.841s.174 1.5.174 3v1.406z"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
          <svg
            className="bg-gray-500 p-2 rounded-full hover:bg-white cursor-pointer transitionClass"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 2476 2476"
          >
            <path
              d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
              fill="#000000"
              className="color000 svgShape"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-5">
        <div className="col-span-1 flex items-center gap-x-3">
          <LocationMarkerIcon className="w-5 hidden md:flex" />
          <h5 className="text-sm hidden md:flex">Sri Lanka</h5>
          <p className="text-gray-500 text-xs font-medium ml-6">
            © 2022 Nike, Build only for educational purposes.
          </p>
        </div>
        <div className="hidden col-span-1 md:flex items-center justify-end text-xs text-gray-400 gap-x-12">
          <h3 className="hover:underline cursor-pointer">Terms of Sale</h3>
          <h3 className="hover:underline cursor-pointer">Terms of Use</h3>
          <h3 className="hover:underline cursor-pointer">
            Nike Privacy Policy
          </h3>
          <h3 className="hover:underline cursor-pointer">Guides</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
