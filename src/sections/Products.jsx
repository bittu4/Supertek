import ProductCard from "../components/ProductCard";
import { products } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Product = () => {
  return (
    <section className="w-full max-container">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Our Premium Products
      </h3>
      {/* <div className="grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 xl:gap-14 lg:gap-8 gap-4 mt-12">
        {oldProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="md:pb-8 lg:pb-5"
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            className="w-full lg:py-12 md:py-8 max-md:py-12"
          >
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
