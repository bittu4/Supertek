import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const bifold = {
  name: "BIFOLD",
  description: "uPVC Bifold Windows are a type of window design that offers a unique and versatile opening mechanism. These windows consist of multiple panels that are hinged together and can be folded and stacked to one side, creating a wide opening space. They are commonly used to connect indoor and outdoor areas, such as patios, decks, or gardens.\\\\ uPVC Bifold Windows provide excellent insulation, helping to keep your home energy-efficient and comfortable.\\\\ The folding mechanism of uPVC Bifold Windows allows for maximum flexibility in terms of opening options. You can choose to partially open the windows for ventilation or fully open them to create a seamless transition between indoor and outdoor spaces. They are often equipped with a smooth sliding and locking system for easy operation and security.\\\\ uPVC Bifold Windows come in various configurations, allowing you to customize the number of panels and the direction in which they fold. They are available in different sizes, styles, and finishes to suit your architectural design and personal preferences. These windows are a popular choice for those looking to create a spacious and open atmosphere while maximizing natural light and views."
};

const Bifold = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={bifold} />
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

export default Bifold;
