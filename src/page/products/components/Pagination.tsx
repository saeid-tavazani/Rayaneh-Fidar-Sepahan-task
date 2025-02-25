import clsx from 'clsx';
import { FaArrowRightLong } from 'react-icons/fa6';

type Props = {
  page: number;
  totalPages: number;
  handlePage: (page: number) => void;
};

const Pagination = ({ page, totalPages, handlePage }: Props) => {
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (page <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (page >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center col-span-8 gap-2">
      {page > 1 && (
        <FaArrowRightLong className="cursor-pointer rotate-180" onClick={() => handlePage(page - 1)} size={24} aria-label="Previous page" />
      )}

      {visiblePages.map(item => (
        <button
          className={clsx(
            'size-[45px] flex items-center justify-center cursor-pointer transition-all hover:text-primary',
            page === item ? 'border-b text-primary' : '',
          )}
          onClick={() => handlePage(item as number)}
          key={item}
          aria-label={`Go to page ${item}`}
          aria-current={page === item ? 'page' : undefined}
        >
          {item}
        </button>
      ))}

      {page < totalPages && (
        <FaArrowRightLong className="cursor-pointer" onClick={() => handlePage(page + 1)} size={24} aria-label="Next page" />
      )}
    </div>
  );
};

export default Pagination;
