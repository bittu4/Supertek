import { tiltAndSlideDoor1, tiltAndSlideDoor2 } from "../../assets/images";
import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const tiltAndSlideDoor = {
  name: "TILT AND SLIDE DOOR",
  image1: tiltAndSlideDoor1,
  image2: tiltAndSlideDoor2,
  description:
    "uPVC Tilt and Slide doors are a type of sliding door system that combines the functionality of a sliding door with the added feature of a tilt function.\\\\ The tilt and slide mechanism allows the door panel to be tilted inwards from the top for ventilation purposes, similar to a tilt and turn window. Additionally, the door panel can slide horizontally along a track, providing a wide opening for easy access and allowing for maximum natural light and views.\\\\ The tilt function of uPVC Tilt and Slide doors is particularly useful for controlled ventilation, as it allows fresh air to enter while maintaining security and privacy. The sliding function offers convenience and flexibility, making these doors suitable for various applications, such as connecting indoor and outdoor spaces or separating different areas within a building.\\\\ uPVC Tilt and Slide doors are available in different sizes, styles, and finishes to suit various architectural designs and personal preferences. They are known for their energy efficiency, as they provide excellent insulation and can help reduce heating and cooling costs. Overall, uPVC Tilt and Slide doors offer a versatile and practical solution for both residential and commercial buildings.",
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
              <Features productDetails={tiltAndSlideDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <Benefits productDetails={tiltAndSlideDoor} />
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

export default TiltAndSlideDoor;
