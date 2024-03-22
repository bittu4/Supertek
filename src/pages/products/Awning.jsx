import { awning1, awning2 } from "../../assets/images";
import {
  BenefitsProduct,
  Faq,
  FeaturesProduct,
  OtherProducts,
  ProductBanner,
  RequestQuote,
  ServicesProduct,
} from "../../sections/";

const awning = {
  name: "AWNING",
  image1: awning1,
  image2: awning2,
  description:
    "uPVC Awning Windows are a popular window style that offers both functionality and aesthetic appeal. These windows are hinged at the top and open outward from the bottom, creating an awning-like effect. They are typically operated using a crank mechanism, allowing for easy opening and closing.\\\\ uPVC Awning Windows provide excellent insulation, helping to keep your home energy-efficient and comfortable.\\\\ These windows are often chosen for their ability to provide ventilation even during light rain, as the outward opening design prevents water from entering the interior. They are also suitable for areas where space is limited, as they can be installed higher on the wall compared to other window types.\\\\ uPVC Awning Windows come in various sizes, styles, and finishes to complement different architectural designs and personal preferences. They are a popular choice for both residential and commercial buildings due to their functionality, durability, and aesthetic appeal.",
};

const Awning = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={awning} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <FeaturesProduct productDetails={awning} />
            </div>
            <div className="padding-t md:mt-14">
              <BenefitsProduct productDetails={awning} />
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

export default Awning;
