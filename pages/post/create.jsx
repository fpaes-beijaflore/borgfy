import 'bootstrap/dist/css/bootstrap.min.css';

import {
  DatePickerComp,
  Input,
  SubmitButton,
  Textarea,
} from '../../src/Components/ContactForm/index';
import { useEffect, useState } from 'react';

import Footer from '../../src/Components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../src/Components/NavBar';
import UploadFile from '../../src/Components/UploadFile';
import axios from 'axios';
import styled from 'styled-components';

const NewPost = styled.div`
  width: 100%;
`;

NewPost.ContentWrapper = styled.section`
  width: 100%;
  height: auto;
  padding: 100px 0 0 152px;
  background: #fff;
`;

NewPost.Content = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  justify-content: space-between;
`;

NewPost.TextWrapper = styled.div`
  height: 882px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 772px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    width: 772px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 772px;
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

NewPost.Title = styled.h2`
  width: 309px;
  height: auto;
  font-size: 3.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
  margin-bottom: 70px;

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
`;

NewPost.ImageWrapper = styled.div`
  width: 829px;
  height: 863px;
`;

NewPost.ErrorMessage = styled.small`
  color: #ff2e63;
  font-weight: 900;
  font-size: 1.2rem;
`;

NewPost.SuccessMessage = styled.small`
  color: #63ff2e;
  font-weight: 900;
  font-size: 1.2rem;
`;

const Unauthorized = styled.div`
  width: 100%;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Unauthorized.Text = styled.h1`
  color: #000000;
  font-size: 1.7rem;
  font-weight: 700;
`;

function CreatePost() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');
  const [image, setImage] = useState('Upload File');
  const [response, setResponse] = useState({});
  const [uploadResponse, setUploadResponse] = useState(null);
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const value = sessionStorage.getItem(process.env.LOGGED_KEY);
    value === process.env.LOGGED_VALUE ? setLogged(true) : setLogged(false);
    setIsLoading(false);
  }, []);

  const clear_states = () => {
    setTitle('');
    setDate(new Date());
    setText('');
    setImage('');
    setUploadResponse(null);
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noIndex" />
        <meta httpEquiv="language" content="en" />
      </Head>

      {isLoading && (
        <Unauthorized>
          <Unauthorized.Text>Loading...</Unauthorized.Text>
        </Unauthorized>
      )}

      {!logged && !isLoading && (
        <Unauthorized>
          <Unauthorized.Text>
            You are not authorized to access this page! Please,{' '}
            <Link href="/login">
              <a>log in.</a>
            </Link>{' '}
          </Unauthorized.Text>
        </Unauthorized>
      )}

      {logged && !isLoading && (
        <NewPost>
          <Navbar navStyle="white" />
          <NewPost.ContentWrapper>
            <NewPost.Content>
              <NewPost.TextWrapper>
                <NewPost.Title>
                  <span className="text-style-1">Create</span> <br /> A NEW POST
                </NewPost.Title>

                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Title"
                />
                {response?.success === false && response?.type == 'title' && (
                  <NewPost.ErrorMessage>{response?.data?.error}</NewPost.ErrorMessage>
                )}
                <DatePickerComp startDate={date} setStartDate={setDate} />
                {response?.success === false && response?.type == 'date' && (
                  <NewPost.ErrorMessage>{response?.data?.error}</NewPost.ErrorMessage>
                )}
                <UploadFile
                  setImage={setImage}
                  label={image}
                  response={uploadResponse}
                  setResponse={setUploadResponse}
                />
                {response?.success === false && response?.type == 'image' && (
                  <NewPost.ErrorMessage>{response?.data?.error}</NewPost.ErrorMessage>
                )}

                <Textarea
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  placeholder="Text"
                />
                {response?.success === false && response?.type == 'text' && (
                  <NewPost.ErrorMessage>{response?.data?.error}</NewPost.ErrorMessage>
                )}

                <SubmitButton
                  placeholder="Send"
                  onClick={() => {
                    axios
                      .post('https://borgfy.vercel.app/api/posts', { title, text, date, image })
                      .then((res) => {
                        setResponse(res.data);
                        if (res.data.success) {
                          clear_states();
                        }
                      })
                      .catch((err) => {
                        setResponse(err);
                      });
                  }}
                />

                {response?.success === true && (
                  <NewPost.SuccessMessage>Post was successfuly uploaded.</NewPost.SuccessMessage>
                )}
              </NewPost.TextWrapper>

              <NewPost.ImageWrapper>
                <Image
                  src="/043856B4-757D-4937-AA70-1DB9701286A4.png"
                  layout="responsive"
                  width={829}
                  height={863}
                  alt="043856B4-757D-4937-AA70-1DB9701286A4.png"
                />
              </NewPost.ImageWrapper>
            </NewPost.Content>
          </NewPost.ContentWrapper>
          <Footer />
        </NewPost>
      )}
    </>
  );
}

export default CreatePost;
