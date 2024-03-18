import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const laundryComboDoor = {
  name: "LAUNDRY COMBO DOOR",
  description:
    "A Laundry Combo Door typically refers to a door that combines a regular door with a built-in laundry chute or other laundry-related features. This type of door is designed to provide convenience and efficiency in managing laundry tasks within a home or commercial setting.\\\\ The main component of a Laundry Combo Door is the door itself, which functions as a regular door for entry or exit. It can be made from various materials, including uPVC (unplasticized polyvinyl chloride), wood, or metal, depending on personal preference and the overall design of the space.\\\\ What sets a Laundry Combo Door apart is the inclusion of a built-in laundry chute or other laundry-related features. The laundry chute typically consists of a vertical opening or tube located within the door, allowing users to easily drop dirty laundry from upper floors directly into a designated laundry area, such as a laundry room or basement. This eliminates the need to carry laundry down the stairs, saving time and effort.\\\\ In addition to the laundry chute, a Laundry Combo Door may also include other features such as a built-in ironing board, storage compartments for laundry supplies, or even a fold-out drying rack. These additional features further enhance the functionality and efficiency of the door, creating a convenient laundry management system within a compact space.\\\\ Laundry Combo Doors are commonly found in multi-story homes, apartments, or commercial buildings where laundry tasks need to be streamlined and made more convenient. They provide a space-saving solution and help to keep laundry areas organized and tidy.\\\\ Overall, a Laundry Combo Door is a specialized door that combines a regular entry/exit function with laundry-related features such as a laundry chute or additional storage. It offers convenience, efficiency, and space-saving benefits for managing laundry tasks within a home or commercial setting.",
};

const LaundryComboDoor = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={laundryComboDoor} />
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

export default LaundryComboDoor;
