import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import SliderWrapper from '../Components/Gallery/HomeDepoimentsGalleryWrapper';
import styled from 'styled-components';

const Depoiments = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 138px 152px 63px;
  background-color: #f8f8f8;

  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    height: auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    height: auto;
    padding: 138px 132px 63px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: auto;
    padding: 138px 112px 63px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: auto;
    padding: 138px 92px 63px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    height: auto;
    padding: 138px 72px 63px;
  }

  @media only screen and (max-width: 576px) {
    height: auto;
    padding: 138px 20px 63px;
  }
`;

Depoiments.Title = styled.h2`
  width: 290px;
  height: auto;
  font-size: 3.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  position: relative;

  .text-style-1 {
    font-size: 1.7rem;
    font-weight: 200;
  }

  &::before {
    content: '';
    width: 129px;
    height: 8px;
    background-color: #191919;
    position: absolute;
    top: 40px;
    right: 0;
  }
`;

Depoiments.Grid = styled.div`
  width: 1616px;
  height: 700px;
  margin: 66px 0 0;
  background-color: #ffffff;
  display: grid;
  grid-template-areas: 'a a';
  grid-template-columns: 558px 1058px;

  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    grid-template-columns: 30% 70%;
    height: auto;
    width: 100%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    height: auto;
    width: 100%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    height: auto;
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    height: auto;
    width: 100%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    height: auto;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    height: auto;
    width: 100%;
  }
`;

Depoiments.ImageWrapper = styled.div`
  width: '558px';
  height: '700px';

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    display: none;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

Depoiments.GridText = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 20px 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 20px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 20px 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 20px 0;
  }

  @media only screen and (max-width: 576px) {
    padding: 20px 0;
  }
`;

Depoiments.Depoiment = styled.p`
  width: 907px !important;
  height: 208px;
  margin: 80px 0 110px 80px;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: left;
  color: #191919;

  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 576px) {
    width: 100% !important;
    height: auto;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
  }
`;

const settings = {
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => (
    <div className="custom_paging_wrapper">
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
      <p>
        <span>{ClientsDepoiments[i].clientName}</span> {ClientsDepoiments[i].office}
      </p>
    </div>
  ),
};

const ClientsDepoiments = [
  {
    clientName: 'EV Charzer',
    office: 'Dave Smith  |  CEO',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Stet clita kasd gubergren no sea takimata.',
  },
  {
    clientName: 'OYO ROOMS',
    office: 'Naomi Thomas  |  CEO',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
  },
  {
    clientName: 'AMAZON',
    office: 'Naomi Thomas  |  CEO',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
  },
  {
    clientName: 'Boss Business Market',
    office: 'Naomi Thomas  |  CEO',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
  {
    clientName: 'TESLA',
    office: 'Naomi Thomas  |  CEO',
    text: 'Lorem ipsum dolor sit amet.',
  },
];

function ClientsDepoimentsComp() {
  return (
    <Depoiments>
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
        <Depoiments.Title>
          <span className="text-style-1">WHAT OUR</span> <br /> CLIENT SAY
        </Depoiments.Title>
      </AnimateInView>
      <Depoiments.Grid>
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
          <Depoiments.ImageWrapper>
            <Image
              src="/F8B14869-EF6D-40E4-A14D-64E6E312027B.png"
              width={558}
              height={700}
              alt="F8B14869-EF6D-40E4-A14D-64E6E312027B.png"
            />
          </Depoiments.ImageWrapper>
        </AnimateInView>

        <AnimateInView
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
        >
          <Depoiments.GridText>
            <SliderWrapper>
              <Slider {...settings}>
                {ClientsDepoiments.map((depoiment) => (
                  <Depoiments.Depoiment key={`DepoimentOf__${depoiment.clientName}`}>
                    {depoiment.text}
                  </Depoiments.Depoiment>
                ))}
              </Slider>
            </SliderWrapper>
          </Depoiments.GridText>
        </AnimateInView>
      </Depoiments.Grid>
    </Depoiments>
  );
}

export default ClientsDepoimentsComp;
