import { slidingWindow1, slidingWindow2 } from "../../assets/images";
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

const slidingWindows = {
  name: "SLIDING WINDOWS",
  image1: slidingWindow1,
  image2: slidingWindow2,
  description:
    "uPVC Sliding Windows are a type of window design that offers smooth and effortless operation. These windows consist of two or more horizontal sashes that slide horizontally along a track. They are operated by sliding one sash behind the other to open or close the window.",
};

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
              <FeaturesProduct productDetails={slidingWindows} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={slidingWindows} />
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

export default SlidingWindows;
