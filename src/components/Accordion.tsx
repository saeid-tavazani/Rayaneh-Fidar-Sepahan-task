import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

type Props = {
  children: ReactNode;
  className?: string;
};

const AccordionHeaderItem = ({ children, className }: Props) => {
  return (
    <AccordionHeader>
      <AccordionTrigger className={clsx('group flex w-full cursor-pointer items-center justify-between', className)}>
        {children}
        <FaAngleDown
          className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </AccordionTrigger>
    </AccordionHeader>
  );
};

export { Accordion, AccordionContent, AccordionHeaderItem, AccordionItem };
