import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
const Slider = () => {
  return (
    <>
      <div className>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            <img src="https://p7014689.vo.llnwd.net/e1/media/wysiwyg/reuzeldesk.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://p7014689.vo.llnwd.net/e1/media/wysiwyg/dapperdesk.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://p7014689.vo.llnwd.net/e1/media/wysiwyg/legenddesk.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://p7014689.vo.llnwd.net/e1/media/wysiwyg/crewdesk.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://p7014689.vo.llnwd.net/e1/media/wysiwyg/1600X415.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.titles_container}>
        <div>
          <a href="/">FREE UK NEXT DAY DELIVERY</a>
        </div>
        <div>ALL PRICES SHOWN INCLUDE VAT</div>
        <div>MINIMUM SPEND ONLY £20</div>
      </div>
    </>
  );
};

export default Slider;
