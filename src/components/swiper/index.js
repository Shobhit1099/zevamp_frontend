import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Skeleton } from "antd";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import Testimonial from "../testimonial";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpeg";
import user3 from "../../assets/images/users/user3.jpeg";
import { useMediaQuery } from "react-responsive";
import UserService from "../../Services/UserServices";

SwiperCore.use([Navigation]);

export default function SwiperCard() {
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  const isTooMuchSmall = useMediaQuery({ query: "(max-width: 476px)" });
  const isSmallest = useMediaQuery({ query: "(max-width: 400px)" });
  const [items, setItems] = useState();

  useEffect(() => {
    UserService.getDetails().then((data) => setItems(data));
  }, []);

  return (
    <Row>
      {items ? (
        <Swiper
          style={{ padding: "5px 0px" }}
          centeredSlides
          slidesPerView={
            isTooSmall ? (isTooMuchSmall ? (isSmallest ? 1.3 : 1.5) : 1.8) : 2
          }
          initialSlide="1"
          spaceBetween={isTooMuchSmall ? (isSmallest ? 20 : 30) : 40}
          className="mySwiper"
        >
          {items.testimonials.map((item, index) => {
            return (
              <Col key={index}>
                <SwiperSlide key={index}>
                  <Testimonial
                    key={index}
                    image={item.img}
                    name={item.uname}
                    data={item.review}
                    rate={item.rate}
                  />
                </SwiperSlide>
              </Col>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          style={{ padding: "5px 0px" }}
          centeredSlides
          slidesPerView={
            isTooSmall ? (isTooMuchSmall ? (isSmallest ? 1.3 : 1.5) : 1.8) : 2
          }
          initialSlide="1"
          spaceBetween={isTooMuchSmall ? (isSmallest ? 20 : 30) : 40}
          className="mySwiper"
        >
          <Col>
            <SwiperSlide>
              <Testimonial loading={true} />
            </SwiperSlide>
          </Col>
          <Col>
            <SwiperSlide>
              <Testimonial loading={true} />
            </SwiperSlide>
          </Col>
          <Col>
            <SwiperSlide>
              <Testimonial loading={true} />
            </SwiperSlide>
          </Col>
        </Swiper>
      )}
    </Row>
  );
}
