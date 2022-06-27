const Banner = ({ img, title, isBlack }) => {
  return (
    <div className="relative">
      <img
        src={img}
        alt="image"
        className="object-cover rounded-2xl w-full h-full"
      />
      <div
        className={`absolute left-5 bottom-5 ${
          isBlack ? "text-black" : "text-white"
        }`}
      >
        <h3 className="font-medium text-xl">{title}</h3>
        <button
          className={`mt-8 rounded-full px-6 py-2 
         font-medium transitionClass ${
           isBlack
             ? "bg-black text-white hover:bg-gray-800"
             : "bg-white text-black hover:bg-gray-200"
         }`}
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default Banner;
