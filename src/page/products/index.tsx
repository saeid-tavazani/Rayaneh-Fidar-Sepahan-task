import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Skeleton from '../../components/skeleton';
import { getData, ResTypes } from '../../service/apiClient';
import Card from './components/Card';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

export type ProductType = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string | null;
  category: string;
  discount: number | null;
};

interface Products extends ResTypes {
  products: ProductType[];
}

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getData<Products>('', { page, limit: 9 }),
  });

  if (error) return <p>{error.message}</p>;

  return (
    <article className="container px-4 mx-auto grid grid-cols-8 gap-7 items-start mt-2.5">
      <Filters />
      <section className="col-span-8 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} className="col-span-1 h-[347px] p-4 bg-gray-60 flex flex-col justify-between">
                <Skeleton className="bg-gray-50 w-full h-[200px]" />
                <Skeleton className="bg-gray-50 w-full h-4" />
                <Skeleton className="bg-gray-50 w-full h-4" />
                <Skeleton className="bg-gray-50 w-full h-4" />
                <Skeleton className="bg-gray-50 w-1/2 h-4" />
              </Skeleton>
            ))
          : data?.products.map(item => <Card key={item.id} {...item} />)}
      </section>
      <Pagination page={page} handlePage={setPage} totalPages={6} />
    </article>
  );
};

export default Products;
