import { tickOrangeIcon } from "../../assets/icons";
import { awning1, awning2 } from "../../assets/images";
import {
  BenefitsProduct,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  ServicesProduct,
} from "../../sections/";
import ColorChart from "../../sections/ColorChart";
import ProductVideo from "../../sections/ProductVideo";

const awning = {
  name: "AWNING",
  image1: awning1,
  image2: awning2,
  description:
    "uPVC Awning Windows are a popular window style that offers both functionality and aesthetic appeal. These windows are hinged at the top and open outward from the bottom, creating an awning-like effect. They are typically operated using a crank mechanism, allowing for easy opening and closing.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "A compact and stylish scissor winder",
  },
  {
    image: tickOrangeIcon,
    label: "Opearate without touching insect screen",
  },
  {
    image: tickOrangeIcon,
    label: "Top-Hinged design",
  },
  {
    image: tickOrangeIcon,
    label: "fully opeaarable with flyscreens and 90 deg opening",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Excellent ventilation even during light rain",
  },
  {
    image: tickOrangeIcon,
    label: "Outward design prevents water entering the interior",
  },
  {
    image: tickOrangeIcon,
    label: "Using a Crank mechanism",
  },
  {
    image: tickOrangeIcon,
    label: "Easy opening and closing of window",
  },
];

const Awning = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={awning} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={awning}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={awning}
                productBenefits={BenefitProduct}
              />
            </div>
            <div className="padding-y mt-4">
              <ServicesProduct />
            </div>
            <section id="requestQuote" className="">
              <RequestQuote />
            </section>
            <div className="padding-y mb-12">
              {/* <Faq /> */}
              <ColorChart />
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

export default Awning;
