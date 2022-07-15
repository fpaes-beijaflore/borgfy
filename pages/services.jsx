import 'bootstrap/dist/css/bootstrap.min.css';

import AnimateInView from '../src/Components/AnimateInView';
import Footer from '../src/Components/Footer';
import Head from 'next/head';
import IdeaComp from '../src/Components/Idea';
import Image from 'next/image';
import NavBar from '../src/Components/NavBar';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Services = styled.div`
  width: 100%;
`;

Services.WhiteContent = styled.section`
  background: #fff;
  height: 850px;
  padding: 115px 267px 114px 151px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    padding: 115px 151px 114px 151px;
    height: auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 115px 130px 114px 130px;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 115px 110px 114px 110px;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 115px 90px 114px 90px;
    height: auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 115px 70px 114px 70px;
    height: auto;
  }

  @media only screen and (max-width: 576px) {
    padding: 115px 50px 114px 50px;
    height: auto;
  }
`;

Services.WhiteTextWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image text';
  grid-gap: 120px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    grid-gap: 80px;
    grid-template-columns: calc(100% - 734px) auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-gap: 80px;
    grid-template-columns: calc(100% - 734px) auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-gap: 80px;
    grid-template-columns: calc(100% - 734px) auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }
`;

Services.WhiteText = styled.div`
  display: flex;
  flex-direction: column;
  width: 907px;
  height: 458px;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  justify-content: space-evenly;
  margin-top: 80px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    margin-top: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

Services.BlackSectionTitle = styled.h2`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #000;
`;

Services.WhiteTitle = styled.h2`
  color: #000;
  font-size: 2.1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
`;

Services.WhiteButton = styled.button`
  border: solid 1px #707070;
  background-color: #ffffff;
  width: 231px;
  height: 70px;
  padding: 19px 37px 18px 38px;
  border-radius: 8px;
`;

Services.BlackContent = styled.section`
  background: #000;
  height: 850px;
  padding: 115px 267px 114px 151px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    padding: 115px 151px 114px 151px;
    height: auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 115px 130px 114px 130px;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 115px 110px 114px 110px;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 115px 90px 114px 90px;
    height: auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 115px 70px 114px 70px;
    height: auto;
  }

  @media only screen and (max-width: 576px) {
    padding: 115px 50px 114px 50px;
    height: auto;
  }
`;

Services.BlackTextWrapper = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  grid-gap: 120px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    grid-gap: 80px;
    grid-template-columns: auto calc(100% - 734px);
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-gap: 80px;
    grid-template-columns: auto calc(100% - 734px);
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-gap: 80px;
    grid-template-columns: auto calc(100% - 734px);
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-gap: 80px;
    justify-items: center;
  }
`;

Services.BlackText = styled.div`
  display: flex;
  flex-direction: column;
  width: 907px;
  height: 458px;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: left;
  color: #d1d1d1;
  justify-content: space-evenly;
  margin-top: 80px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    margin-top: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

Services.BlackTitle = styled.h2`
  color: #fff;
  font-size: 2.1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
`;

Services.BlackButton = styled.button`
  background-color: #ffffff;
  width: 231px;
  height: 70px;
  padding: 19px 37px 18px 38px;
  border-radius: 8px;
`;

Services.ImageWrapper = styled.div`
  width: 474px;
  height: 621px;
  justify-content: center;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 474px;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 474px;
    height: auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 474px;
    height: auto;
  }

  @media only screen and (max-width: 576px) {
    width: 320px;
    height: auto;
  }
`;

function ServicesComp() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Borgfy - Services</title>
        <meta
          name="description"
          content="Innovation consultancy for companies. We make your company more agile, intelligent and competitive through innovation. Meet our services. "
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Services" />
        <meta
          name="og:description"
          content="Innovation consultancy for companies. We make your company more agile, intelligent and competitive through innovation. Meet our services. "
        />
        <meta name="og:url" content="https://borgfy.vercel.app/services" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <meta httpEquiv="content-language" content="en"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/services" />
      </Head>
      <Services>
        <NavBar navStyle="white" />

        <section id="software">
          <Services.BlackSectionTitle>Software Development</Services.BlackSectionTitle>
          <Services.WhiteContent id="artificial_inteligence">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>Artificial Intelligence</Services.WhiteTitle>
                  <p>
                    Artificial intelligence provides a platform for you to enhance customer services
                    like chatbots, speech recognition, image processing, and many more. AI not only
                    increases the productivity of any business but also reduces expenses to bring-in
                    innovative opportunities. We offer various AI services including, task
                    automation, custom AI, predictive analysis, cloud service, data analytics, data
                    visualization, and conversational analysis. AI-driven technology permits
                    effortless interactions and simple data explorations to expand the global reach
                    of your business.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
          <Services.BlackContent id="mobile_app">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>Mobile App</Services.BlackTitle>
                  <p>
                    Our mobile applications are a perfect blend of cutting-edge technologies,
                    striking strategies, and stunning UI/UX design services. From iOS app
                    development and Android app development, to React Native app development and
                    enterprise mobile solutions, we know how to make things happen. We also create
                    custom mobile apps using AI and IoT solutions. Slogfy leverages the mobile
                    device competencies to create a memorable and effortless end-user experience to
                    enhance your brand’s growth.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
          <Services.WhiteContent id="website_webapp">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>Website/ Webapp</Services.WhiteTitle>
                  <p>
                    We craft responsive, customized, and vivid websites for next-gen businesses. Our
                    dynamic web development service is ideal for small-scale to large-scale
                    projects. Our web solutions use UI/UX design, customized logos, responsiveness,
                    and wire-frame technologies to deliver a consistent user experience. We bring
                    front-end and back-end architecture together to meet your business requirements.
                    With the latest technologies, our developers produce websites that leave a mark
                    on the memories.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
          <Services.BlackContent id="ecommerce">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>E-commerce</Services.BlackTitle>
                  <p>
                    At Slogfy, we adopt out-of-the-box strategies to build high-performance
                    E-commerce websites. Our eCommerce websites use modern tools, adaptable
                    solutions for desktops and mobiles, and a responsive interface. We help you get
                    all your products and services across the web with features like an online
                    payment gateway, shipping carts, back-end architecture, and other eCommerce
                    portals. Our eCommerce management service covers cost-effective solutions and
                    SEO for better coverage across the internet.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
          <Services.WhiteContent id="crm_cms">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>CRM/CMS</Services.WhiteTitle>
                  <p>
                    We are the best CRM/CMS providers that offer solutions to varied business needs.
                    Our CRM/CMS covers all the customer touchpoints and provides optimum customer
                    solutions. At Slogfy, we have expertise in CRM development solutions that help
                    you diversify your industry. We cover aspects like document management systems,
                    workflow management, enterprise content search, and web content management
                    systems at affordable prices. You can improve lead management, increase
                    productivity, boost ROI, and secure your business data with CRM/CMS.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
        </section>

        <section id="hardware">
          <Services.BlackSectionTitle>Hardware Development</Services.BlackSectionTitle>
          <Services.BlackContent id="hardware_prototyping">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>Hardware Prototyping</Services.BlackTitle>
                  <p>
                    Your bright ideas need to be turned into a new product. Today, society
                    progresses riding on innovation. We help you turn your ideas into reality. Our
                    cloud-enabled hardware prototyping has helped many modern inventors and
                    developers. With services like seamless sourcing and inventory management, we
                    ensure high-quality results. Our innovators value partnering with startups or
                    businesses with creative product ideas and are ready to bring them to market.
                    Our collaborative approach has helped many people create a reality out of their
                    concept.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
          <Services.WhiteContent id="custom_iot">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>Custom IoT</Services.WhiteTitle>
                  <p>
                    We are a team of expert IoT developers. We provide a wide range of services,
                    from product conceptualization to ongoing IoT development services. IoT can
                    provide endless opportunities to your business by leveraging the business
                    operations. IoT devices record and transfer data to monitor important processes,
                    provides new insights, and allows companies to make more informed decisions. We
                    create IoT devices that help in streamlining business operations, enhance
                    productivity, and boost customer experience. We are flexible to various
                    approaches of businesses for custom IoT implementations.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
          <Services.BlackContent id="robotics">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>Soft Robotics</Services.BlackTitle>
                  <p>
                    Soft robotics opens a new field to automation through its applications.
                    Replicate the finesse of human touch in handling jobs. Our service assists in
                    handling products across various industries, such as food, cosmetics, jewelery,
                    electronics, and many more. Soft robotics solutions blend the speed of robots
                    with the soft touch of human hands. Our soft robotics uses unique grasping, 3D
                    perceptions, and AI technologies that deliver high-performance, reliable, and
                    top-notch solutions for various products.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
          <Services.WhiteContent id="pcb_assembly">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>PCB Design/ Assembly</Services.WhiteTitle>
                  <p>
                    We take pride in creating professional PCB design services of almost all types
                    for our customers. Our experts can create highly-complex PCB layout designs with
                    speed and accuracy. We have expertise in sensitive signal routing for Analog &
                    Digital circuits. Our experts take you from prototyping your initial idea, to
                    assembling and delivering the final product to the customer. It is high time for
                    your business to upgrade your old PCBs with obsolete components to the latest
                    cutting-edge technology.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
        </section>

        <section id="graphics">
          <Services.BlackSectionTitle>Graphics</Services.BlackSectionTitle>
          <Services.BlackContent id="industrial_design">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>Products/Industrial Design</Services.BlackTitle>
                  <p>
                    Industrial/ Product design is no more a design today, it has become a business
                    strategy. We at Slogfy offer, comprehensive industrial design, product design
                    while engaging with customers at all stages of the product lifecycle. Our
                    designers leverage their skills to deliver innovative solutions. Our quality
                    designs with a custom fit make your business stand out. From product designs
                    like books, magazines, and print media to colossal industrial designs, our
                    experts holistically bring a unique idea each time on the table.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
          <Services.WhiteContent id="marketing_collateral">
            <Services.WhiteTextWrapper>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
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
                <Services.WhiteText>
                  <Services.WhiteTitle>
                    Marketing Collateral/ Promotional Designs{' '}
                  </Services.WhiteTitle>
                  <p>
                    Slogfy is the best graphic design company. Our professionals are skilled to
                    bring you the best of graphics, from business cards and print ads to social
                    media posts and more, our media design can take your brand identity to a whole
                    new level. We offer catchy banners, brochures, and posters to promote your
                    business with the right audience. We help you create high-quality logos and
                    flyers for branding and promotions. We design promotion strategies that stand
                    out. Our promotional designs hit the right audience and expands your business
                    opportunities.
                  </p>
                  <Services.WhiteButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.WhiteButton>
                </Services.WhiteText>
              </AnimateInView>
            </Services.WhiteTextWrapper>
          </Services.WhiteContent>
          <Services.BlackContent id="saas development">
            <Services.BlackTextWrapper>
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
                <Services.BlackText>
                  <Services.BlackTitle>SaaS Development</Services.BlackTitle>
                  <p>
                    Slogfy has rich experience in helping start-ups and SMEs in building
                    unparalleled SaaS applications. We assist our clients from development to the
                    deployment phase. If you’re a finance, entertainment, travel, healthcare,
                    publishing, or any other industry looking to fulfil your technological
                    milestones, we are the right choice for you. Our end-to-end approach implements
                    all required components for SaaS solutions including, mobile apps, web apps,
                    cloud hosting, APIs, and data storage. Our on-time delivery ensuring security
                    and quality of SaaS products make us the best choice.
                  </p>
                  <Services.BlackButton onClick={() => router.push('/contact')}>
                    Contact Now
                  </Services.BlackButton>
                </Services.BlackText>
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
                <Services.ImageWrapper>
                  <Image
                    src="/FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                    layout="responsive"
                    width={474}
                    height={621}
                    alt="FBAB4AC5-7243-4A65-AEF0-CB4A695E0679.png"
                  />
                </Services.ImageWrapper>
              </AnimateInView>
            </Services.BlackTextWrapper>
          </Services.BlackContent>
        </section>

        <IdeaComp />
        <Footer />
      </Services>
    </>
  );
}

export default ServicesComp;
