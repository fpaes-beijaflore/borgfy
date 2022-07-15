import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.section`
  height: auto;
  width: 100%;
  background: #fff;
  position: relative;
  display: grid;
  grid-template-areas: 'logo content';
`;

Footer.ImageWrapper = styled.div`
  width: 1603px;
  height: 627px;
`;

Footer.Content = styled.div`
  position: absolute;
  width: 1601px;
  height: 487px;
  right: 0;
  bottom: 0;
  padding: 80px 0 0 80px;
  background-color: #efefef;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

Footer.ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: 'logo address services expertise technologies socials';
  height: 297px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    grid-template-areas: 'a a a a a a';
    padding: 0;
    grid-template-columns: 200px 240px 240px 240px 240px 100px;
    -webkit-box-pack: right;
    -webkit-justify-content: right;
    -ms-flex-pack: right;
    justify-content: right;
    grid-gap: 15px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-areas: 'a a a a a a';
    padding: 0;
    grid-template-columns: 200px 200px 200px 200px 200px 100px;
    justify-content: right;
    grid-gap: 15px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-areas: 'a a a a a a';
    padding: 0;
    grid-template-columns: 200px 160px 170px 200px 140px 50px;
    justify-content: right;
    grid-gap: 15px;
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

Footer.Title = styled.h4`
  width: 58px;
  height: auto;
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

Footer.LogoWrapper = styled.div`
  width: 200px;
  height: 54px;
`;

Footer.Address = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.AdressContent = styled.p`
  width: 161px;
  height: 88px;
  margin: 30px 0 42px 0;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
`;

Footer.AdressPhone = styled.div`
  width: 140px;
  height: 20px;
  margin: 0px 0 20px 0;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Footer.Services = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.ServicesContent = styled.div`
  width: 195px;
  height: 156px;
  margin: 30px 0 14px 0;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #131313;

  p {
    margin: 0;
  }
`;

Footer.Expertise = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.ExpertiseContent = styled.div`
  width: 221px;
  height: 122px;
  margin: 30px 0 8px 0;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #131313;

  p {
    margin: 0;
  }
`;

Footer.Technologies = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.TechnologiesContent = styled.div`
  width: 221px;
  height: 122px;
  margin: 30px 0 8px 0;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #131313;

  p {
    margin: 0;
  }
`;

Footer.Socials = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;

  &:before {
    content: '';
    width: 2px;
    height: 75%;
    position: absolute;
    right: 100px;
    top: 8%;
    background: #d3d3d3;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    &:before {
      right: 50px;
    }
  }
`;

Footer.SocialsIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin: 25px auto;
  cursor: pointer;
`;

Footer.Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 112px;

  a {
    margin-right: 130px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    justify-content: center;

    a {
      margin-right: 80px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0 auto;
  }

  .Who-we-are {
    width: 83px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Services {
    width: 59px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Team {
    width: 40px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Work {
    width: 36px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Career {
    width: 49px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Contact-Us {
    width: 77px;
    height: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
`;

Footer.Copyright = styled.div`
  height: 60px;
  background-color: #e6e6e6;
  width: 1603px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 14px 223px 14px 80px;

  p {
    margin-bottom: 0;
    justify-content: space-between;
    display: flex;
  }

  .Co-All-rights-reserved {
    opacity: 0.3;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }
  .Design-Developed-By {
    opacity: 0.3;
    font-size: 0.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    padding: 14px 80px 14px 80px;
  }
`;

function FooterComp() {
  return (
    <Footer>
      <Footer.ImageWrapper>
        <Image
          src="/88AA281E-7741-440B-ACAB-262D64F2D898.png"
          layout="responsive"
          width={1603}
          height={627}
          alt="88AA281E-7741-440B-ACAB-262D64F2D898.png"
        />
      </Footer.ImageWrapper>
      <Footer.Content>
        <Footer.ContentWrapper>
          <Footer.LogoWrapper>
            <Image src="/logo.jpg" width={200} height={54} alt="logo.jpg" />
          </Footer.LogoWrapper>
          <Footer.Address>
            <Footer.Title>Address</Footer.Title>
            <Footer.AdressContent>
              B-78, Near Saket Metro station, Gate no. 2, New Delhi,110030
            </Footer.AdressContent>
            <Footer.AdressPhone>
              <Image src="/telephone.png" width={14} height={14} alt="telephone.png" /> (+91)
              8130937887
            </Footer.AdressPhone>
            <Footer.AdressPhone>
              <Image src="/telephone.png" width={14} height={14} alt="telephone.png" /> (+91)
              8851719915
            </Footer.AdressPhone>
          </Footer.Address>
          <Footer.Services>
            <Footer.Title>Services</Footer.Title>
            <Footer.ServicesContent>
              <p>Digital Branding</p>
              <p>Search Engine Optimisation</p>
              <p>Digital Marketing</p>
              <p>AR / VR</p>
              <p>2D/3D Animation</p>
            </Footer.ServicesContent>
          </Footer.Services>
          <Footer.Expertise>
            <Footer.Title>Expertise</Footer.Title>
            <Footer.ExpertiseContent>
              <p>iOS/Android App Development</p>
              <p>Social Media Marketing</p>
              <p>E-Commerce Development</p>
              <p>{`Web design & Web Developemt`}</p>
            </Footer.ExpertiseContent>
          </Footer.Expertise>
          <Footer.Technologies>
            <Footer.Title>Technologies</Footer.Title>
            <Footer.TechnologiesContent>
              <p>Laravel</p>
              <p>Magento</p>
              <p>Codeigniter</p>
              <p>.Net Development</p>
              <p>Word Press</p>
            </Footer.TechnologiesContent>
          </Footer.Technologies>
          <Footer.Socials>
            <Link href="https://www.facebook.com/borgfy">
              <a target="_blank" rel="noreferrer">
                <Footer.SocialsIconWrapper>
                  <Image src="/facebook.png" width={16} height={16} alt="facebook.png" />
                </Footer.SocialsIconWrapper>
              </a>
            </Link>
            <Link href="https://www.instagram.com/borgfy/">
              <a target="_blank" rel="noreferrer">
                <Footer.SocialsIconWrapper>
                  <Image src="/instagram.png" width={16} height={16} alt="instagram.png" />
                </Footer.SocialsIconWrapper>
              </a>
            </Link>
            <Footer.SocialsIconWrapper>
              <Image src="/pinterest.png" width={16} height={16} alt="pinterest.png" />
            </Footer.SocialsIconWrapper>
            <Footer.SocialsIconWrapper>
              <Image src="/youtube.png" width={16} height={16} alt="youtube.png" />
            </Footer.SocialsIconWrapper>
            <Link href="https://twitter.com/borgfy">
              <a target="_blank" rel="noreferrer">
                <Footer.SocialsIconWrapper>
                  <Image src="/twitter.png" width={16} height={16} alt="twitter.png" />
                </Footer.SocialsIconWrapper>
              </a>
            </Link>
            <Footer.SocialsIconWrapper>
              <Image
                src="/up-arrow.png"
                width={16}
                height={16}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                alt="up-arrow.png"
              />
            </Footer.SocialsIconWrapper>
          </Footer.Socials>
        </Footer.ContentWrapper>
        <Footer.Links>
          <Link href="/about">
            <a className="Who-we-are">Who we are</a>
          </Link>
          <Link href="/services">
            <a className="Services">Services</a>
          </Link>
          <Link href="/about#team">
            <a className="Team">Team</a>
          </Link>
          <Link href="/portfolio">
            <a className="Work">Work</a>
          </Link>
          <Link href="/">
            <a className="Career">Career</a>
          </Link>
          <Link href="/contact">
            <a className="Contact-Us">Contact Us</a>
          </Link>
        </Footer.Links>
        <Footer.Copyright>
          <p>
            <span className="Co-All-rights-reserved">© 2020 Slogfy Co. All rights reserved.</span>{' '}
            <span className="Design-Developed-By">
              {`Design & Developed By`}: <strong>Fpaes</strong>
            </span>
          </p>
        </Footer.Copyright>
      </Footer.Content>
    </Footer>
  );
}

export default FooterComp;
