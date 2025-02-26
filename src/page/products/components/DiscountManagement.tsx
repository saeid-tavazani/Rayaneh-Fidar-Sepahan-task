import ProductRating from './ProductRating';

const DiscountManagement = ({ price, discount }: { price: number; discount: number }) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  return (
    <div className="flex items-center justify-between w-full group-hover:opacity-0 transition-all duration-200 min-h-10">
      <div className="flex flex-col">
        {discount && <span className="text-[10px] md:text-sm font-medium text-gray-70 line-through">${price}</span>}
        <span className="text-xs md:text-lg font-light">${discountedPrice}</span>
      </div>
      <ProductRating className="text-primary-500" />
    </div>
  );
};

export default DiscountManagement;
