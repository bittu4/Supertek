import { casement1, casement2 } from "../../assets/images";
import {
  BenefitsProduct,
  Faq,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  ServicesProduct,
} from "../../sections/";
import ProductVideo from "../../sections/ProductVideo";

const casement = {
  name: "CASEMENT",
  image1: casement1,
  image2: casement2,
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
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={casement} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={casement} />
            </div>
            <div className="padding-y mt-4">
              <ServicesProduct />
            </div>
            <section id="requestQuote" className="">
              <RequestQuote />
            </section>
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
