import { frenchDoor1, frenchDoor2 } from "../../assets/images";
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

const frenchDoor = {
  name: "FRENCH DOOR",
  image1: frenchDoor1,
  image2: frenchDoor2,
  description:
    "uPVC French doors are a type of door design that combines elegance and functionality. These doors consist of two panels that open outward from the center, creating a wide opening and allowing for easy access and ventilation.",
};
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
              <FeaturesProduct productDetails={frenchDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={frenchDoor} />
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

export default FrenchDoor;
