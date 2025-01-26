import React, { useRef, useState } from "react";
import {
  Button,
  CarouselContainer,
  HeaderWrapper,
  NavigationButtons,
  Title,
  VideoWrapper,
  Wrapper,
} from "./Samples.style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ColorCodes } from "../../constants/constant";
const videos = [
  {
    src: require("../../assets/videos/video1.mp4"),
    title: "Hot Coffee",
  },
  {
    src: require("../../assets/videos/video2.mp4"),
    title: "Campfire",
  },
  {
    src: require("../../assets/videos/video3.mp4"),
    title: "Beach Run",
  },
  {
    src: require("../../assets/videos/video4.mp4"),
    title: "Train",
  },
];
const Samples = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerPadding: "20px",
    slidesToShow: 2,
    slidesToScroll: 2,
    autoPlay: 1000,
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = (index) => {
    // Play video when hovered
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    // Pause video when hover is removed
    videoRefs.current[index].pause();
  };

  return (
    <div style={{ paddingBottom: 20 }}>
      <HeaderWrapper>
        <h1 style={{ color: ColorCodes.primaryColor }}>Samples</h1>
      </HeaderWrapper>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)} // Play video on hover
            onMouseLeave={() => handleMouseLeave(index)} // Pause video on hover out
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              width={800}
              height={400}
              src={video.src}
              title={video.title}
              style={{ marginLeft: 80,marginRight:20 }}
              loop
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Samples;
