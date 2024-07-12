import { tickOrangeIcon } from "../../assets/icons";
import { laundryComboDoor1, laundryComboDoor2 } from "../../assets/images";
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

const laundryComboDoor = {
  name: "LAUNDRY COMBO DOOR",
  image1: laundryComboDoor1,
  image2: laundryComboDoor2,
  description:
    "A Laundry Combo Door typically refers to a door that combines a regular door with a built-in laundry chute or other laundry-related features. This type of door is designed to provide convenience and efficiency in managing laundry tasks within a home or commercial setting.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Combines regular doors with built-in laundry chute or windows",
  },
  {
    image: tickOrangeIcon,
    label: "Provides convenience and efficiency",
  },
  {
    image: tickOrangeIcon,
    label: "Allows for controlled ventilation",
  },
  {
    image: tickOrangeIcon,
    label: "Provide security and safety and can use door itself for in and out",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Easy to clean and low maintenance",
  },
  {
    image: tickOrangeIcon,
    label: "Offers excellent insulation properties and energy efficiency",
  },
  {
    image: tickOrangeIcon,
    label: "Ideal for use in humid or coastal environment",
  },
  {
    image: tickOrangeIcon,
    label: "Noise reduction, Security and enhance overall look",
  },
];

const LaundryComboDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={laundryComboDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={laundryComboDoor}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={laundryComboDoor}
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

export default LaundryComboDoor;
