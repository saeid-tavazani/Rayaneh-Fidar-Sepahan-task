import { CiTrash } from 'react-icons/ci';
import Button from '../../../components/Button';
import { useCartContext } from '../../../context/CartContext';
import { ProductDetailsProps } from '../index';
import DiscountSticker from './DiscountSticker';

const PurchaseManager = ({ product }: ProductDetailsProps) => {
  const { addProductToCart, removeProductFromCart, cartItems } = useCartContext();
  const isInCart = product ? cartItems.some(item => item.id === product.id) : false;
  return (
    <div className="col-span-1 hidden lg:block shadow-md rounded-lg p-6 h-fit">
      <div className="flex items-center justify-between font-medium">
        <span className="text-xl">$ {product.price}</span>
        <DiscountSticker discount={product.discount} />
      </div>

      <Button className="justify-center w-full mb-2 mt-4" variant="primary">
        Buy Now
      </Button>

      {isInCart ? (
        <Button onClick={() => removeProductFromCart(product.id)} variant="error" className="justify-center w-full">
          <CiTrash size={24} /> Remove
        </Button>
      ) : (
        <Button className="justify-center w-full" variant="outline" onClick={() => addProductToCart(product.id)}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default PurchaseManager;
