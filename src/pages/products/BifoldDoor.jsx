import { tickOrangeIcon } from "../../assets/icons";
import { bifoldDoor1, bifoldDoor2 } from "../../assets/images";
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

const bifoldDoor = {
  name: "BIFOLD DOOR",
  image1: bifoldDoor1,
  image2: bifoldDoor2,
  description:
    "uPVC Bifold doors are a popular choice for homeowners who want to enhance the aesthetics and functionality of their living spaces. These doors are made from uPVC, which stands for unplasticized polyvinyl chloride, a durable and low-maintenance material. With their sleek and modern design, uPVC Bifold doors can seamlessly connect indoor and outdoor areas, creating a sense of openness and maximizing natural light.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Enhances the aesthetics and functionality of living spaces",
  },
  {
    image: tickOrangeIcon,
    label: "Doors can seamlessly connect indoor and outdoor",
  },
  {
    image: tickOrangeIcon,
    label: "Create sense of openness and maximizing natural light",
  },
  {
    image: tickOrangeIcon,
    label: "Maximize space utilization and doors optimization",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Suitable for various architectural designs",
  },
  {
    image: tickOrangeIcon,
    label: "Designed to operate smoothly and effortlessly",
  },
  {
    image: tickOrangeIcon,
    label: "Ability to create wide opening, allowing for unobstructed views",
  },
  {
    image: tickOrangeIcon,
    label: "Beneficial for areas with limited space",
  },
];

const BifoldDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={bifoldDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={bifoldDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={bifoldDoor}
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

export default BifoldDoor;
