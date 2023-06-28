import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ImageSlider: React.FC = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop
      >
        <SwiperSlide>
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861870.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861869.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861867.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861871.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861872.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861873.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861874.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861875.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861876.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
