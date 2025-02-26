import clsx from 'clsx';

const ColorList = () => {
  const COLORS = ['bg-secondary', 'bg-primary', 'bg-black', 'bg-error', 'bg-success', 'bg-white'];
  const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
  return (
    <div className="flex flex-col gap-2 absolute right-4 top-1/4">
      {[...Array(3)].map((_, index) => (
        <span key={index} className={clsx('size-3 border border-black rounded-full', getRandomColor())}></span>
      ))}
      <span>+</span>
    </div>
  );
};
export default ColorList;
