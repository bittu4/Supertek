import Benefits from "../sections/Benefits";
import Faq from "../sections/Faq";
import Features from "../sections/Features";
import OtherProducts from "../sections/OtherProducts";
import ProductBanner from "../sections/ProductBanner";
import RequestQuote from "../sections/RequestQuote";
import Services from "../sections/Services";

const Products = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner />
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

export default Products;
