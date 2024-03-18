import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const casement = {
  name: "CASEMENT",
  description:
    "uPVC Casement Windows are a popular and versatile window style commonly used in residential and commercial buildings. These windows are hinged on the side and open outward like a door, providing maximum ventilation and easy access for cleaning and maintenance\\\\ uPVC Casement Windows offer excellent insulation, helping to keep your home energy-efficient and comfortable.\\\\ These windows are available in various sizes, configurations, and designs to suit different architectural styles and personal preferences. They can be customized with features such as multiple panes, decorative grilles, and different glass options for enhanced aesthetics and functionality.\\\\ uPVC Casement Windows are known for their tight seal when closed, providing excellent sound insulation and protection against drafts and weather elements. They are also equipped with secure locking mechanisms for enhanced security.\\\\ Overall, uPVC Casement Windows are a popular choice due to their versatility, durability, energy efficiency, and aesthetic appeal. They can complement any style of building and provide a functional and visually pleasing window solution.",
};

const Casement = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={casement} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <Features />
            </div>
            <div className="padding-t md:mt-14">
              <Benefits />
            </div>
            <div className="padding-y mt-4">
              <Services />
            </div>
            <div className="">
              <RequestQuote />
            </div>
            <div className="padding-y mb-12">
              <Faq />
            </div>
          </div>
          <div className="max-lg:hidden lg:w-1/5">
            <OtherProducts />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Casement;
