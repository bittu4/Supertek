import { tiltAndSlide1, tiltAndSlide2 } from "../../assets/images";
import Benefits from "../../sections/Benefits";
import Faq from "../../sections/Faq";
import Features from "../../sections/Features";
import OtherProducts from "../../sections/OtherProducts";
import ProductBanner from "../../sections/ProductBanner";
import RequestQuote from "../../sections/RequestQuote";
import Services from "../../sections/Services";

const tiltAndSlide = {
  name: "TILT & SLIDE",
  image1: tiltAndSlide1,
  image2: tiltAndSlide2,
  description:
    "uPVC Tilt & Slide windows are a type of window design that combines the functionality of both tilt and slide mechanisms.\\\\ The tilt function allows the window sash to tilt inwards from the top, providing ventilation while maintaining security. This is particularly useful when you want to let fresh air in without fully opening the window or when you need to clean the exterior glass from inside your home.\\\\ The slide function allows the window sash to slide horizontally along a track, providing a larger opening for easy access and maximum airflow. This is especially convenient for larger windows or when you want to create a seamless transition between indoor and outdoor spaces.\\\\ uPVC Tilt & Slide windows are known for their energy efficiency, as they provide excellent insulation and help to reduce heating and cooling costs. They are also available in various styles, finishes, and sizes to suit different architectural designs and personal preferences.\\\\ These windows are a popular choice for both residential and commercial buildings due to their versatility, ease of use, and low maintenance requirements.",
};

const TiltAndSlide = () => {
  return (
    <main className="flex flex-col">
      <section>
        <ProductBanner productDetails={tiltAndSlide} />
      </section>
      <section className="padding-x mt-8 max-container">
        <div className="flex gap-x-6">
          <div className="max-lg:w-full lg:w-4/5">
            <div className="md:mt-14">
              <Features productDetails={tiltAndSlide} />
            </div>
            <div className="padding-t md:mt-14">
              <Benefits productDetails={tiltAndSlide} />
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

export default TiltAndSlide;
