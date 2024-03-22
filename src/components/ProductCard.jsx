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
    <div className="lg:p-7 p-4 bg-white shadow-card rounded-md hover:shadow-cardHover hover:scale-110 max-sm:hover:scale-105 duration-500 ease-out max-sm:mb-4 max-sm:mx-1">
      <motion.img
        variants={productImageVariants}
        initial="initial"
        whileInView="animate"
        src={image}
        width={370}
        height={357}
        className="object-contain"
        alt="Products"
      />
      <p className="mt-12 text-[#464747] text-xl font-extrabold">{name}</p>
    </div>
  );
};

export default ProductCard;
