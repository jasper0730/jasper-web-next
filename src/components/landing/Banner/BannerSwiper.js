"use client";
import styles from "./BannerSwiper.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function BannerSwiper() {
  const options = {
    modules: [Navigation, Pagination],
    slidesPerView: "1",
    pagination: {},
  };
  return (
    <div className={styles.swiperBlock}>
      <Swiper {...options}>
        <SwiperSlide>
          <div className={styles.swiperInner}>
            <img src="https://picsum.photos/1700/700?random=10" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperInner}>
            <img src="https://picsum.photos/1700/700?random=11" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperInner}>
            <img src="https://picsum.photos/1700/700?random=12" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
