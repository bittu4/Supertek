import { motion } from "framer-motion";

const productImageVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: "0.4",
      duration: 3,
    },
  },
};

const ProductCard = ({ image, name }) => {
  return (
    <div className="max-md:h-[450px] md:h-[450px] lg:h-[500px] lg:p-7 p-4 bg-white rounded-md hover:scale-110 max-sm:hover:scale-105 duration-500 ease-out max-sm:mb-4 max-sm:mx-1">
      <div className="flex flex-col items-center justify-center">
        <motion.img
          variants={productImageVariants}
          initial="initial"
          whileInView="animate"
          src={image}
          className="max-md:h-[340px] md:h-[340px] lg:h-[350px]"
          alt={name}
        />
      </div>
      <p className="mt-12 text-[#464747] text-xl font-extrabold">{name}</p>
    </div>
  );
};

export default ProductCard;
