import ProductRating from '../../products/components/ProductRating';
import { ProductDetailsProps } from '../index';

const Details = ({ product }: ProductDetailsProps) => {
  return (
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
  );
};

export default Details;
