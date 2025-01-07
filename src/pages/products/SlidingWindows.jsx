import { tickOrangeIcon } from "../../assets/icons";
import { slidingWindow1, slidingWindow2 } from "../../assets/images";
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

const slidingWindows = {
  name: "SLIDING WINDOWS",
  image1: slidingWindow1,
  image2: slidingWindow2,
  description:
    "uPVC Sliding Windows are a type of window design that offers smooth and effortless operation. These windows consist of two or more horizontal sashes that slide horizontally along a track. They are operated by sliding one sash behind the other to open or close the window.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Smooth and effortleass operation",
  },
  {
    image: tickOrangeIcon,
    label: "Operate by sliding horizontally along a track",
  },
  {
    image: tickOrangeIcon,
    label: "One or both sashes sliding open",
  },
  {
    image: tickOrangeIcon,
    label: "Operated by sliding one sash behind other",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Space saving design",
  },
  {
    image: tickOrangeIcon,
    label: "Sleek and Modern appearance",
  },
  {
    image: tickOrangeIcon,
    label: "Suitable for limited space or obstruction",
  },
  {
    image: tickOrangeIcon,
    label: "Unobstructed views when fully opened",
  },
];

const SlidingWindows = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={slidingWindows} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={slidingWindows}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={slidingWindows}
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

export default SlidingWindows;
