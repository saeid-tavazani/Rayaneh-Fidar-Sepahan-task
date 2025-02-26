import { CiHeart, CiShoppingCart, CiTrash } from 'react-icons/ci';
import { useNavigate } from 'react-router';
import Button from '../../../components/Button';
import { useCartContext } from '../../../context/CartContext';
import { ProductType } from '../index';
import ColorList from './ColorList';
import DiscountManagement from './DiscountManagement';
import Image from './Image';

const Card = ({ color, discount, id, model, price, title }: ProductType) => {
  const navigate = useNavigate();
  const { addProductToCart, cartItems, removeProductFromCart } = useCartContext();
  const isInCart = cartItems.some(item => item.id === id);

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="col-span-1 shadow-sm rounded-lg p-4 flex flex-col gap-4 relative hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      {discount && (
        <div className="absolute bg-secondary-100 text-secondary-400 left-0 top-1 px-1.5 py-1 z-10 rounded-r-lg">-{discount}%</div>
      )}

      <Image alt={model} />

      {color && <ColorList />}

      <div className="w-full h-[1px] bg-gradient-to-r from-[#4444441A] via-[#101010B2] to-[#4444441A]" />
      <p className="whitespace-nowrap overflow-hidden w-full text-ellipsis text-sm md:text-base font-light">{title}</p>

      <DiscountManagement discount={discount || 0} price={price} />

      <div className="flex items-center justify-between absolute left-4 right-4 -bottom-1/2 group-hover:bottom-4 transition-all duration-200 bg-white">
        <Button
          onClick={e => {
            e.stopPropagation();
            isInCart ? removeProductFromCart(id) : addProductToCart(id);
          }}
          variant={isInCart ? 'error' : 'outline'}
        >
          {isInCart ? (
            <CiTrash size={24} />
          ) : (
            <>
              <CiShoppingCart size={24} />
              <span>Add to cart</span>
            </>
          )}
        </Button>

        <CiHeart size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
