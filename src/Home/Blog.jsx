import AnimateInView from '../Components/AnimateInView';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Blog = styled.section`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 110px 152px;
  background-color: #f8f8f8;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 110px 132px;
    height: auto;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 110px 112px;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 110px 40px;
    height: auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 110px 20px;
    height: auto;
  }

  @media only screen and (max-width: 576px) {
    padding: 110px 20px;
    height: auto;
  }
`;

Blog.Title = styled.h2`
  width: 480px;
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
    right: 190px;
  }

  @media only screen and (max-width: 576px) {
    width: 320px;
    height: auto;

    &::before {
      right: 20px;
    }
  }
`;

Blog.PostWrapper = styled.div`
  display: grid;
  grid-template-areas: 'a a a';
  grid-gap: 50px;
  margin-top: 75px;
  width: 100%;
  height: 670px;
`;

Blog.Post = styled.div`
  margin: 50px 50px 0 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 50px 25px 0 0;
  }

  @media only screen and (max-width: 576px) {
    margin: 50px 25px 0 0;
  }
`;

Blog.PostTitle = styled.h3`
  width: 462px;
  height: auto;
  margin: 41px 21px 34px 22px;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 41px 0 34px 0;
    padding: 0 20px;
    height: auto;
  }
`;

Blog.PostContent = styled.p`
  width: 462px;
  height: 126px;
  margin: 0 21px 14px 22px;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #505050;

  @media only screen and (min-width: 1400px) and (max-width: 1920px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
    height: auto;
  }
`;

Blog.PostDate = styled.p`
  width: 462px;
  height: 25px;
  margin: 0 21px 24px 22px;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #8d8d8d;

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

Blog.ReadMoreButton = styled.button`
  display: inline;
  cursor: pointer;
  background: none;
  border: none;
  color: #ff2e63;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
`;

Blog.SliderWrapper = styled.div`
  .slick-slider .slick-list {
    padding: 10px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 524px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 524px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 524px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0 auto;
  }
`;

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function BlogComp({ posts }) {
  const router = useRouter();
  const clickHandler = (post_id) => {
    router.push(`/post/${post_id}`);
  };
  return (
    <Blog>
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
        <Blog.Title>
          <span className="text-style-1">READ</span> <br /> IMPORTANT THINGS
        </Blog.Title>
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
        <Blog.SliderWrapper>
          <Slider {...settings}>
            {posts.map((post) => (
              <div key={`Post__${post._id}`}>
                <Blog.Post>
                  <Image
                    src={`${process.env.BUCKET_LINK}${post.image}`}
                    layout="responsive"
                    width={505}
                    height={325}
                    alt={`${post.image}`}
                  />
                  <Blog.PostTitle>
                    {post.title.split(' ').splice(0, 10).join(' ')}...
                  </Blog.PostTitle>
                  <Blog.PostContent>
                    {post.text.split(' ').splice(0, 25).join(' ')}...
                    <Blog.ReadMoreButton onClick={() => clickHandler(post._id)}>
                      Read More
                    </Blog.ReadMoreButton>
                  </Blog.PostContent>
                  <Blog.PostDate>{new Date(post.date).toLocaleDateString()}</Blog.PostDate>
                </Blog.Post>
              </div>
            ))}
          </Slider>
        </Blog.SliderWrapper>
      </AnimateInView>
    </Blog>
  );
}

export default BlogComp;
