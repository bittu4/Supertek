import { tickOrangeIcon } from "../../assets/icons";
import { frenchDoor1, frenchDoor2 } from "../../assets/images";
import {
  BenefitsProduct,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  ServicesProduct,
} from "../../sections/";
import ColorChart from "../../sections/ColorChart";
import ProductVideo from "../../sections/ProductVideo";

const frenchDoor = {
  name: "FRENCH DOOR",
  image1: frenchDoor1,
  image2: frenchDoor2,
  description:
    "uPVC French doors are a type of door design that combines elegance and functionality. These doors consist of two panels that open outward from the center, creating a wide opening and allowing for easy access and ventilation.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Design that combines elegance and functionality",
  },
  {
    image: tickOrangeIcon,
    label: "Allowing for easy access and ventilation",
  },
  {
    image: tickOrangeIcon,
    label: "Enhanve the overall look of space",
  },
  {
    image: tickOrangeIcon,
    label: "Seamless connection between in and out spaces",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Classic design with two door panels",
  },
  {
    image: tickOrangeIcon,
    label: "Designed for Easy to use",
  },
  {
    image: tickOrangeIcon,
    label: "Enabling enough natural light and air",
  },
  {
    image: tickOrangeIcon,
    label: "Unique soundproofing and dust-resistance",
  },
];

const FrenchDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={frenchDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={frenchDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={frenchDoor}
                productBenefits={BenefitProduct}
              />
            </div>
            <div id="about" className="padding-y mt-4">
              <ServicesProduct />
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

export default FrenchDoor;
