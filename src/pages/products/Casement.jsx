import { tickOrangeIcon } from "../../assets/icons";
import { casement1, casement2 } from "../../assets/images";
import {
  BenefitsProduct,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  Services,
} from "../../sections/";
import ColorChart from "../../sections/ColorChart";
import ProductVideo from "../../sections/ProductVideo";

const casement = {
  name: "CASEMENT",
  image1: casement1,
  image2: casement2,
  description:
    "uPVC Casement Windows are a popular and versatile window style commonly used in residential and commercial buildings. These windows are hinged on the side and open outward like a door, providing maximum ventilation and easy access for cleaning and maintenance.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Popular and versatile style known",
  },
  {
    image: tickOrangeIcon,
    label: "Known for their tight seal when closed",
  },
  {
    image: tickOrangeIcon,
    label: "Hinged on one side and open outward from the other side",
  },
  {
    image: tickOrangeIcon,
    label: "Maximum ventilation and easy operation",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Comes in variety of sizes and configuration",
  },
  {
    image: tickOrangeIcon,
    label: "Single or Double casement windows",
  },
  {
    image: tickOrangeIcon,
    label: "Allow for maximum airflow into room",
  },
  {
    image: tickOrangeIcon,
    label: "Combined with fixed or awning windows",
  },
];

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
              <FeaturesProduct
                productDetails={casement}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={casement}
                productBenefits={BenefitProduct}
              />
            </div>
            <div id="about" className="padding-y mt-4">
              <Services />
            </div>
            <section id="contact" className="">
              <RequestQuote />
            </section>
            <div className="padding-y mb-12">
              <ColorChart />
            </div>
          </div>
          <div id="products" className="max-lg:hidden lg:w-1/5">
            <OtherProducts />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Casement;
