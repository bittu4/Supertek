import { french1, french2 } from "../../assets/images";
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

const french = {
  name: "FRENCH",
  image1: french1,
  image2: french2,
  description:
    "uPVC French Windows are a classic and elegant window style that adds a touch of sophistication to any space. These windows are characterized by their double sashes that open inward or outward, creating a wide and unobstructed opening. They are often used to enhance the aesthetic appeal of a room and provide a seamless connection between indoor and outdoor spaces.",
};

const French = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={french} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={french} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={french} />
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

export default French;
