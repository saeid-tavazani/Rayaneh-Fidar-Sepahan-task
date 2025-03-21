import { CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { useCartContext } from '../../context/CartContext';
import MobileNavbar from './MobileNavbar';
import NavItem from './NavItem';
import Search from './Search';

const NAV_ITEMS = [
  { text: 'Home', slug: '/' },
  { text: 'Products', slug: '/products' },
  { text: 'Blog', slug: '/blog' },
  { text: 'FAQ', slug: '/faq' },
  { text: 'Contact Us', slug: '/contact-us' },
];

const Navbar = () => {
  const { cartItems } = useCartContext();

  return (
    <header className="w-full flex flex-col">
      <nav className="container mx-auto px-4 flex items-center justify-between h-[60px] md:h-[100px] gap-3">
        <MobileNavbar items={NAV_ITEMS} />

        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(({ slug, text }) => (
            <NavItem slug={slug} text={text} key={slug} />
          ))}
        </ul>

        <h1 className="block md:hidden text-base font-medium text-primary-400 text-nowrap">Tech Heim</h1>

        <div className="flex items-center gap-2.5">
          <CiSearch className="hidden md:block" size={24} />
          <div className="relative">
            <CiShoppingBasket size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -bottom-1 -right-1 bg-primary-200 rounded-full size-4 text-white flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
          <CiUser size={24} />
        </div>
      </nav>
      <Search />
    </header>
  );
};

export default Navbar;
