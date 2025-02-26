import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const Image = ({ alt }: { alt: string }) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <img src="../imag.png" alt={alt} className="size-full object-cover" />
    </AspectRatio>
  );
};

export default Image;
