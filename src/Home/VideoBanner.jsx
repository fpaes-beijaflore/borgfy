import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';

import AnimateInView from '../Components/AnimateInView';
import ReactPlayer from 'react-player/lazy';
import Slider from 'react-slick';
import SliderWrapper from '../Components/Gallery/HomeVideoBannerWrapper';
import styled from 'styled-components';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow-wrapper arrow-wrapper-next" onClick={onClick}>
      <div className={'arrow-next'}></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow-wrapper arrow-wrapper-prev" onClick={onClick}>
      <div className={'arrow-prev'}></div>
    </div>
  );
}

const VideoWrapper = styled.div`
  position: relative;

  .react-player {
    position: relative !important;
    max-width: 100% !important;
    height: auto !important;
    min-height: 865px;
  }
`;

const TitleBackground = styled.div`
  width: 74%;
  height: 91%;
`;

const Title = styled.h1`
  width: 970px;
  height: auto;
  margin: 0 323px;
  font-size: 7.2rem;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 162px;
  z-index: 3;
  transition: 0.3s ease-out;
`;

const PlayButton = styled.button`
  width: 145px;
  height: 145px;
  margin: 0 0 107px;
  padding: 48px 51px 47px 53px;
  box-shadow: 0 13px 16px 0 rgba(0, 0, 0, 0.16);
  background-color: #f1ae78;
  border-radius: 100%;
  position: absolute;
  top: 70%;
  left: 46%;
  z-index: 3;

  &:before {
    content: '';
    border-style: solid;
    border-width: 37px;
    border-color: #202020;
    box-sizing: border-box;
    border-width: 19px 0px 19px 38px;
    border-color: transparent transparent transparent #fff;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const data = [
  { name: 'video1', path: '/video1.mp4' },
  { name: 'video2', path: '/video2.mp4' },
  { name: 'video3', path: '/video3.mp4' },
];

const SimpleSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {!isPlaying && (
        <TitleBackground>
          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 2,
                },
              },
            }}
            initial="hidden"
          >
            <Title>We bring impactful digital solution</Title>
          </AnimateInView>
        </TitleBackground>
      )}
      <SliderWrapper>
        <Slider {...settings}>
          {data.map((video) => (
            <VideoWrapper key={`video__${video.name}`}>
              <ReactPlayer
                onPlay={() => setIsPlaying(true)}
                className="react-player"
                url={video.path}
                controls={true}
                width="1616px"
                height="865px"
                playing
                playIcon={<PlayButton />}
                light={true}
              />
            </VideoWrapper>
          ))}
        </Slider>
      </SliderWrapper>
    </>
  );
};
export default SimpleSlider;
