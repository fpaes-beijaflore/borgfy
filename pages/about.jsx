import 'bootstrap/dist/css/bootstrap.min.css';

import AnimateInView from '../src/Components/AnimateInView';
import FlipCard from '../src/Components/FlipCard';
import Footer from '../src/Components/Footer';
import Head from 'next/head';
import Idea from '../src/Components/Idea';
import Image from 'next/image';
import Navbar from '../src/Components/NavBar';
import React from 'react';
import styled from 'styled-components';

const About = styled.section`
  width: 100%;
  padding: 12px 0 0 150px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    margin: 130.9px auto 90px;
    width: 85%;
    max-width: 1616px;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin: 0 auto;
    width: 1140px;
    padding: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0 auto;
    width: 960px;
    padding: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 auto;
    width: 720px;
    padding: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 auto;
    width: 540px;
    padding: 0;
  }

  @media only screen and (max-width: 576px) {
    margin: 0 auto;
    width: 100%;
    padding: 0;
  }
`;

About.Title = styled.h2`
  width: 1256px;
  height: auto;
  margin: 130.9px 473px 90px 0;
  font-size: 2.8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    margin: 130.9px 0 90px;
    max-width: 1616px;
    padding: 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin: 130.9px 0 90px;
    width: 1140px;
    padding: 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 130.9px 0 90px;
    width: 960px;
    padding: 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 80px 0 60px;
    width: 720px;
    padding: 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 60px 0 40px;
    width: 540px;
    padding: 0;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 576px) {
    margin: 40px 0 20px;
    width: 100%;
    padding: 0;
    font-size: 1.5rem;
  }
`;

About.TextWrapper = styled.div`
  display: grid;
  grid-template-areas: 'mission vision';
  grid-gap: 20px 70px;
  justify-content: flex-start;

  h3 {
    font-size: 1.75rem;
    margin: 0 0 20px;
    padding: 0;
    text-align: center;
    font-weight: 600;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    max-width: 1616px;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 1140px;
    padding: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 960px;
    padding: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    width: 720px;
    padding: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    width: 540px;
    padding: 0;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    width: 100%;
    padding: 0;
  }
`;

About.Text = styled.p`
  width: 687px;
  height: 208px;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: left;
  color: #191919;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: auto;
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 540px;
    height: auto;
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a';
    width: 400px;
    height: auto;
    font-size: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 720px;
    height: auto;
    font-size: 1rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 540px;
    height: auto;
    font-size: 1rem;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    font-size: 1rem;
  }
`;

About.ImagesWrapper = styled.div`
  display: grid;
  grid-template-areas: 'a a';
  grid-gap: 30px;
  margin-top: 163px;
  grid-template-columns: 50% 50%;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    padding: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    padding: 0;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
    padding: 0;
  }
`;

About.ImageWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: auto;
    margin: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: auto;
    margin: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

const Team = styled.section`
  width: 100%;
  height: 1080px;
  background: #fff;
  width: 100%;
  height: auto;
  padding: 84px 152px 0 152px;
  background-color: #ffffff;
  margin-bottom: 162px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    margin: 130.9px auto 90px;
    max-width: 1616px;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin: 130.9px auto 90px;
    width: 1140px;
    padding: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0 auto;
    width: 960px;
    padding: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 auto;
    width: 720px;
    padding: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0 auto;
    width: 540px;
    padding: 0;
  }

  @media only screen and (max-width: 576px) {
    margin: 0 auto;
    width: 100%;
    padding: 0;
  }
`;

Team.Title = styled.h2`
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
  margin-bottom: 85px;

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

Team.CardsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'a a a';
  grid-gap: 30px;
  grid-auto-rows: 392px;
  justify-content: center;
  grid-auto-columns: 521px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    grid-template-areas: 'a a';
    padding: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-areas: 'a a';
    padding: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a';
    padding: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    padding: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    padding: 0;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    padding: 0;
  }
`;

function AboutComp() {
  return (
    <>
      <Head>
        <title>Borgfy - About Us</title>
        <meta
          name="description"
          content="We focus on helping start-ups, SMEs, MSME by giving shape to their ideas and developing their products. Our core expertise lies in building solutions that never go out of trend. We at Slogfy are committed to achieve and push the level of success all the time. With the power of technology, we deliver end-to-end solutions to start-ups and colossal enterprises."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - About Us" />
        <meta
          name="og:description"
          content="We focus on helping start-ups, SMEs, MSME by giving shape to their ideas and developing their products. Our core expertise lies in building solutions that never go out of trend. We at Slogfy are committed to achieve and push the level of success all the time. With the power of technology, we deliver end-to-end solutions to start-ups and colossal enterprises."
        />
        <meta name="og:url" content="https://borgfy.vercel.app/about" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <meta httpEquiv="content-language" content="en"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/about" />
      </Head>
      <Navbar navStyle="white" />
      <About>
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
          <About.Title>
            We are an organization with some of the most intellectual minds, working passionately to
            transform the world. We focus on helping start-ups, SMEs, MSME by giving shape to their
            ideas and developing their products. Our core expertise lies in building solutions that
            never go out of trend. We at Slogfy are committed to achieve and push the level of
            success all the time. With the power of technology, we deliver end-to-end solutions to
            start-ups and colossal enterprises.
          </About.Title>
        </AnimateInView>

        <About.TextWrapper>
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
            <h3>Our Mission</h3>
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
              <About.Text>
                Our mission is to meet and deliver all the business expectations of our client base.
                With years of expertise and knowledge of bleeding-edge technologies, we serve the
                corporate world with top-tech services like Artificial Intelligence, Website
                Designing, Custom IoT applications, Alluring Graphics, and many more. We enable
                innovation to sustain the growth of our clients by helping them build their dream
                projects.
              </About.Text>
            </AnimateInView>
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
            <h3>Our Vision</h3>
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
            >
              <About.Text>
                At Slogfy, we have the vision to make the world a better place with the latest and
                scalable technology. We aim at being the go-to partner for small and medium
                enterprises to fulfill their digital dreams. Our customer-driven approach is set to
                help, guide, and provide the best service to our customers. Our professionals are
                innovative and experienced in using various technologies to cater to the best
                results. We build lasting relationships by providing top-notch software solutions.{' '}
              </About.Text>
            </AnimateInView>
          </AnimateInView>
        </About.TextWrapper>

        <About.ImagesWrapper>
          <AnimateInView
            variants={{
              hidden: { scale: 0 },
              show: {
                scale: 1,
                transition: {
                  delay: 0,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
          >
            <About.ImageWrapper width="425px" height="350px" margin="180px 0 0 auto">
              <Image
                src="/BD4160FA-248E-4236-8933-73CD38970472.png"
                layout="responsive"
                width={425}
                height={350}
                alt="BD4160FA-248E-4236-8933-73CD38970472.png"
              />
            </About.ImageWrapper>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { scale: 0 },
              show: {
                scale: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
          >
            <About.ImageWrapper width="948px" height="641px">
              <Image
                src="/FD2505F1-B22D-4DEE-92C9-5CADEA08FB8F.png"
                layout="responsive"
                width={948}
                height={641}
                alt="FD2505F1-B22D-4DEE-92C9-5CADEA08FB8F.png"
              />
            </About.ImageWrapper>
          </AnimateInView>

          <AnimateInView
            variants={{
              hidden: { scale: 0 },
              show: {
                scale: 1,
                transition: {
                  delay: 1,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
          >
            <About.ImageWrapper width="100%" height="960px" margin="-112px auto">
              <Image
                src="/34DEFAC8-0DD0-498B-8563-27AC69B27C8A.png"
                layout="responsive"
                width={888}
                height={960}
                alt="34DEFAC8-0DD0-498B-8563-27AC69B27C8A.png"
              />
            </About.ImageWrapper>
          </AnimateInView>
          <AnimateInView
            variants={{
              hidden: { scale: 0 },
              show: {
                scale: 1,
                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
          >
            <About.ImageWrapper width="948px" height="1241px" marginTop="-80px">
              <Image
                src="/D556D5C0-CCDB-46AA-A21A-BB9F9665A616.png"
                layout="responsive"
                width={948}
                height={1241}
                alt="D556D5C0-CCDB-46AA-A21A-BB9F9665A616.png"
              />
            </About.ImageWrapper>
          </AnimateInView>
        </About.ImagesWrapper>
      </About>

      {/* <Team id="team">
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
          <Team.Title>
            <span className="text-style-1">MEET OUR</span> <br /> TEAM
          </Team.Title>
        </AnimateInView>
        <Team.CardsWrapper>
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
            <FlipCard
              imageUrl="1FE1E9A5-80D9-4DA5-97F8-7201EB19C8CD.png"
              name="Arfa Azizi"
              office="CTO"
            />
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
            <FlipCard
              imageUrl="1FE1E9A5-80D9-4DA5-97F8-7201EB19C8CI.jpg"
              name="Elon Musk"
              office="CEO"
            />
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
            <FlipCard
              imageUrl="692E6C88-9DD7-4D8E-937D-BC523EC4E5C1.png"
              name="Zavier Assad"
              office="Software engineer"
            />
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
          >
            <FlipCard
              imageUrl="FC2C74AC-8273-4FAA-9EBC-3425E5404B84.png"
              name="Tasmin Hoda"
              office="Cloud Computing Specialist"
            />
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
          >
            <FlipCard
              imageUrl="A2837C52-6DC0-4773-BAD6-FC2470AAB590.png"
              name="Nahiya Sultana"
              office="Business Analyst"
            />
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
          >
            <FlipCard
              imageUrl="BFE487AC-EC33-496D-A132-4E551D7E79D1.png"
              name="Yazid Khalid"
              office="Developer"
            />
          </AnimateInView>
        </Team.CardsWrapper>
      </Team> */}
      <Idea />
      <Footer />
    </>
  );
}

export default AboutComp;
