import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import coupon1 from "../../assets/Menu/coupon1.jpg";
import coupon2 from "../../assets/Menu/coupon2.jpg";
import coupon3 from "../../assets/Menu/coupon3.jpg";

const couponSlides = [
  {
    image: coupon1,
    title: "20% OFF",
    description: "Use code WELCOME20 on your first order.",
  },
  {
    image: coupon2,
    title: "Free Delivery",
    description: "On all orders above $50 this weekend.",
  },
  {
    image: coupon3,
    title: "Buy 1 Get 1",
    description: "Pizza party! Grab the deal now.",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        className="w-full"
      >
        {couponSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-56 bg-cover bg-center flex items-end p-4 text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 backdrop-blur-sm p-3 flex gap-2 flex-col rounded-md w-full">
                <h2 className="font-rare text-xl font-semibold">
                  {slide.title}
                </h2>
                <p className="font-sfText text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
