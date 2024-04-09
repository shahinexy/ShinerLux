import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slid1 from '../assets/images/2-14-1024x575.jpg'
import slid2 from '../assets/images/500016998.jpg'
import slid3 from '../assets/images/GetMedia-2020-10-20T161504.719.jpg'
import slid4 from '../assets/images/One-Only-Ocean-Club-pool_big_bu.jpg'
import slid5 from '../assets/images/tropical-island-resorts-sandals-royal-caribbean.jpg'

import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[ Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img className="w-full h-[90vh]" src={slid5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-[90vh]" src={slid3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-[90vh]" src={slid4} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-[90vh]" src={slid2} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-[90vh]" src={slid1} alt="" /></SwiperSlide>
        </Swiper>
        <div className="absolute bottom-0 text-white py-6 bg-black/50 w-full z-30 flex justify-center flex-col items-center space-y-5">
            <h1 className="md:text-4xl text-xl font-bold text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <button className="btn bg-secondary border-secondary text-white md:text-lg font-bold w-40 rounded-none hover:bg-primary">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;