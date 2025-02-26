import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: 'error' | 'primary' | 'outline';
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  error: 'text-error',
  primary: 'bg-primary text-white',
  outline: 'text-primary',
};

const Button: React.FC<ButtonProps> = ({ className, variant = 'outline', ...props }) => {
  return (
    <button
      className={clsx(
        'text-sm md:text-base flex items-center gap-2 rounded-lg border-2 px-1 py-2 md:px-4 cursor-pointer',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
};

export default Button;
