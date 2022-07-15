import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const OurWork = styled.section`
  width: 100%;
  height: auto;
  margin: -288px 0 0;
  padding: 287px 43px 0 79px;
  background-color: #000000;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    height: auto;
    padding: 287px 20px 0 20px;
  }

  @media only screen and (max-width: 576px) {
    height: auto;
    padding: 287px 20px 0 20px;
  }
`;

OurWork.Title = styled.h2`
  width: 290px;
  height: auto;
  margin: 0 155px 97px 73px;
  font-size: 3.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: relative;

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
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 0 97px 0;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0 0 97px;
  }
`;

OurWork.Container = styled.div`
  display: grid;
  grid-template-areas: 'a a';

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    grid-gap: 60px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    grid-gap: 60px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    grid-gap: 60px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    grid-gap: 60px;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    grid-gap: 60px;
  }
`;

OurWork.GridSection = styled.div`
  display: grid;
  grid-template-areas: 'a a';
  height: auto;

  @media only screen and (min-width: 1600px) {
    min-height: 587px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-auto-columns: 50% 50%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-auto-columns: 50% 50%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-auto-columns: 50% 50%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-auto-columns: 100%;
    justify-items: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-auto-columns: 100%;
    justify-items: center;
  }
`;

OurWork.GridFirstSection = styled.div`
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    order: 2;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    order: 2;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    order: 2;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    order: 2;
  }

  @media only screen and (max-width: 576px) {
    order: 2;
  }
`;
OurWork.GridSecondSection = styled.div`
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    order: 1;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    order: 1;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    order: 1;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    order: 1;
  }

  @media only screen and (max-width: 576px) {
    order: 1;
  }
`;

OurWork.GridFirstText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    width: 314px;
    height: 116px;
    font-size: 2.8rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;

OurWork.GridSecondText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    width: 378px;
    height: 116px;
    font-size: 2.8rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  @media only screen and (max-width: 576px) {
    h3 {
      width: 300px;
    }
  }
`;

OurWork.Button = styled.button`
  width: 330px;
  height: 83px;
  margin: 39px 0 81px 0;
  padding: 13px 100px 9px;
  border: solid 1px #ffffff;
  background: none;
  color: #ffffff;
  transition: 0.3s;

  .slogfy {
    width: 91px;
    height: 33px;
    margin: 0 19px 5px 20px;
    font-size: 1.7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
  }

  &:hover {
    background: #ffffff;
    color: #000000;
  }

  @media only screen and (max-width: 576px) {
    width: 300px;
  }
`;

const ReactImageWrapper = styled.div`
  width: '95px';
  height: '95px';
`;

const ChargingImageWrapper = styled.div`
  width: '384px';
  height: '582px';
`;

const DevelopmentImageWrapper = styled.div`
  width: '651px';
  height: '379px';
`;

function OurWorkComp() {
  return (
    <OurWork>
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
        <OurWork.Title>
          <span className="text-style-1">OUR</span> <br /> WORK
        </OurWork.Title>
      </AnimateInView>

      <OurWork.Container>
        <OurWork.GridFirstSection>
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
            <OurWork.GridSection>
              <ChargingImageWrapper>
                <Image
                  src="/97C1BDF1-CA14-4B94-925B-9DDC54E9CA85.png"
                  width={384}
                  height={582}
                  alt="97C1BDF1-CA14-4B94-925B-9DDC54E9CA85.png"
                />
              </ChargingImageWrapper>
              <OurWork.GridFirstText>
                <h3>Ev Charging IoT Hybrid App</h3>
                <ReactImageWrapper>
                  <Image
                    src="/iconfinder_React.js_logo_1174949.png"
                    width={95}
                    height={95}
                    alt="iconfinder_React.js_logo_1174949.png"
                  />
                </ReactImageWrapper>
                <OurWork.Button>
                  <p className="slogfy">SLOGFY</p>
                  <p>www.slogfy.com</p>
                </OurWork.Button>
              </OurWork.GridFirstText>
            </OurWork.GridSection>
          </AnimateInView>
        </OurWork.GridFirstSection>
        <OurWork.GridSecondSection>
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
          >
            <OurWork.GridSection>
              <DevelopmentImageWrapper>
                <Image
                  src="/791443F1-F480-4F8D-A767-A62CA58C76E3.png"
                  width={651}
                  height={379}
                  alt="791443F1-F480-4F8D-A767-A62CA58C76E3.png"
                />
              </DevelopmentImageWrapper>
              <OurWork.GridSecondText>
                <h3>Web Development</h3>
                <ReactImageWrapper>
                  <Image
                    src="/iconfinder_React.js_logo_1174949.png"
                    width={95}
                    height={95}
                    alt="iconfinder_React.js_logo_1174949.png"
                  />
                </ReactImageWrapper>
                <OurWork.Button>
                  <p className="slogfy">SLOGFY</p>
                  <p>www.slogfy.com</p>
                </OurWork.Button>
              </OurWork.GridSecondText>
            </OurWork.GridSection>
          </AnimateInView>
        </OurWork.GridSecondSection>
      </OurWork.Container>
    </OurWork>
  );
}

export default OurWorkComp;
