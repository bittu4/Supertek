import { motion } from "framer-motion";
import { supertek } from "../assets/images";

const supertekImageVariation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.3,
    },
  },
};

const supertekVariation = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const Supertek = () => {
  return (
    <section className="max-container w-full flex max-lg:flex-col-reverse items-center gap-10">
      <motion.div
        variants={supertekImageVariation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-2xl max-lg:max-w-lg"
      >
        <img
          src={supertek}
          width={712}
          height={581}
          className=" max-w-full"
          alt="Supertek"
        />
      </motion.div>
      <motion.div
        variants={supertekVariation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col flex-1 xl:pr-10 lg:pr-0"
      >
        <h3 className="sm:text-4xl text-3xl max-sm:leading-10 font-extrabold text-dark-orange max-lg:text-center leading-[71px] sm:whitespace-nowrap">
          Who is Supertek?
        </h3>
        <p className="text-[#696969] text-base leading-[31px] mt-5">
          Supertek Windows is a leading provider of high-quality double glazed
          uPVC windows and doors in Australia. Our team of experienced
          professionals is dedicated to delivering exceptional products and
          services to our customers. From sales and manufacturing to
          installations, repairs, and maintenance, we take care of every aspect
          of the business to ensure that our customers receive the best possible
          service.
          <br /> We offer a comprehensive range of products that are designed to
          complement the style of any home while incorporating the latest
          technology. Our commitment to quality and design has made us one of
          the most trusted companies in the industry. Choose Supertek Windows
          for premium double glazed uPVC windows and doors that are built to
          last.
        </p>
      </motion.div>
    </section>
  );
};

export default Supertek;
