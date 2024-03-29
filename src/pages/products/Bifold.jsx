import { bifold1, bifold2 } from "../../assets/images";
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

const bifold = {
  name: "BIFOLD",
  image1: bifold1,
  image2: bifold2,
  description:
    "uPVC Bifold Windows are a type of window design that offers a unique and versatile opening mechanism. These windows consist of multiple panels that are hinged together and can be folded and stacked to one side, creating a wide opening space. They are commonly used to connect indoor and outdoor areas, such as patios, decks, or gardens. uPVC Bifold Windows provide excellent insulation, helping to keep your home energy-efficient and comfortable.",
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
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={bifold} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={bifold} />
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

export default Bifold;
