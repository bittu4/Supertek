import { frenchDoor1, frenchDoor2 } from "../../assets/images";
import {
  BenefitsProduct,
  Faq,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  ServicesProduct,
} from "../../sections/";

const frenchDoor = {
  name: "FRENCH DOOR",
  image1: frenchDoor1,
  image2: frenchDoor2,
  description:
    "uPVC French doors are a type of door design that combines elegance and functionality. These doors consist of two panels that open outward from the center, creating a wide opening and allowing for easy access and ventilation. \\\\ uPVC French doors are known for their energy efficiency, as they provide excellent insulation and can help reduce heating and cooling costs. They often feature double glazing, which further enhances their thermal performance. The multi-point locking system ensures security and peace of mind.\\\\ These doors are popular for their aesthetic appeal and ability to enhance the overall look of a space. They are available in various styles, finishes, and glass options to suit different architectural designs and personal preferences. uPVC French doors are a versatile choice for both residential and commercial applications, providing a seamless connection between indoor and outdoor spaces.\\\\ Luxurious French Door Options from Supertek Windows\\\\ Supertek French Doors are luxurious, high quality, robust along with a touch of culture and class. They provide a maximum opening, enabling enough natural light and fresh air to enter the house, providing a comfortable and peaceful environment. These are renowned for their unique soundproofing and dust-resistance properties.\\\\ ",
};
const FrenchDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={frenchDoor} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <FeaturesProduct productDetails={frenchDoor} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={frenchDoor} />
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

export default FrenchDoor;
