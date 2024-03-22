import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { reviewsListOne } from "../constants";

const Testimonials = () => {
  return (
    <section className="w-full padding-x max-container">
      <h3 className="padding-x font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Our Customers Reviews
      </h3>
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
        className=""
      >
        {reviewsListOne.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-full lg:py-12 md:py-8 max-md:py-12"
          >
            <div className="py-6 max-lg:m-3 lg:px-8 max-lg:px-2 bg-[#E8ECEB] rounded-lg min-h-[300px] flex items-center justify-center flex-col gap-3 hover:bg-dark-orange hover:scale-105 [&>*]:hover:text-[#fff] transition-all duration-300">
              <p className="text-black text-poppins text-base font-medium text-center leading-[24px]">
                {review.review}
                <span className="font-semibold block mt-2">
                  {" "}
                  - {review.name}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
