import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const slidingDoor = {
  name: "SLIDING DOOR",
  description:
    "uPVC Sliding doors are a type of door that offer convenience, functionality, and aesthetic appeal. These doors are designed to slide horizontally along a track, allowing for smooth and effortless operation. uPVC Sliding doors are known for their energy efficiency, as they provide excellent insulation and help to minimize heat loss or gain. They often feature double or triple glazing, which further enhances their thermal performance. These doors also offer a good level of sound insulation, helping to reduce noise from the outside environment.\\\\ One of the advantages of uPVC Sliding doors is their space-saving design. Since they do not swing open like traditional hinged doors, they are ideal for areas with limited space or where furniture placement may restrict the swing of a door.\\\\ uPVC Sliding doors are available in various sizes, styles, and finishes to suit different architectural designs and personal preferences. They can be customized with features such as security locks, multi-point locking systems, and additional glazing options for enhanced security and noise reduction.\\\\ Overall, uPVC Sliding doors are a popular choice for homeowners and businesses alike, offering a combination of functionality, durability, energy efficiency, and aesthetic appeal.",
};

const SlidingDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={slidingDoor} />
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

export default SlidingDoor;
