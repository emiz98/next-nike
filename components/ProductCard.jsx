const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="flex flex-col group relative overflow-hidden">
      <img
        src={img}
        alt="prod_img"
        className="rounded-xl group-hover:opacity-80 transitionClass select-none"
      />
      <div className="flex justify-between mt-5">
        <div>
          <h4 className="font-medium text-lg line-clamp-2 w-2/3 hover:text-gray-600">
            {title}
          </h4>
          <p className="text-sm text-gray-600">{description}</p>
          <button
            className="-translate-y-14 absolute top-3 right-3 text-white font-medium 
          bg-gray-800 rounded-full px-6 py-2 hover:bg-gray-600 transitionClass group-hover:translate-y-0"
          >
            Add to cart
          </button>
        </div>
        <span className="font-medium text-lg">
          ${parseFloat(price.split(",")[1]) / 10}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
