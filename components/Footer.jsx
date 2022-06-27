import { LocationMarkerIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div className="bg-black px-10 p-5 text-white space-y-5 py-10">
      <div className="grid grid-cols-12">
        <div className="flex col-span-6 gap-x-28 text-sm">
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
        <div className="col-span-6"></div>
      </div>
      <div className="grid grid-cols-2 pt-5">
        <div className="col-span-1 flex items-center gap-x-3">
          <LocationMarkerIcon className="w-5" />
          <h5 className="text-sm">Sri Lanka</h5>
          <p className="text-gray-500 text-xs font-medium ml-6">
            © 2022 Nike, Build only for educational purposes.
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-end text-xs text-gray-400 gap-x-12">
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
