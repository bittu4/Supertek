import { bifoldDoor1, bifoldDoor2 } from "../../assets/images";
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

const bifoldDoor = {
  name: "BIFOLD DOOR",
  image1: bifoldDoor1,
  image2: bifoldDoor2,
  description:
    "uPVC Bifold doors are a popular choice for homeowners who want to enhance the aesthetics and functionality of their living spaces. These doors are made from uPVC, which stands for unplasticized polyvinyl chloride, a durable and low-maintenance material. With their sleek and modern design, uPVC Bifold doors can seamlessly connect indoor and outdoor areas, creating a sense of openness and maximizing natural light.",
};

const BifoldDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={bifoldDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <ProductVideo />
            </div>
            <div className="md:mt-14">
              <FeaturesProduct productDetails={bifoldDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={bifoldDoor} />
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

export default BifoldDoor;
