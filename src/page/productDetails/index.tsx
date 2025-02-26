import { useQuery } from '@tanstack/react-query';
import { CiHeart } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useParams } from 'react-router';
import Button from '../../components/Button';
import Skeleton from '../../components/Skeleton';
import { getData } from '../../service/apiClient';
import { ProductType } from '../products';
import Image from '../products/components/Image';
import Details from './components/Details';
import DiscountSticker from './components/DiscountSticker';
import PurchaseManager from './components/PurchaseManager';

export interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery<ProductDetailsProps>({
    queryKey: ['ProductDetails', id],
    queryFn: () => getData<ProductDetailsProps>(`/${id}`),
  });

  if (error) return <p className="text-red-500">{error.message}</p>;

  if (!data?.product && !isLoading) throw new Error('The entered path is incorrect.');

  const product = data?.product;

  return (
    <article className="container px-4 mx-auto">
      {isLoading && <ProductSkeleton />}

      {product && (
        <>
          <section className="grid grid-cols-5 gap-5 w-full mt-2.5">
            <div className="relative col-span-5 md:col-span-2 p-11 md:p-0">
              <div className="absolute flex md:flex-col gap-2.5 top-2 left-2">
                <CiHeart size={20} />
                <IoMdNotificationsOutline size={20} />
              </div>
              <Image alt={product.model} />
            </div>

            <Details product={product} />

            <PurchaseManager product={product} />
          </section>

          <div className="flex lg:hidden items-center w-full justify-between mt-20">
            <Button variant="primary">Buy Now</Button>
            <div className="text-center">
              <DiscountSticker discount={product.discount} />
              <span className="text-xl font-medium">$ {product.price}</span>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

const ProductSkeleton = () => (
  <div className="flex flex-col gap-4">
    <Skeleton className="bg-gray-70 w-full md:w-1/2 h-60" />
    <Skeleton className="bg-gray-70 w-full h-4" />
    <Skeleton className="bg-gray-70 w-full h-4" />
    <Skeleton className="bg-gray-70 w-full h-4" />
    <Skeleton className="bg-gray-70 w-1/2 h-4" />
  </div>
);

export default ProductDetails;
