import { Link } from "react-router-dom";
import { footerContactInfo, footerLinks, socialMedia } from "../constants";
import Subscribe from "./Subscribe";
import { FooterLogo } from "../assets/images";

const Footer = () => {
  return (
    <section className="padding-x bg-[#272727] py-12">
      <div className="max-container max-lg:flex-col flex items-start gap-10 lg:flex-wrap">
        <div className="flex flex-col items-start flex-1">
          <img src={FooterLogo} alt="Footer Logo" width={160} height={42} />
          <p className="text-base leading-[31px] font-medium text-white mt-7 pr-8">
            The uPVC double-glazed windows and doors from Supterk Windows shield
            you and your family from Australia&apos;s sweltering summers and chilly
            winters. This is better to invest in thermally efficient systems, as
            energy costs skyrocket.
          </p>
          <div className="mt-12 flex items-center gap-3">
            {socialMedia.map((link) => (
              <Link key={link.alt} to={""}>
                <img
                  src={link.src}
                  alt={link.alt}
                  width={51}
                  height={51}
                  className="object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start max-lg:w-full w-[15%]">
          <h4 className="text-white text-xl font-bold mb-10">Quick Links</h4>
          {footerLinks.map((link) => (
            <a
              key={link.name}
              className="text-base text-white font-normal py-2"
              href={link.to}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start flex-1">
          <h4 className="text-white text-xl font-bold mb-10">Contact Info</h4>
          {footerContactInfo.map((link) => (
            <div key={link.name} className="flex content-center mb-4">
              <img className="pr-3" src={link.icon} />
              <p
                key={link.name}
                className="text-base text-white font-normal py-2"
                to={link.to}
              >
                {link.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl max-sm:text-2xl text-white font-bold leading-none mb-12">
            Subscribe to Newsletter
          </h3>
          <Subscribe />
        </div>
      </div>
    </section>
  );
};

export default Footer;
