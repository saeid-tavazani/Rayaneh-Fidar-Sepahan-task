import clsx from 'clsx';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={clsx('text-sm md:text-base flex items-center gap-2 rounded-lg border-2 px-1 py-2 md:px-4 cursor-pointer', className)}
      {...props}
    />
  );
};

export default Button;
