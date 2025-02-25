import { Link } from 'react-router';
import { Accordion, AccordionContent, AccordionHeaderItem, AccordionItem } from '../../components/Accordion';
import { PropsType } from './DesktopFooter';

const MobileFooter = ({ contactInfo, footerLinks }: PropsType) => {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {footerLinks.map((section, idx) => (
        <AccordionItem value={section.title}>
          <AccordionHeaderItem className="mb-2 font-medium text-white w-full">{section.title}</AccordionHeaderItem>
          <AccordionContent>
            <ul key={idx} className="flex flex-col gap-2">
              {section.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.slug}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}

      <AccordionItem value="Contact">
        <AccordionHeaderItem className="mb-2 font-medium text-white">Contact Us</AccordionHeaderItem>
        <AccordionContent>
          <ul className="flex flex-col gap-2">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <item.icon size={20} />
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileFooter;
