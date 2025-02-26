import { RiDiscountPercentFill } from 'react-icons/ri';

const DiscountSticker = ({ discount }: { discount: number | null }) => {
  if (discount)
    return (
      <span className="text-secondary text-base flex items-center gap-1.5">
        <RiDiscountPercentFill size={20} /> <span>-{discount}%</span>
      </span>
    );
};

export default DiscountSticker;
