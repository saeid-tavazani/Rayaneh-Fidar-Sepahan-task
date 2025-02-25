import clsx from 'clsx';
import React from 'react';

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx('animate-pulse rounded-md bg-gray-90', className)} {...props} />;
};

export default Skeleton;
