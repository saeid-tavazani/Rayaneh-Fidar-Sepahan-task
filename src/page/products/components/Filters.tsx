import { useQuery } from '@tanstack/react-query';
import { Accordion, AccordionContent, AccordionHeaderItem, AccordionItem } from '../../../components/Accordion';
import Skeleton from '../../../components/skeleton';
import { getData, ResTypes } from '../../../service/apiClient';

interface CategoryResponse extends ResTypes {
  categories: string[];
}

const Filters = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['category'], queryFn: () => getData<CategoryResponse>('/category') });

  if (error) return <p>{error.message}</p>;

  return (
    <section className="col-span-2 grid gap-2.5">
      <div className="w-full flex items-center justify-between">
        <span className="text-xl font-medium">Filters</span>
        <span className="text-base font-normal text-primary">Clear all</span>
      </div>
      {isLoading && (
        <div className="flex flex-col gap-3 mt-6 *:w-full *:h-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
      {data?.categories && (
        <Accordion type="single" collapsible defaultValue="category">
          <AccordionItem value="category" className="text-xl font-light">
            <AccordionHeaderItem className="mb-2.5">Category</AccordionHeaderItem>
            <AccordionContent className="flex flex-col gap-2.5">
              {data.categories.map(item => (
                <label key={item} className="flex items-center gap-2.5 cursor-pointer">
                  <input className="size-5 rounded-sm" name="category" type="checkbox" />
                  {item}
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </section>
  );
};

export default Filters;
