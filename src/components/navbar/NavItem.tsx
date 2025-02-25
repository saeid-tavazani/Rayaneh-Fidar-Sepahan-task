import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router';
type PropType = {
  slug: string;
  text: string;
  onClick?: () => void;
};

const NavItem = ({ slug, text, onClick }: PropType) => {
  const { pathname } = useLocation();
  const activeLink = pathname === slug;
  return (
    <motion.li onClick={onClick} className="text-lg font-light flex flex-col" key={slug}>
      <NavLink className={({ isActive }) => (isActive ? 'text-primary p-2' : 'p-2 transition-all duration-200')} to={slug}>
        {text}
      </NavLink>
      {activeLink && <motion.span layoutId="activeNavbarItem" className="w-full h-0.5 p-0 bg-primary rounded-full" />}
    </motion.li>
  );
};

export default NavItem;
