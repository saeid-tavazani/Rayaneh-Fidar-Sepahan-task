import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import NavItem from './NavItem';

type Prop = {
  text: string;
  slug: string;
};
const MobileNavbar = ({ items }: { items: Prop[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="md:hidden">
      <button ref={menuButtonRef} onClick={() => setIsMenuOpen(prev => !prev)}>
        <IoIosMenu className="cursor-pointer relative z-40" size={24} />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            ref={navRef}
            initial={{ y: -40, scaleY: 0.7, opacity: 0.7 }}
            exit={{ y: -100, scaleY: 0.9, opacity: 0 }}
            animate={{ y: 0, scaleY: 1, opacity: 1 }}
            className="fixed inset-x-0 top-14 w-screen h-fit flex flex-col items-center justify-center bg-white z-30"
          >
            {items.map(({ slug, text }) => (
              <NavItem onClick={() => setIsMenuOpen(false)} slug={slug} text={text} key={slug} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
