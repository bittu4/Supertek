import { tickOrangeIcon } from "../../assets/icons";
import {
  tiltAndTurn1,
  tiltAndTurn2,
} from "../../assets/images";
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

const tiltAndTurn = {
  name: "TILT & TURN",
  image1: tiltAndTurn1,
  image2: tiltAndTurn2,
  description:
    "uPVC Tilt and Turn Windows are a type of window design that offers versatility and functionality. These windows have a unique mechanism that allows them to tilt inwards from the top for ventilation purposes, as well as open fully inwards like a door for easy cleaning and access. uPVC Tilt and Turn Windows are known for their energy efficiency, as they provide excellent insulation and can help reduce heating and cooling costs. They are also available in various styles and finishes to suit different architectural designs and personal preferences.",
};

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Dual functionality both tilt and turn",
  },
  {
    image: tickOrangeIcon,
    label: "Multi-locking point enhance security and peace",
  },
  {
    image: tickOrangeIcon,
    label: "Superior insulation with compression seals",
  },
  {
    image: tickOrangeIcon,
    label: "Provide ventilation and easy access",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Easy cleaning from both in & out surfaces",
  },
  {
    image: tickOrangeIcon,
    label: "Cost effective solution",
  },
  {
    image: tickOrangeIcon,
    label: "Improved ventilation even in partially open",
  },
  {
    image: tickOrangeIcon,
    label: "Increase your available interior space with streamlined designs",
  },
];

const TiltAndTurn = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={tiltAndTurn} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct
                productDetails={tiltAndTurn}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={tiltAndTurn}
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

export default TiltAndTurn;
