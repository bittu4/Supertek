import { tiltAndSlideDoor1, tiltAndSlideDoor2 } from "../../assets/images";
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

const tiltAndSlideDoor = {
  name: "TILT AND SLIDE DOOR",
  image1: tiltAndSlideDoor1,
  image2: tiltAndSlideDoor2,
  description:
    "uPVC Tilt and Slide doors are a type of sliding door system that combines the functionality of a sliding door with the added feature of a tilt function.",
};

const TiltAndSlideDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={tiltAndSlideDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={tiltAndSlideDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={tiltAndSlideDoor} />
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

export default TiltAndSlideDoor;
