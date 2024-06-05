import ServiceCard from "../components/ServiceCard";
import { servicesProduct } from "../constants";

const ServicesProduct = () => {
  return (
    <section className="max-container w-full">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-light-black text-center">
        Why Supertek?
      </h3>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-5 gap-4 mt-12">
        {servicesProduct.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesProduct;
