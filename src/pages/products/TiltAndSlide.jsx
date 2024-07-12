import { tickOrangeIcon } from "../../assets/icons";
import { tiltAndSlide1, tiltAndSlide2 } from "../../assets/images";
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

const tiltAndSlide = {
  name: "TILT & SLIDE",
  image1: tiltAndSlide1,
  image2: tiltAndSlide2,
  description:
    "uPVC Tilt & Slide windows are a type of window design that combines the functionality of both tilt and slide mechanisms. The tilt function allows the window sash to tilt inwards from the top, providing ventilation while maintaining security. This is particularly useful when you want to let fresh air in without fully opening the window or when you need to clean the exterior glass from inside your home.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Dual functionality - Tilt & Slide",
  },
  {
    image: tickOrangeIcon,
    label: "Tilt inwards from top without fully opening",
  },
  {
    image: tickOrangeIcon,
    label: "Also slide horizontally for full opening",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for ventilation control",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Comes with safety features",
  },
  {
    image: tickOrangeIcon,
    label: "Designed for Easy to use",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for areas where space is limited",
  },
  {
    image: tickOrangeIcon,
    label: "Easy maintenance and cleaning",
  },
];

const TiltAndSlide = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={tiltAndSlide} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={tiltAndSlide}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={tiltAndSlide}
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

export default TiltAndSlide;
