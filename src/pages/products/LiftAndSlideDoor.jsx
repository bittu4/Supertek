import { liftAndSlideDoor1, liftAndSlideDoor2 } from "../../assets/images";
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

const liftAndSlideDoor = {
  name: "LIFT AND SLIDE DOOR",
  image1: liftAndSlideDoor1,
  image2: liftAndSlideDoor2,
  description:
    "PVC Double Glazed Lift and Slide doors are a type of door system that offers enhanced insulation, security, and ease of use.",
};

const LiftAndSlideDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={liftAndSlideDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={liftAndSlideDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={liftAndSlideDoor} />
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

export default LiftAndSlideDoor;
