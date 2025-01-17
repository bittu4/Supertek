import { Link } from "react-router-dom";
import { footerContactInfo, footerLinks, socialMedia } from "../constants";
// import Subscribe from "./Subscribe";
import { accreditedCompanyTag, FooterLogo } from "../assets/images";

const Footer = () => {
  return (
    <section className="padding-x bg-[#272727] py-12">
      <div className="max-container max-lg:flex-col flex items-start gap-10 lg:flex-wrap">
        <div className="flex flex-col items-start flex-1">
          <img src={FooterLogo} alt="Footer Logo" width={160} height={42} />
          <p className="text-base leading-[31px] font-medium text-white mt-7 pr-8">
            Transform Your Home Today - Contact Us for a Free Consultation!
          </p>
          <div className="mt-12 flex items-center gap-3">
            {socialMedia.map((link) => (
              <Link
                className="bg-[#F7FBFF] w-[51px] h-[51px] flex items-center justify-center rounded-full"
                key={link.alt}
                to={link?.href}
                target="_blank"
              >
                <img
                  src={link.src}
                  alt={link.alt}
                  width={20}
                  height={20}
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
        <div className="flex-1 self-center">
          <img className="rounded-[20px]" src={accreditedCompanyTag} />
        </div>
      </div>
      <hr className="mt-10 mb-4 opacity-40" />
      <div className="max-container text-white/[0.7]">
        Copyright © SuperTek Windows 2024, All right reserved.
      </div>
    </section>
  );
};

export default Footer;
