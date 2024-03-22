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

const bifoldDoor = {
  name: "BIFOLD DOOR",
  image1: bifoldDoor1,
  image2: bifoldDoor2,
  description:
    "uPVC Bifold doors are a popular choice for homeowners who want to enhance the aesthetics and functionality of their living spaces. These doors are made from uPVC, which stands for unplasticized polyvinyl chloride, a durable and low-maintenance material. With their sleek and modern design, uPVC Bifold doors can seamlessly connect indoor and outdoor areas, creating a sense of openness and maximizing natural light.\\\\ The key advantage of uPVC Bifold doors is their ability to create a wide opening, allowing for unobstructed views and easy access to outdoor spaces. When fully opened, the door panels neatly fold and stack against each other, creating a seamless transition between the interior and exterior. This feature is especially beneficial for areas with limited space, as it eliminates the need for a swinging door that takes up valuable room.\\\\ In terms of security, uPVC Bifold doors are equipped with high-quality locking systems to ensure the safety of your home. Additionally, the uPVC material itself is highly resistant to weather elements, such as rain, wind, and sunlight, making these doors durable and long-lasting. The low-maintenance nature of uPVC also means that they are easy to clean and require minimal upkeep.\\\\ When it comes to energy efficiency, uPVC Bifold doors are excellent insulators, helping to keep your home warm in the winter and cool in the summer. The uPVC frames combined with double or triple glazing options contribute to reducing heat loss and enhancing thermal efficiency, leading to potential energy savings and lower utility bills.\\\\ In conclusion, uPVC Bifold doors offer a practical and stylish solution for homeowners looking to enhance their living spaces. With their modern design, wide opening capabilities, security features, and energy efficiency, these doors provide a seamless connection between indoor and outdoor areas while adding value to your home.",
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
              <FeaturesProduct productDetails={bifoldDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={bifoldDoor} />
            </div>
            <div className="padding-y mt-4">
              <ServicesProduct />
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

export default BifoldDoor;
