import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import Footer from '../../src/Components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../src/Components/NavBar';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 1616px;
  margin: auto;
  display: grid;
  grid-template-areas: 'post anotherPosts';
  grid-gap: 80px;
  grid-template-columns: calc(70% - 80px) 30%;
`;

Container.Post = styled.div`
  width: 100%;
`;

Container.AnotherPosts = styled.aside`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    color: #0000ff;
    cursor: pointer;
    margin: 10px 0;
  }
`;

const Post = styled.section`
  width: 100%;
`;

Post.BackButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: none;
`;

Post.ImageWrapper = styled.div`
  width: 100%;
`;

Post.ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Post.Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

Post.Text = styled.p`
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
`;

Post.Date = styled.p`
  opacity: 0.5;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  border: none;
  border-radius: 30px;
  background: #f3f3f3;

  &:focus {
    outline: none;
  }
`;

function PostComp({ posts, post, lastTenPosts }) {
  const [filter, setFilter] = useState('');
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Borgfy - Post</title>
        <meta name="description" content={post.title} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Post" />
        <meta name="og:description" content={post.title} />
        <meta name="og:url" content="https://borgfy.vercel.app/post" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/post" />
      </Head>
      <Post>
        <Navbar navStyle="white" />
        <Container>
          <Container.Post>
            <Post.ImageWrapper>
              <Image
                src={`${process.env.BUCKET_LINK}${post.image}`}
                layout="responsive"
                width={1616}
                height={640}
                alt={post.image}
              />
            </Post.ImageWrapper>

            <Post.ContentWrapper>
              <Post.Title>{post.title}</Post.Title>
            </Post.ContentWrapper>
            <Post.Text>{post.text}</Post.Text>
            <Post.Date>{new Date(post.date).toLocaleDateString()}</Post.Date>
          </Container.Post>
          <Container.AnotherPosts>
            <h4>Recent Posts</h4>
            <ul>
              {lastTenPosts.map((post) => (
                <li key={`Post__${post._id}`} onClick={() => router.push(`/post/${post._id}`)}>
                  {post.title}
                </li>
              ))}
            </ul>
            <Post.BackButton onClick={() => router.back()}>Voltar</Post.BackButton>

            <SearchInput
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search Post by Title"
            />
            <ul>
              {posts
                .filter((post) => {
                  if (filter === '') {
                    return null;
                  }

                  if (post.title.includes(filter)) {
                    return post;
                  }
                })
                .map((post) => {
                  return (
                    <li key={`post__${post._id}`} onClick={() => router.push(`/post/${post._id}`)}>
                      {post.title}
                    </li>
                  );
                })}
            </ul>
          </Container.AnotherPosts>
        </Container>
        <Footer />
      </Post>
    </>
  );
}

export default PostComp;

export async function getStaticPaths() {
  const res = await fetch('https://borgfy.vercel.app/api/posts');
  const allPosts = await res.json();
  const lastTenPosts = allPosts.slice(0, 10);

  const paths = lastTenPosts.map((post) => ({ params: { id: post._id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://borgfy.vercel.app/api/posts/${params.id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Erro ao carregar os dados!');
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((err) => err);

  const posts = await fetch('https://borgfy.vercel.app/api/posts')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Erro ao carregar os dados!');
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((err) => err);

  const lastTenPosts = posts.slice(0, 10);

  return {
    props: { post, lastTenPosts, posts },
  };
}
