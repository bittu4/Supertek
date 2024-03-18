import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const slidingWindows = {
  name: "SLIDING WINDOWS",
  description:
    "uPVC Sliding Windows are a type of window design that offers smooth and effortless operation. These windows consist of two or more horizontal sashes that slide horizontally along a track. They are operated by sliding one sash behind the other to open or close the window.\\\\ uPVC Sliding Windows provide excellent insulation, helping to keep your home energy-efficient and comfortable.\\\\ These windows are popular for their sleek and modern appearance, as well as their space-saving design. They are suitable for areas where outward or inward opening windows may not be feasible due to limited space or obstructions. uPVC Sliding Windows are often chosen for their ease of use and ability to provide unobstructed views when fully opened.\\\\ These windows come in various sizes, styles, and finishes to complement different architectural designs and personal preferences. They are a popular choice for both residential and commercial buildings due to their functionality, durability, and aesthetic appeal.",
};

const SlidingWindows = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={slidingWindows} />
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

export default SlidingWindows;
