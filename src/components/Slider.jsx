import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slid1 from "../assets/images/edenpenthouse.jpg";
import slid2 from "../assets/images/500016998.jpg";
import slid3 from "../assets/images/GetMedia-2020-10-20T161504.719.jpg";
import slid4 from "../assets/images/One-Only-Ocean-Club-pool_big_bu.jpg";
import slid5 from "../assets/images/tropical-island-resorts-sandals-royal-caribbean.jpg";

import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

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
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full md:h-[90vh] h-[40vh]" src={slid5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[90vh] h-[40vh]" src={slid1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[90vh] h-[40vh]" src={slid3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[90vh] h-[40vh]" src={slid4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full md:h-[90vh] h-[40vh]" src={slid2} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-0 text-white md:py-6 py-1 bg-black/50 w-full z-30 flex justify-center flex-col items-center md:space-y-5 space-y-2">
          <h1
            data-aos="zoom-out-down"
            className="md:text-4xl text-lg md:font-bold font-medium text-center"
          >
            GET THE BEST DEAL!
          </h1>
          <Link to={'/contact'}>
            <button className="btn md:btn-md btn-md bg-secondary md:py-0 border-secondary text-white md:text-lg md:font-bold rounded-none hover:bg-primary">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
