import clsx from 'clsx';
import React from 'react';

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx('animate-pulse rounded-md', className)} {...props} />;
};

export default Skeleton;
