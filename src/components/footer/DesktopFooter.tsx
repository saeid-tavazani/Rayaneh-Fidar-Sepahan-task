import { IconType } from 'react-icons';
import { Link } from 'react-router';

type LinkType = { text: string; slug: string };

export type PropsType = {
  footerLinks: { title: string; links: LinkType[] }[];
  contactInfo: { text: string; href: string; icon: IconType }[];
};

const DesktopFooter = ({ footerLinks, contactInfo }: PropsType) => {
  return (
    <>
      {footerLinks.map((section, idx) => (
        <ul key={idx} className="flex flex-col gap-2">
          <span className="font-medium text-white">{section.title}</span>
          {section.links.map((link, index) => (
            <li key={index}>
              <Link to={link.slug}>{link.text}</Link>
            </li>
          ))}
        </ul>
      ))}
      <ul className="flex flex-col gap-2">
        <span className="font-medium text-white">Contact Us</span>
        {contactInfo.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <item.icon size={20} />
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DesktopFooter;
