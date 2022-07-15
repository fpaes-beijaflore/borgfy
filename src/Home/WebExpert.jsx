import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const WebExpert = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

WebExpert.TextContainer = styled.div`
  width: 857px;
  height: 208px;
  display: grid;
  grid-template-areas: 'a a';
`;

WebExpert.Title = styled.h2`
  width: 320px;
  height: auto;
  margin: 132px 155px 166px 152px;
  font-size: 3.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
  position: relative;

  .text-style-1 {
    font-size: 1.7rem;
    font-weight: 200;
  }

  &::before {
    content: '';
    width: 129px;
    height: 8px;
    background-color: #131313;
    position: absolute;
    top: 40px;
    right: 0;
  }
`;

WebExpert.Text = styled.p`
  width: 470px;
  height: 208px;
  margin: 132px 105px 71px 0;
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
`;

WebExpert.Image = styled.div`
  position: absolute;
  right: 0;
  top: -185px;
  width: 42%;
  height: 981px;
`;

WebExpert.LogoBox = styled.div`
  width: 445px;
  height: 275px;
  margin: 131px 0 189px 152px;
  padding: 89px 173px 88px 174px;
  border-radius: 20px;
  background: rgb(131, 131, 131);
  background: radial-gradient(circle, rgba(131, 131, 131, 1) 0%, rgba(25, 25, 25, 1) 100%);
  z-index: 3;
  position: relative;
`;

WebExpert.Logo = styled.div`
  width: 96px;
  height: 96px;
`;

WebExpert.FooterContainer = styled.div`
  width: 1467px;
  height: 551px;
  margin: 0;
  padding: 107px 165px 24.5px 409px;
  background-color: ${({ theme }) => theme.colors.bg_gray};
  -webkit-border-radius: 60px;
  -webkit-border-top-right-radius: 400px;
  -webkit-border-bottom-left-radius: 400px;
  -moz-border-radius: 60px;
  -moz-border-radius-topright: 400px;
  -moz-border-radius-bottomleft: 400px;
  border-radius: 60px;
  border-top-right-radius: 400px;
  border-bottom-left-radius: 400px;
  position: absolute;
  bottom: 121px;
  right: 152px;
  z-index: 2;
  display: grid;
  grid-template-areas: 'a a';
`;

WebExpert.FooterContentContainer = styled.div`
  display: grid;
  grid-template-areas: 'a a';
  grid-auto-rows: 52px;
`;

WebExpert.FooterContainerTitle = styled.h4`
  width: 251px;
  height: auto;
  margin: 0 71px 13px 25px;
  font-size: 1.2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

WebExpert.FooterContainerText = styled.p`
  width: 322px;
  height: 85px;
  margin: 13px 0 0 25px;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #9b9b9b;
`;

function WebExpertComp() {
  return (
    <WebExpert>
      <WebExpert.TextContainer>
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
          <WebExpert.Title>
            <span className="text-style-1">WE ARE</span> <br /> WEB EXPERTS
          </WebExpert.Title>
        </AnimateInView>
        <AnimateInView
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <WebExpert.Text>
            We Are <strong>Dedicated Engineers</strong> Minds Devoted to <strong>Innovation</strong>, Bringing <strong>Sustainable Life</strong>
            Through Technology Advancement, Helping Startups and Enterprises Build their ideas into
            MVP with most anticipated technology in AI, IoT, Robotics, <strong>Borgfy</strong> is committed to
            delivering the finest quality within budget in Timeframe, last but not least We Shapes
            Visions.
          </WebExpert.Text>
        </AnimateInView>
      </WebExpert.TextContainer>
      <WebExpert.Image>
        <Image
          src="/0F616418-4364-453D-AEB3-AB3E0CC1445A.png"
          layout="responsive"
          width={806}
          height={981}
          alt="0F616418-4364-453D-AEB3-AB3E0CC1445A.png"
        />
      </WebExpert.Image>

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
        animate="show"
      >
        <WebExpert.LogoBox>
          <WebExpert.Logo></WebExpert.Logo>
        </WebExpert.LogoBox>
      </AnimateInView>

      <AnimateInView
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <WebExpert.FooterContainer>
          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <WebExpert.FooterContentContainer>
              <Image src="/nav_dev.png" width={52} height={52} alt="nav_dev.png" />
              <div>
                <WebExpert.FooterContainerTitle>
                  {'Web Design & Development'}
                </WebExpert.FooterContainerTitle>
                <WebExpert.FooterContainerText>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et.
                </WebExpert.FooterContainerText>
              </div>
            </WebExpert.FooterContentContainer>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 2,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <WebExpert.FooterContentContainer>
              <Image src="/nav_mobile.png" width={52} height={52} alt="nav_mobile.png" />
              <div>
                <WebExpert.FooterContainerTitle>Mobile App</WebExpert.FooterContainerTitle>
                <WebExpert.FooterContainerText>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et.
                </WebExpert.FooterContainerText>
              </div>
            </WebExpert.FooterContentContainer>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 2.5,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <WebExpert.FooterContentContainer>
              <Image src="/waves.png" width={52} height={52} alt="waves.png" />
              <div>
                <WebExpert.FooterContainerTitle>
                  Social Media Marketing
                </WebExpert.FooterContainerTitle>
                <WebExpert.FooterContainerText>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et.
                </WebExpert.FooterContainerText>
              </div>
            </WebExpert.FooterContentContainer>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 3,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <WebExpert.FooterContentContainer>
              <Image src="/piles.png" width={52} height={52} alt="piles.png" />
              <div>
                <WebExpert.FooterContainerTitle>Branding Services</WebExpert.FooterContainerTitle>
                <WebExpert.FooterContainerText>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et.
                </WebExpert.FooterContainerText>
              </div>
            </WebExpert.FooterContentContainer>
          </AnimateInView>
        </WebExpert.FooterContainer>
      </AnimateInView>
    </WebExpert>
  );
}

export default WebExpertComp;
