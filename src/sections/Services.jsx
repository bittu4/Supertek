import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { motion } from "framer-motion";

const serviceCard = {
  initial: {
    opacity: 0,
    scale: 0.4,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const Services = () => {
  return (
    <section className="max-container w-full flex items-center flex-col lg:-my-8">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Benefits
      </h3>
      <motion.div
        variants={serviceCard}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap xl:gap-6 lg:gap-5 gap-4 mt-12 justify-center"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
