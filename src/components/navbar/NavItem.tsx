import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router';
type PropType = {
  slug: string;
  text: string;
};

const NavItem = ({ slug, text }: PropType) => {
  const { pathname } = useLocation();

  return (
    <li className="text-lg font-light *:transition-all *:duration-200 flex flex-col" key={slug}>
      <NavLink className={({ isActive }) => (isActive ? 'text-primary p-2' : 'p-2')} to={slug}>
        {text}
      </NavLink>
      {pathname == slug && <motion.span layoutId="activeNavbarItem" className="w-full h-0.5 p-0 bg-primary rounded-full" />}
    </li>
  );
};

export default NavItem;
