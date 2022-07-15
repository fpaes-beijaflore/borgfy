import 'bootstrap/dist/css/bootstrap.min.css';

import { Input, Select, SubmitButton, Textarea } from '../src/Components/ContactForm/index';
import React, { useState } from 'react';

import AnimateInView from '../src/Components/AnimateInView';
import Footer from '../src/Components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../src/Components/NavBar';
import axios from 'axios';
import styled from 'styled-components';

const Contact = styled.div`
  width: 100%;
`;

Contact.ContentWrapper = styled.section`
  width: 100%;
  height: auto;
  padding: 100px 0 0 152px;
  background: #fff;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 100px 0 0 40px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 100px 0 0 40px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 100px 0 0 40px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 100px 0 0 40px;
  }

  @media only screen and (max-width: 576px) {
    padding: 100px 0 0 40px;
  }
`;

Contact.Content = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  justify-content: space-between;
  grid-template-columns: 50% 50%;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
  }

  @media only screen and (max-width: 576px) {
    grid-template-areas: 'a';
    grid-template-columns: 100%;
  }
`;

Contact.TextWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    min-height: calc(100% + 80px);
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    min-height: calc(100% + 80px);
  }
  @media only screen and (max-width: 576px) {
    min-height: calc(100% + 80px);
  }
`;

Contact.Title = styled.h2`
  width: 309px;
  height: auto;
  font-size: 2rem;
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
    background-color: #191919;
    position: absolute;
    top: 24px;
    right: 70px;
  }
`;

Contact.ImageWrapper = styled.div`
  width: 829px;
  height: 863px;

  @media only screen and (min-width: 992px) and (max-width: 1920px) {
    width: 100%;
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

Contact.Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 0 0 100px 0;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 100px 0 40px;
    justify-content: space-between;
    padding: 0 40px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 100px 0 40px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 40px;
  }

  @media only screen and (max-width: 576px) {
    margin: 100px 0 40px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 40px;
  }
`;

Contact.AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Contact.AddressTittle = styled.h4`
  width: 101px;
  height: auto;
  margin: 0 350px 40px 0;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.72;
  letter-spacing: normal;
  text-align: left;
  color: #818181;
`;

Contact.AddressContent = styled.p`
  margin-bottom: 0;
  width: 458px;
  height: auto;
  font-size: 2.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 320px;
    font-size: 1rem;
  }

  @media only screen and (max-width: 576px) {
    width: 320px;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.small`
  color: #ff2e63;
  font-weight: 900;
  display: block;
  font-size: 1.2rem;
`;

const SuccessMessage = styled.small`
  color: #63ff2e;
  font-weight: 900;
  display: block;
  font-size: 1.2rem;
`;

function index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState({});

  const SERVICES = [
    'Web Design & Development',
    'Mobile App',
    'Hardware Prototyping',
    'PCB Design/ Assembly',
  ];

  const resetValues = () => {
    setName('');
    setEmail('');
    setService('');
    setComment('');
  };

  return (
    <>
      <Head>
        <title>Borgfy - Contact</title>
        <meta
          name="description"
          content="Send us a message with the service that you want and we'll contact you as soon as possible."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Contact" />
        <meta
          name="og:description"
          content="Send us a message with the service that you want and we'll contact you as soon as possible."
        />
        <meta name="og:url" content="https://borgfy.vercel.app/about" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <meta httpEquiv="content-language" content="en"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/about" />
      </Head>
      <Contact>
        <Navbar navStyle="white" />
        <Contact.ContentWrapper>
          <Contact.Content>
            <Contact.TextWrapper>
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
                <Contact.Title>
                  <span className="text-style-1">Hello</span> <br /> CONTACT US
                </Contact.Title>
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
              >
                <Input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                {response?.success === false && response?.type == 'name' && (
                  <ErrorMessage>{response?.message}</ErrorMessage>
                )}
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
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
                {response?.success === false && response?.type == 'email' && (
                  <ErrorMessage>{response?.message}</ErrorMessage>
                )}
              </AnimateInView>
              <AnimateInView
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 1.5,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
              >
                <Select
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Select Service"
                  data={SERVICES}
                />
                {response?.success === false && response?.type == 'service' && (
                  <ErrorMessage>{response?.message}</ErrorMessage>
                )}
              </AnimateInView>
              <AnimateInView
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 2,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
              >
                <Textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  placeholder="comment"
                />
                {response?.success === false && response?.type == 'comment' && (
                  <ErrorMessage>{response?.message}</ErrorMessage>
                )}
              </AnimateInView>

              <AnimateInView
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 2.5,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
              >
                <SubmitButton
                  placeholder="Send"
                  onClick={() => {
                    axios
                      .post('https://borgfy.vercel.app/api/sendmail', {
                        name,
                        email,
                        service,
                        comment,
                      })
                      .then((res) => {
                        setResponse(res.data);
                        if (res.data.succes) {
                          resetValues();
                        }
                      });
                  }}
                />
                {response?.succes === true && (
                  <SuccessMessage>Your message was sent.</SuccessMessage>
                )}
              </AnimateInView>
            </Contact.TextWrapper>

            <Contact.ImageWrapper>
              <Image
                src="/043856B4-757D-4937-AA70-1DB9701286A4.png"
                layout="responsive"
                width={829}
                height={863}
                alt="043856B4-757D-4937-AA70-1DB9701286A4.png"
              />
            </Contact.ImageWrapper>
          </Contact.Content>
        </Contact.ContentWrapper>

        <Contact.Address>
          <Contact.AddressWrapper>
            <Contact.AddressTittle>Address</Contact.AddressTittle>
            <Contact.AddressContent>
              B-78, Near Saket Metro station, <br />
              Gate no. 2, New Delhi,110030
            </Contact.AddressContent>
          </Contact.AddressWrapper>

          <Contact.AddressWrapper>
            <Contact.AddressTittle>Contact</Contact.AddressTittle>
            <Contact.AddressContent>
              (+91) 8130937887 <br /> (+91) 8851719915
            </Contact.AddressContent>
          </Contact.AddressWrapper>
        </Contact.Address>
        <Footer />
      </Contact>
    </>
  );
}

export default index;
