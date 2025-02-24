import { CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { IoIosMenu } from 'react-icons/io';
import NavItem from './NavItem';
import Search from './Search';
const items = [
  {
    text: 'Home',
    slug: '/',
  },
  {
    text: 'Products',
    slug: '/products',
  },
  {
    text: 'Blog',
    slug: '/blog',
  },
  {
    text: 'FAQ',
    slug: '/faq',
  },
  {
    text: 'Contact Us',
    slug: '/contact-us',
  },
];

const Navbar = () => {
  return (
    <header className="w-full flex flex-col">
      <nav className="container mx-auto px-4 flex items-center justify-between h-[60px] md:h-[100px] gap-3">
        <div>
          <IoIosMenu className="md:hidden" size={24} />
        </div>
        <ul className="md:flex items-center gap-10 hidden">
          {items.map(({ slug, text }) => (
            <NavItem slug={slug} text={text} key={slug} />
          ))}
        </ul>
        <h1 className="block md:hidden text-base font-medium text-primary-400 text-nowrap">Tech Heim</h1>
        <div className="flex items-center gap-2.5">
          <CiSearch className="hidden md:block" size={24} />
          <div className="relative">
            <CiShoppingBasket size={24} />
            <span className="absolute -bottom-1 -right-1 bg-primary-200 rounded-full size-4 text-white flex items-center justify-center text-xs">
              5
            </span>
          </div>
          <CiUser size={24} />
        </div>
      </nav>
      <Search />
    </header>
  );
};

export default Navbar;
