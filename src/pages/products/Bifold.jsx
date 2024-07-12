import { tickOrangeIcon } from "../../assets/icons";
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

const FeatureProduct = [
  {
    image: tickOrangeIcon,
    label: "Folding mechanism consist of multiple panels",
  },
  {
    image: tickOrangeIcon,
    label: "Wide opening with seamless connecting",
  },
  {
    image: tickOrangeIcon,
    label: "Large opening withou encroaching areas",
  },
  {
    image: tickOrangeIcon,
    label: "Versatile opening options",
  },
];

const BenefitProduct = [
  {
    image: tickOrangeIcon,
    label: "Maximum flexibility in terms of opening options",
  },
  {
    image: tickOrangeIcon,
    label: "Open partially for ventilation",
  },
  {
    image: tickOrangeIcon,
    label: "Fully open for seamless transition",
  },
  {
    image: tickOrangeIcon,
    label: "Equipped with smooth sliding and locking system",
  },
];

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
              <FeaturesProduct
                productDetails={bifold}
                productFeatures={FeatureProduct}
              />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct
                productDetails={bifold}
                productBenefits={BenefitProduct}
              />
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
