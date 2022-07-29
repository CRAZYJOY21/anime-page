import React from 'react';
import './Carousel.scss';
import images1 from "../../assets/images/png/DemonSlayer.jpg";
import images2 from "../../assets/images/png/Onepunchman.png";
import images3 from "../../assets/images/png/ShieldHero.png";
import images4 from "../../assets/images/png/SpyxFamily.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const Carousel = () => {
    return (
        <div className='Carousel mt-10 mb-20'>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='images' src={images1} alt="img" />
                    <h1 className='text'>Lorem</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='images' src={images2} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='images' src={images3} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='images' src={images4} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
