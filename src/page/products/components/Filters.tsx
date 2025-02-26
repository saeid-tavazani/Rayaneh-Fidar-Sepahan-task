import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useContext, useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import { Accordion, AccordionContent, AccordionHeaderItem, AccordionItem } from '../../../components/Accordion';
import Button from '../../../components/Button';
import Skeleton from '../../../components/Skeleton';
import useWindowResize from '../../../hook/useWindowResize';
import { getData, ResTypes } from '../../../service/apiClient';

interface CategoryResponse extends ResTypes {
  categories: string[];
}

type CartContextType = {
  categories: string[] | undefined;
  isLoading: boolean;
  handleCategory: (category: string | null) => void;
  category: string | null;
};

const CategoryContext = createContext<CartContextType | undefined>(undefined);

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext  must be used within a CategoryContext .Provider');
  }
  return context;
};

const Filters = ({ handleCategory, category }: { handleCategory: (value: string | null) => void; category: string | null }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: () => getData<CategoryResponse>('/category'),
  });
  const { isSm } = useWindowResize();

  if (error) return <p>{error.message}</p>;

  return (
    <CategoryContext.Provider
      value={{
        isLoading,
        categories: data?.categories,
        handleCategory,
        category,
      }}
    >
      <section className="col-span-8 md:col-span-2 grid gap-2.5">{isSm ? <MobileFilter /> : <Management />}</section>
    </CategoryContext.Provider>
  );
};

const MobileFilter = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="shadow-sm rounded-lg p-2 flex items-center gap-2 w-[108px] text-base font-light cursor-pointer transition-all hover:shadow-md"
      >
        <VscSettings size={16} /> Filters
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0.65, y: -20, opacity: 0.75 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.65, y: -20, opacity: 0.75 }}
            className="fixed inset-0 w-screen h-screen bg-white z-50"
          >
            <div className="container px-4 mx-auto mt-5">
              <Management />
              <Button onClick={() => setIsVisible(false)} variant="outline" className="mt-6 px-5">
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Management = () => {
  const { isLoading, handleCategory } = useCategoryContext();

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <span className="text-xl font-medium">Filters</span>
        <span className="text-base font-normal text-primary cursor-pointer" onClick={() => handleCategory(null)}>
          Clear all
        </span>
      </div>
      {isLoading ? <SkeletonLoader /> : <Category />}
    </>
  );
};

const SkeletonLoader = () => (
  <div className="flex flex-col gap-3 mt-6">
    {Array.from({ length: 5 }).map((_, index) => (
      <Skeleton key={index} className="w-full h-4 bg-gray-60" />
    ))}
  </div>
);

const Category = () => {
  const { handleCategory, categories, category } = useCategoryContext();

  return (
    <Accordion type="single" collapsible defaultValue="category">
      <AccordionItem value="category" className="text-xl font-light">
        <AccordionHeaderItem className="mb-2.5">Category</AccordionHeaderItem>
        <AccordionContent className="flex flex-col gap-2.5">
          {categories?.map(item => (
            <label key={item} className="flex items-center gap-2.5 cursor-pointer">
              <input
                onChange={e => {
                  if (e.currentTarget.checked) handleCategory(item);
                  else handleCategory(null);
                }}
                className="size-5 rounded-sm"
                name="category"
                type="checkbox"
                checked={category == item}
              />
              {item}
            </label>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
