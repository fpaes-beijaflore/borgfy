import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Clients = styled.section`
  width: 100%;
  height: 736px;
  display: grid;
  grid-template-areas: 'logos image';
  margin: 0 0 44px;
  justify-content: end;
  grid-gap: 311px;
  align-items: center;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    grid-template-columns: 50% 50%;
    grid-gap: 0;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-columns: 50% 50%;
    grid-gap: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a';
    padding: 0 50px;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    padding: 0 50px;
    justify-content: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    padding: 0 50px;
    justify-content: center;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    padding: 0 50px;
    justify-content: center;
  }
`;

Clients.LogosWrapper = styled.div`
  display: grid;
  grid-template-areas: 'a a';
  grid-gap: 100px 100px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    padding-left: 152px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding-left: 132px;
  }

  @media only screen and (max-width: 576px) {
    grid-gap: 40px;
  }
`;

Clients.LogoImageWrapper = styled.div`
  width: 168px;
  height: 78px;
`;

Clients.ImageWrapper = styled.div`
  width: 900px;
  height: 736px;

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

function ClientsComp() {
  return (
    <Clients>
      <Clients.LogosWrapper>
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
          <Clients.LogoImageWrapper>
            <Image src="/mspe.jpg" layout="responsive" width={168} height={78} alt="mspe.jpg" />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image src="/mvare.jpg" layout="responsive" width={168} height={78} alt="mvare.jpg" />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image
              src="/foodwedo.jpg"
              layout="responsive"
              width={168}
              height={78}
              alt="foodwedo.jpg"
            />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image src="/homepi.jpg" layout="responsive" width={168} height={78} alt="homepi.jpg" />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image src="/neeraj.jpg" layout="responsive" width={168} height={78} alt="neeraj.jpg" />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image src="/shamsi.jpg" layout="responsive" width={168} height={78} alt="shamsi.jpg" />
          </Clients.LogoImageWrapper>
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
          <Clients.LogoImageWrapper>
            <Image
              src="/smartkitchen.jpg"
              layout="responsive"
              width={168}
              height={78}
              alt="smartkitchen.jpg"
            />
          </Clients.LogoImageWrapper>
        </AnimateInView>
        <AnimateInView
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delay: 3.5,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
        >
          <Clients.LogoImageWrapper>
            <Image src="/bhks.jpg" layout="responsive" width={168} height={78} alt="bhks.jpg" />
          </Clients.LogoImageWrapper>
        </AnimateInView>
      </Clients.LogosWrapper>
      <Clients.ImageWrapper>
        <Image
          src="/A9B8A4AE-5426-424E-9774-FAB636ACF376.png"
          layout="responsive"
          width={900}
          height={736}
          alt="A9B8A4AE-5426-424E-9774-FAB636ACF376.png"
        />
      </Clients.ImageWrapper>
    </Clients>
  );
}

export default ClientsComp;
