import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { bannerImg } from "../assets/images";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
      staggerChildren: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <section className=" ">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full padding-x lg:py-8 bg-banner bg-cover">
          <div className="max-container flex items-center justify-between xl:gap-10 lg:gap-5 ">
            <motion.div
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              className="flex flex-col flex-1 items-start py-8"
            >
              <motion.p
                variants={textVariants}
                className="xl:text-2xl lg:text-xl text-base text-[#1E1E1E] font-semibold uppercase"
              >
                THERMAL EFFICIENT,&nbsp; CLIMATE-CONTROL, <br />
                AND SOUND PROOF
              </motion.p>
              <motion.h1
                variants={textVariants}
                className="mt-4 text-dark-orange xl:text-[52px] lg:text-[35px] text-3xl font-extrabold xl:leading-[74px] lg:leading-[55px] leading-normal text-left"
              >
                uPVC Double Glazed
                <br />{" "}
                <motion.span
                  variants={textVariants}
                  className="sm:whitespace-nowrap"
                >
                  Windows & Doors
                </motion.span>
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="max-w-xl lg:mt-8 mt-3 lg:text-lg text-sm lg:leading-7 leading-6 text-gray-600 text-left"
              >
                Supertek Windows offers a comprehensive range of uPVC Double or
                Triple glazed Windows & Doors. Our Windows & Doors are European
                designed and highly customizable. The uPVC double-glazed windows
                and doors from Supterk Windows shield you and your family from
                Melbourne&apos;s sweltering summers and chilly winters.
                <br />
                Our locally manufactured products adhere to all Australian
                standards and compliances, ensuring quality, safety, and support
                for our community.
                <br /> This is better to invest in thermally efficient systems,
                as energy costs skyrocket. To maintain and build an efficient
                thermal insulating layer, Supertek&apos;s double-glazed windows
                and doors use advanced technology. This guarantees a cosy,
                climate-controlled indoor environment all year long.
              </motion.p>
              <motion.a
                key={"Contact Us"}
                href={"#contact"}
                variants={textVariants}
                className="lg:py-6 lg:px-14 py-4 px-8 lg:mt-10 mt-5 rounded-[10px] bg-dark-orange text-white font-poppins text-lg leading-[20px] lg:font-semibold font-medium"
              >
                Get a Free Quote
              </motion.a>
            </motion.div>
            <div className="md:flex hidden px-6 py-14 items-center flex-1 justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                src={bannerImg}
                className="object-contain"
                alt="Window"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
