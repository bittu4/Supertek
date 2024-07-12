import { tickOrangeIcon } from "../../assets/icons";
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
    "uPVC Tilt and Slide doors are a type of sliding door system that combines the functionality of a sliding door with the added feature of a tilt function. The tilt and slide mechanism allows the door panel to be tilted inwards from the top for ventilation purposes, similar to a tilt and turn window. Additionally, the door panel can slide horizontally along a track, providing a wide opening for easy access and allowing for maximum natural light and views.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Combines features of Sliding door and tilt function",
  },
  {
    image: tickOrangeIcon,
    label: "Allows the door to be tilted inwards from top",
  },
  {
    image: tickOrangeIcon,
    label: "Door panel can slide horizontally along track",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for ventilation purposes",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Known for its Dual functionality, tilt & slide",
  },
  {
    image: tickOrangeIcon,
    label: "Doors are ideal for areas with limited spaces",
  },
  {
    image: tickOrangeIcon,
    label: "Sliding mechanism allows them to open without encroaching areas",
  },
  {
    image: tickOrangeIcon,
    label: "Designed to operate smoothly and effortlessly",
  },
];

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
              <FeaturesProduct
                productDetails={tiltAndSlideDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={tiltAndSlideDoor}
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

export default TiltAndSlideDoor;
