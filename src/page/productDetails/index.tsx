import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useQuery } from '@tanstack/react-query';
import { CiHeart, CiTrash } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { useParams } from 'react-router';
import Button from '../../components/Button';
import { useCartContext } from '../../context/CartContext';
import { getData, ResTypes } from '../../service/apiClient';
import { ProductType } from '../products';
import ProductRating from '../products/components/ProductRating';

interface Product extends ResTypes {
  product: ProductType;
}

const ProductDetails = () => {
  const { id } = useParams();
  const { cartItems, addProductToCart, removeProductFromCart } = useCartContext();

  const { data, error, isLoading } = useQuery({
    queryKey: ['ProductDetails', id],
    queryFn: () => getData<Product>(`/${id}`),
  });

  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!data?.product && !isLoading) return <p className="text-red-500">The entered path is incorrect.</p>;

  const product = data?.product;
  const isInCart = cartItems.some(item => item.id === product?.id);

  return (
    <article className="container px-4 mx-auto">
      {product && (
        <section className="grid grid-cols-5 gap-5 w-full mt-2.5">
          <div className="relative col-span-5 md:col-span-2 p-11 md:p-0">
            <div className="absolute flex md:flex-col gap-2.5 top-2 left-2">
              <CiHeart size={20} />
              <IoMdNotificationsOutline size={20} />
            </div>
            <AspectRatio ratio={16 / 9}>
              <img src="../imag.png" alt={product.title} className="size-full object-cover" />
            </AspectRatio>
          </div>

          <div className="col-span-5 md:col-span-3 lg:col-span-2">
            <h1 className="text-xl font-medium">{product.title}</h1>
            <ProductRating className="bg-primary-500 text-white rounded-sm px-[7px] py-[3px] w-fit mt-4 gap-1 mb-6" />
            <div className="w-full h-[1px] bg-gray-30 md:hidden mb-6" />
            <ul className="flex flex-col gap-2.5 text-sm font-medium px-2">
              {[
                ['Brand', product.brand],
                ['Model Name', product.model],
                ['Color', product.color],
              ].map(([label, value]) => (
                <li key={label} className="w-full flex items-center">
                  <span className="w-1/2 text-gray-70">{label}</span>
                  <span className="w-1/2">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 hidden lg:block shadow-md rounded-lg p-6 h-fit">
            <div className="flex items-center justify-between font-medium">
              <span className="text-xl">$ {product.price}</span>
              <span className="text-secondary text-base flex items-center gap-1.5">
                <RiDiscountPercentFill size={20} /> <span>-{product.discount}%</span>
              </span>
            </div>

            <Button className="justify-center w-full mb-2 mt-4 bg-primary text-white">Buy Now</Button>

            {isInCart ? (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  removeProductFromCart(product.id);
                }}
                className="text-error justify-center w-full"
              >
                <CiTrash size={24} /> Remove
              </Button>
            ) : (
              <Button className="justify-center w-full text-primary" onClick={() => addProductToCart(product.id)}>
                Add to cart
              </Button>
            )}
          </div>
        </section>
      )}
    </article>
  );
};

export default ProductDetails;
