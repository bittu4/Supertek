import { partners } from "../constants";

const Partners = () => {
  return (
    <section className="max-container w-full flex items-center flex-col">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Our Partners
      </h3>
      <div className="padding-x grid grid-cols-5 justify-center max-sm:grid-cols-2 xl:gap-6 lg:gap-5 gap-4 mt-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="p-3 max-lg:p-3 flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <img
              src={partner.partner}
              className="object-contain max-h-[80px]"
              alt={partner.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
