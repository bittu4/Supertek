import { tickOrangeIcon } from "../../assets/icons";
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
    "PVC Double Glazed Lift and Slide doors are a type of door system that offers enhanced insulation, security, and ease of use. The tilt function allows the window sash to tilt inwards from the top, providing ventilation while maintaining security. This is particularly useful when you want to let fresh air in without fully opening the window or when you need to clean the exterior glass from inside your home.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Offer smooth and effortless powerslide mechanism",
  },
  {
    image: tickOrangeIcon,
    label: "Door panel is slightly raised off track when handle is lifted",
  },
  {
    image: tickOrangeIcon,
    label: "Enhancing both insulation and security",
  },
  {
    image: tickOrangeIcon,
    label: "Provides secure seal when door is closed",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Known for it's smooth operations",
  },
  {
    image: tickOrangeIcon,
    label: "Easy operation, for even up to 8m long 90kg per panel",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for areas with limited space",
  },
  {
    image: tickOrangeIcon,
    label: "Maximize floor space indoors and outdoors",
  },
];

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
              <FeaturesProduct
                productDetails={liftAndSlideDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={liftAndSlideDoor}
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

export default LiftAndSlideDoor;
