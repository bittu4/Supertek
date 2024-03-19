import { liftAndSlideDoor1, liftAndSlideDoor2 } from "../../assets/images";
import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const liftAndSlideDoor = {
  name: "LIFT AND SLIDE DOOR",
  image1: liftAndSlideDoor1,
  image2: liftAndSlideDoor2,
  description:
    "PVC Double Glazed Lift and Slide doors are a type of door system that offers enhanced insulation, security, and ease of use.\\\\ The 'lift and slide' mechanism allows for smooth and effortless operation of the door. When the handle is lifted, the door panel is slightly raised off the track, enabling it to slide open or closed with minimal effort. This mechanism also provides a secure seal when the door is closed, enhancing both insulation and security.\\\\ uPVC Double Glazed Lift and Slide doors are available in various sizes, styles, and finishes to suit different architectural designs and personal preferences. They are a popular choice for homeowners seeking a combination of functionality, energy efficiency, and aesthetic appeal in their doors.",
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
              <Features productDetails={liftAndSlideDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <Benefits productDetails={liftAndSlideDoor} />
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

export default LiftAndSlideDoor;
