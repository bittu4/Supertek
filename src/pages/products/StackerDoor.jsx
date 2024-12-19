import { tickOrangeIcon } from "../../assets/icons";
import { stackerDoor1, stackerDoor2 } from "../../assets/images";
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

const stackerDoor = {
  name: "STACKER DOOR",
  image1: stackerDoor1,
  image2: stackerDoor2,
  description:
    "uPVC Stacker Doors are a type of sliding door system that is commonly used in residential and commercial buildings. The unique feature of uPVC Stacker Doors is their ability to stack multiple panels behind each other when opened, creating a wide opening and maximizing the available space. This stacking mechanism allows for a seamless transition between indoor and outdoor areas, making them ideal for connecting living spaces to patios, decks, or gardens.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Ability to stack multiple panels behind each others",
  },
  {
    image: tickOrangeIcon,
    label: "Wide opening and maximizing available space",
  },
  {
    image: tickOrangeIcon,
    label: "Seamless transition between in and out areas",
  },
  {
    image: tickOrangeIcon,
    label: "Known for Space saving design",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Provide seamless indoor-outdoor flow",
  },
  {
    image: tickOrangeIcon,
    label: "Allowing for easy access to decks, gardens, etc.",
  },
  {
    image: tickOrangeIcon,
    label: "Suitable for variuos architechtural styles",
  },
  {
    image: tickOrangeIcon,
    label: "Corner openings and large span",
  },
];

const StackerDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={stackerDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={stackerDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={stackerDoor}
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

export default StackerDoor;
