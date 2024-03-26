import { stackerDoor1, stackerDoor2 } from "../../assets/images";
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

const stackerDoor = {
  name: "STACKER DOOR",
  image1: stackerDoor1,
  image2: stackerDoor2,
  description:
    "uPVC Stacker Doors are a type of sliding door system that is commonly used in residential and commercial buildings. The unique feature of uPVC Stacker Doors is their ability to stack multiple panels behind each other when opened, creating a wide opening and maximizing the available space. This stacking mechanism allows for a seamless transition between indoor and outdoor areas, making them ideal for connecting living spaces to patios, decks, or gardens.",
};

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
              <FeaturesProduct productDetails={stackerDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={stackerDoor} />
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

export default StackerDoor;
