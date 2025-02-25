import clsx from 'clsx';
import { FaStar } from 'react-icons/fa';

const ProductRating = ({ className }: { className?: string }) => {
  const randomRating = (Math.random() * 6).toFixed(1);
  return (
    <div className={clsx('text-base font-medium gap-0.5 flex items-center', className)}>
      <FaStar size={24} /> <span>{randomRating}</span>
    </div>
  );
};

export default ProductRating;
