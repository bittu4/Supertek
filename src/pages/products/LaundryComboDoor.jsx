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
              <FeaturesProduct productDetails={laundryComboDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={laundryComboDoor} />
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
