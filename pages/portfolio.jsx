import 'bootstrap/dist/css/bootstrap.min.css';

import AnimateInView from '../src/Components/AnimateInView';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../src/Components/NavBar';
import React from 'react';
import styled from 'styled-components';

const Portfolio = styled.div`
  width: 100%;
`;

Portfolio.WhiteContent = styled.section`
  background: #ffffff;
  height: auto;
  padding: 140px 227px 180px 331px;
  display: grid;
  grid-template-areas: 'image text';
  grid-gap: 95px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    padding: 100px;
    grid-template-columns: 250px auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 100px;
    grid-template-columns: 250px auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 100px;
    grid-template-columns: 250px auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    padding: 100px;
    justify-items: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    padding: 100px;
    justify-items: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    padding: 40px;
    justify-items: center;
  }
`;

Portfolio.BlackContent = styled.section`
  background: #000000;
  height: auto;
  padding: 140px 227px 180px 331px;
  display: grid;
  grid-template-areas: 'text image';
  grid-gap: 95px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    padding: 100px;
    grid-template-columns: auto 250px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 100px;
    grid-template-columns: auto 250px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 100px;
    grid-template-columns: auto 250px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    padding: 100px;
    justify-items: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    padding: 100px;
    justify-items: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    padding: 40px;
    justify-items: center;
  }
`;

Portfolio.WhiteImageWrapper = styled.div`
  width: 363px;
  height: 711px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;
Portfolio.BlackImageWrapper = styled.div`
  width: 388px;
  height: 760px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;

Portfolio.WhiteTextWrapper = styled.div`
  width: 100%;
  text-align: left;
  letter-spacing: normal;
  font-style: normal;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  color: #191919;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 458px;
  margin-top: 120px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    align-items: center;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    align-items: center;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 576px) {
    align-items: center;
    font-size: 1.3rem;
  }
`;
Portfolio.BlackTextWrapper = styled.div`
  width: 100%;
  text-align: left;
  letter-spacing: normal;
  font-style: normal;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  color: #a0a0a0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 458px;
  margin-top: 120px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin-top: 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    align-items: center;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    align-items: center;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 576px) {
    align-items: center;
    font-size: 1.3rem;
  }
`;

Portfolio.TextImageWrapper = styled.div`
  width: 200px;
  height: 63px;
`;

Portfolio.ButtonImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
`;

Portfolio.ButtonImageWrapperTitle = styled.div`
  width: 45px;
  height: 45px;
  position: relative;

  &:before {
    width: max-content;
    background-color: white;
    border: 1px solid #000;
    border-radius: 16px;
    color: #444;
    content: attr(data-title);
    display: none;
    font-size: 1rem;
    padding: 5px 5px;
    position: absolute;
    top: 56px;
    left: 5px;
    z-index: 1;
  }
  &:hover::before {
    display: block;
  }
`;

Portfolio.WhiteButtonWrapper = styled.div`
  width: 213px;
  height: 84px;
  padding: 20px 49px 19px 44px;
  border-radius: 10px;
  border: solid 1px #212426;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

Portfolio.BlackButtonWrapper = styled.div`
  width: 213px;
  height: 84px;
  padding: 20px 49px 19px 44px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function PortfolioComp() {
  return (
    <>
      <Head>
        <title>Borgfy - Portfolio</title>
        <meta name="description" content="Learn more about our portfolio and successful cases." />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Portfolio" />
        <meta
          name="og:description"
          content="Learn more about our portfolio and successful cases."
        />
        <meta name="og:url" content="https://borgfy.vercel.app/portfolio" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <meta httpEquiv="content-language" content="en"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/portfolio" />
      </Head>
      <Portfolio>
        <NavBar navStyle="white" />

        <Portfolio.WhiteContent>
          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
          >
            <Portfolio.WhiteImageWrapper>
              <Image
                src="/40BCBA66-074B-43EB-8849-16287478369A.png"
                layout="responsive"
                width={363}
                height={711}
                alt="40BCBA66-074B-43EB-8849-16287478369A.png"
              />
            </Portfolio.WhiteImageWrapper>
          </AnimateInView>
          <Portfolio.WhiteTextWrapper>
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
              <Portfolio.TextImageWrapper>
                <Image
                  src="/8DF11006-A068-4913-9262-4D914B2EFE43.png"
                  layout="responsive"
                  width={200}
                  height={63}
                  alt="8DF11006-A068-4913-9262-4D914B2EFE43.png"
                />
              </Portfolio.TextImageWrapper>
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
            >
              <p>
                Charzer is an IoT EV Charging Cross-Platform App Build On React native Platform With
                Full Dynamic UI/UX And Detailing its has full custom development of Frontend
                /Backend Admin Side for Dynamic Data build on Django
              </p>
            </AnimateInView>

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
            >
              <Portfolio.WhiteButtonWrapper>
                <Link href="https://play.google.com/store/apps/details?id=com.first.faebikes.faeconsumerapp&hl=en_IN&gl=US">
                  <a>
                    <Portfolio.ButtonImageWrapper>
                      <Image
                        src="/6C6CA8D6-97C2-4533-978A-095F28F16802.png"
                        layout="responsive"
                        width={45}
                        height={45}
                        alt="6C6CA8D6-97C2-4533-978A-095F28F16802.png"
                      />
                    </Portfolio.ButtonImageWrapper>
                  </a>
                </Link>
                <Portfolio.ButtonImageWrapperTitle data-title="Under Testing">
                  <Image
                    src="/829F2115-36E5-4C3E-A12A-391C74937DAC.png"
                    layout="responsive"
                    width={45}
                    height={45}
                    alt="829F2115-36E5-4C3E-A12A-391C74937DAC.png"
                  />
                </Portfolio.ButtonImageWrapperTitle>
              </Portfolio.WhiteButtonWrapper>
            </AnimateInView>
          </Portfolio.WhiteTextWrapper>
        </Portfolio.WhiteContent>

        <Portfolio.BlackContent>
          <Portfolio.BlackTextWrapper>
            <AnimateInView
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delay: 0,
                    duration: 0.5,
                  },
                },
              }}
              initial="hidden"
            >
              <Portfolio.TextImageWrapper>
                <Image
                  src="/8DF11006-A068-4913-9262-4D914B2EFE43.png"
                  layout="responsive"
                  width={200}
                  height={63}
                  alt="8DF11006-A068-4913-9262-4D914B2EFE43.png"
                />
              </Portfolio.TextImageWrapper>
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
              <p>
                Elegant Custom UI/UX Design For User Video Chatting Entertainment App, Quality
                Designed by Ux Researcher to give best User Experience Flow from User Profiling to
                Payment booking , Premium Vectors and Icons being Used for smooth easy user
                interfaceace
              </p>
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
            >
              <Portfolio.BlackButtonWrapper>
                <Portfolio.ButtonImageWrapper>
                  <Image
                    src="/6C6CA8D6-97C2-4533-978A-095F28F16802.png"
                    layout="responsive"
                    width={45}
                    height={45}
                    alt="6C6CA8D6-97C2-4533-978A-095F28F16802.png"
                  />
                </Portfolio.ButtonImageWrapper>

                <Portfolio.ButtonImageWrapper>
                  <Image
                    src="/829F2115-36E5-4C3E-A12A-391C74937DAC.png"
                    layout="responsive"
                    width={45}
                    height={45}
                    alt="829F2115-36E5-4C3E-A12A-391C74937DAC.png"
                  />
                </Portfolio.ButtonImageWrapper>
              </Portfolio.BlackButtonWrapper>
            </AnimateInView>
          </Portfolio.BlackTextWrapper>

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
          >
            <Portfolio.BlackImageWrapper>
              <Image
                src="/FEC7120B-F5CF-4C8E-9BA6-3CFD38451C63.png"
                layout="responsive"
                width={388}
                height={760}
                alt="FEC7120B-F5CF-4C8E-9BA6-3CFD38451C63.png"
              />
            </Portfolio.BlackImageWrapper>
          </AnimateInView>
        </Portfolio.BlackContent>
      </Portfolio>
    </>
  );
}

export default PortfolioComp;
