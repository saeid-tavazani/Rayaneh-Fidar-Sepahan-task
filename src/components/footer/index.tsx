import { CiLocationOn, CiMail } from 'react-icons/ci';
import { LuCopyright } from 'react-icons/lu';
import { PiPhoneCallLight } from 'react-icons/pi';
import { Link } from 'react-router';
import useWindowResize from '../../hook/useWindowResize';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', slug: '/about-us' },
      { text: 'Blog', slug: '/blog' },
      { text: 'Returns', slug: '/returns' },
      { text: 'Order Status', slug: '/order/status' },
    ],
  },
  {
    title: 'Info',
    links: [
      { text: 'How it works?', slug: '/faq' },
      { text: 'Our Promises', slug: '/about-us' },
      { text: 'FAQ', slug: '/faq' },
    ],
  },
];

const contactInfo = [
  { text: '123 Main Street, Anytown, USA', href: 'https://maps.app.goo.gl/ZgGqowX5QdbjFC9y8', icon: CiLocationOn },
  { text: '+1 (555) 123-4567', href: 'tel:15551234567', icon: PiPhoneCallLight },
  { text: 'TechHeimSupport@gmail.com', href: 'mailto:TechHeimSupport@gmail.com', icon: CiMail },
];

const Footer = () => {
  const { isSm, isMd } = useWindowResize();

  return (
    <footer className="w-full bg-primary-900 flex flex-col items-center overflow-hidden relative mt-14">
      <section className="container mx-auto px-4 flex flex-wrap gap-12 text-base text-gray-40 font-light py-9 md:pt-9 md:pb-20">
        {isMd || isSm ? (
          <MobileFooter contactInfo={contactInfo} footerLinks={footerLinks} />
        ) : (
          <DesktopFooter contactInfo={contactInfo} footerLinks={footerLinks} />
        )}
      </section>

      <div className="bg-primary-400 opacity-70 w-3/4 h-[130px] sm:h-[360px] md:w-[803px] rounded-[100%] blur-[200px] absolute z-0 top-2/3" />

      <section className="w-full text-xs font-medium text-gray-40 bg-primary-900 relative z-10">
        <div className="container mx-auto px-4 flex justify-center md:justify-between h-14 items-center">
          <span className="flex items-center gap-2">
            <LuCopyright size={24} />
            2023 Tech Heim.
          </span>
          <div className="hidden md:flex items-center gap-12">
            {['Cookie Settings', 'Privacy Policy', 'Terms and Conditions', 'Imprint'].map((text, index) => (
              <Link key={index} to="/">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
