import { motion } from "framer-motion";

const workVariation = {
  initial: {
    opacity: 0.4,
    scale: 0.4,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
  animateNumber: {
    scale: [0.3, 0.6, 1],
    rotate: [-360, 360, -360],
    transition: {
      duration: 1.5,
    },
  },
};

const workCardVariation = {
  initial: {
    y: -20,
    x: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const Work = () => {
  return (
    <section className="w-full bg-work bg-cover bg-no-repeat bg-left-top padding-x padding-t">
      <div className="w-full max-container">
        <motion.div
          variants={workVariation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-lg flex flex-col gap-7"
        >
          <p className="text-lg font-semibold text-dark-orange tracking-[1px] uppercase">
            HOW IT WORKS
          </p>
          <h3 className="sm:text-4xl text-3xl max-sm:leading-10 font-extrabold text-white">
            We turn your dream into your dream home
          </h3>
        </motion.div>
      </div>

      <motion.div
        variants={workVariation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full max-container sm:mt-14 mt-5 padding-b flex max-sm:flex-wrap items-start justify-start md:gap-20 gap-10"
      >
        <div>
          <p className="lg:text-lg text-base lg:leading-[34px] leading-7 text-white xl:w-1/2 lg:w-3/5 w-full">
            Our vast local knowledge and industry experience have resulted in a
            steadfast objective. We understand that every home is different, and
            that&apos;s why we offer 100% customisation on all our uPVC windows
            and doors. Whether you need a specific size or colour to match your
            home&apos;s aesthetic or you need a special feature to make your
            home more secure or sustainable, we are committed to delivering the
            ultimate uPVC solution.
          </p>
          <p className="lg:text-lg text-base lg:leading-[34px] leading-7 pt-2 text-white xl:w-1/2 lg:w-3/5 w-full">
            Our team of experienced and professional staff can advise you on the
            best products for your needs and help you to measure and install
            your new windows and doors. We&apos;ll also take care of the entire
            process from start to finish, so you can sit back and relax knowing
            that your project is in good hands. Get in touch with us today to
            discuss your double-glazing needs.
          </p>
        </div>
      </motion.div>
      <div className="w-full max-container grid sm:grid-cols-3 grid-cols-1 max-sm:gap-4 max-sm:pb-4">
        <div className="lg:min-h-[360px] sm:min-h-[280px] min-h-[240px] lg:px-12 lg:pt-24 px-5 pt-8 bg-dark-orange">
          <motion.h3
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:text-[34px] text-[24px] leading-normal font-extrabold text-white"
          >
            Schedule a Call
          </motion.h3>
          <motion.p
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-5 text-sm leading-[24px] font-medium text-white max-w-[212px]"
          >
            Schedule a free consultation call with our uPVC experts and explain
            your requirements.
          </motion.p>
        </div>
        <div className="lg:min-h-[360px] sm:min-h-[280px] min-h-[240px] lg:px-12 lg:pt-24 px-5 pt-8 bg-[#E8ECEB] hover:bg-dark-orange [&>*]:hover:text-[#fff]">
          <motion.h3
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:text-[34px] text-[24px] leading-normal font-extrabold text-[#2F2F2F]"
          >
            Site Visit & measurements
          </motion.h3>
          <motion.p
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-5 text-sm leading-[24px] font-medium text-gray-500 max-w-[212px]"
          >
            Our technical team will visit your site and take the exact
            measurement.
          </motion.p>
        </div>
        <div className="lg:min-h-[360px] sm:min-h-[280px] min-h-[240px] lg:px-12 lg:pt-24 px-5 pt-8 bg-[#EFF3F3] hover:bg-dark-orange [&>*]:hover:text-[#fff]">
          <motion.h3
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:text-[34px] text-[24px] leading-normal font-extrabold text-[#2F2F2F]"
          >
            Installation
          </motion.h3>
          <motion.p
            variants={workCardVariation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-5 text-sm leading-[24px] font-medium text-gray-500 max-w-[212px]"
          >
            Once fabrication is completed as per order, our experts will
            complete installation at site.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Work;
