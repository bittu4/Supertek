import { tickOrangeIcon } from "../../assets/icons";
import { slidingDoor1, slidingDoor2 } from "../../assets/images";
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

const slidingDoor = {
  name: "SLIDING DOOR",
  image1: slidingDoor1,
  image2: slidingDoor2,
  description:
    "uPVC Sliding doors are a type of door that offer convenience, functionality, and aesthetic appeal. These doors are designed to slide horizontally along a track, allowing for smooth and effortless operation. uPVC Sliding doors are known for their energy efficiency, as they provide excellent insulation and help to minimize heat loss or gain. They often feature double or triple glazing, which further enhances their thermal performance. These doors also offer a good level of sound insulation, helping to reduce noise from the outside environment.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Designed to slide horizontally along a track",
  },
  {
    image: tickOrangeIcon,
    label: "Known for their energy efficiency",
  },
  {
    image: tickOrangeIcon,
    label: "Double or Triple glazing, enhance thermal performance",
  },
  {
    image: tickOrangeIcon,
    label: "Reduce noise from outside environment",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Space saving design",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for limited space",
  },
  {
    image: tickOrangeIcon,
    label: "Glide smoothly along tracks",
  },
  {
    image: tickOrangeIcon,
    label: "Easy to open and close with minimal effort",
  },
];

const SlidingDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={slidingDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={slidingDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={slidingDoor}
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

export default SlidingDoor;
