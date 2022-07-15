import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import SliderWrapper from '../Components/Gallery/HomePhotoGalleryWrapper';
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

const Gallery = styled.section`
  width: 100%;
  height: 900px;
  margin: 0;
  padding: 109px 0 0;
  background-color: #191919;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    height: 800px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: 800px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: 800px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    height: 800px;
  }

  @media only screen and (max-width: 576px) {
    height: 800px;
  }
`;

Gallery.Title = styled.h2`
  width: 290px;
  margin-left: 152px;
  height: auto;
  font-size: 3.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: relative;
  margin-bottom: 107px;

  .text-style-1 {
    font-size: 1.7rem;
    font-weight: 200;
  }

  &::before {
    content: '';
    width: 129px;
    height: 8px;
    background-color: #ffffff;
    position: absolute;
    top: 40px;
    right: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin-left: 132px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin-left: 112px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-left: 40px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 20px;
    height: auto;

    &::before {
      right: 20px;
    }
  }
`;

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const photos = [
  { id: 1, src: '/D3E9CD12-B479-4F09-B163-08E19E93BC3F.png' },
  { id: 2, src: '/7B1252EF-F9D3-45B5-A765-A29D32E290D4.png' },
  { id: 3, src: '/7443D5B5-1BBB-49D2-89AB-640690191CE8.png' },
  { id: 4, src: '/05FB5465-BADB-41E0-B7E1-9BAE75EFCE01.png' },
  { id: 5, src: '/A9B8A4AE-5426-424E-9774-FAB636ACF376.png' },
];

function PhotoGalleryComp() {
  return (
    <Gallery>
      <AnimateInView
        variants={{
          hidden: { opacity: 0, x: -100 },
          show: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
      >
        <Gallery.Title>
          <span className="text-style-1">OUR</span> <br /> GALLERY
        </Gallery.Title>
      </AnimateInView>

      <AnimateInView
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
      >
        <SliderWrapper>
          <Slider {...settings}>
            {photos.map((photo) => (
              <Image
                key={`Photo__${photo.id}`}
                src={photo.src}
                layout="responsive"
                width={200}
                height={200}
                alt={photo.src}
              />
            ))}
          </Slider>
        </SliderWrapper>
      </AnimateInView>
    </Gallery>
  );
}

export default PhotoGalleryComp;
