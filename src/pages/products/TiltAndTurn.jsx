import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const tiltAndTurn = {
  name: "TILT & TURN",
  description:
    "uPVC Tilt and Turn Windows are a type of window design that offers versatility and functionality. These windows have a unique mechanism that allows them to tilt inwards from the top for ventilation purposes, as well as open fully inwards like a door for easy cleaning and access. uPVC Tilt and Turn Windows are known for their energy efficiency, as they provide excellent insulation and can help reduce heating and cooling costs. They are also available in various styles and finishes to suit different architectural designs and personal preferences.",
};
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
              <Features />
            </div>
            <div className="padding-t md:mt-14">
              <Benefits />
            </div>
            <div className="padding-y mt-4">
              <Services />
            </div>
            <div className="">
              <RequestQuote />
            </div>
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
