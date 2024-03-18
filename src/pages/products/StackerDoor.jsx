import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const stackerDoor = {
  name: "STACKER DOOR",
  description:
    "uPVC Stacker Doors are a type of sliding door system that is commonly used in residential and commercial buildings. The unique feature of uPVC Stacker Doors is their ability to stack multiple panels behind each other when opened, creating a wide opening and maximizing the available space. This stacking mechanism allows for a seamless transition between indoor and outdoor areas, making them ideal for connecting living spaces to patios, decks, or gardens.\\\\ uPVC Stacker Doors are designed to provide excellent insulation, helping to maintain energy efficiency and reduce heating and cooling costs. They often feature double glazing or other insulation options to enhance thermal performance.\\\\ These doors are typically operated by sliding one panel behind another on a track system. They can be easily opened and closed, providing convenience and flexibility in controlling airflow and access to outdoor areas.\\\\ uPVC Stacker Doors come in various sizes, styles, and finishes to suit different architectural designs and personal preferences. They are a popular choice for those seeking a modern and functional door solution that offers both aesthetics and practicality.",
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

export default StackerDoor;
