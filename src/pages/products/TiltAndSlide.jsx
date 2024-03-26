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
    "uPVC Tilt & Slide windows are a type of window design that combines the functionality of both tilt and slide mechanisms.",
};

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
              <FeaturesProduct productDetails={tiltAndSlide} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={tiltAndSlide} />
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
