import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import clsx from 'clsx';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Button from '../../../components/Button';
import { ProductType } from '../index';

const COLORS = ['bg-secondary', 'bg-primary', 'bg-black', 'bg-error', 'bg-success', 'bg-white'];
const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const Card = ({ color, discount, id, image, model, price, title }: ProductType) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  const randomRating = (Math.random() * 6).toFixed(1);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="col-span-1 shadow-sm rounded-lg p-4 flex flex-col gap-4 relative hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      {discount && (
        <div className="absolute bg-secondary-100 text-secondary-400 left-0 top-1 px-1.5 py-1 z-10 rounded-r-lg">-{discount}%</div>
      )}

      <AspectRatio ratio={16 / 9} className="flex items-center">
        <img src={image} alt={model} className="size-full object-cover" />
      </AspectRatio>

      {color && (
        <div className="flex flex-col gap-2 absolute right-0 top-1/4">
          {[...Array(3)].map((_, index) => (
            <span key={index} className={clsx('size-3 border border-black rounded-full', getRandomColor())}></span>
          ))}
          <span>+</span>
        </div>
      )}

      <div className="w-full h-[1px] bg-gradient-to-r from-[#4444441A] via-[#101010B2] to-[#4444441A]" />
      <p className="whitespace-nowrap overflow-hidden w-full text-ellipsis text-sm md:text-base font-light">{title}</p>

      <div className="flex items-center justify-between w-full group-hover:opacity-0 transition-all duration-200 min-h-10">
        <div className="flex flex-col">
          {discount && <span className="text-[10px] md:text-sm font-medium text-gray-70 line-through">${price}</span>}
          <span className="text-xs md:text-lg font-light">${discountedPrice}</span>
        </div>
        <div className="text-primary-500 text-base font-medium gap-0.5 flex items-center">
          <FaStar size={24} /> <span>{randomRating}</span>
        </div>
      </div>

      <div className="flex items-center justify-between absolute left-4 right-4 -bottom-1/2 group-hover:bottom-4 transition-all duration-200 bg-white">
        <Button
          onClick={e => {
            e.stopPropagation();
          }}
          className="text-primary"
        >
          <CiShoppingCart size={24} />
          <span>Add to cart</span>
        </Button>
        <CiHeart size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
