import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import Footer from '../src/Components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../src/Components/NavBar';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-areas: 'recent search';
  grid-auto-columns: 65% 35%;
  padding: 0 73px;
`;

Container.Post = styled.div`
  width: 100%;
`;

Container.AnotherPosts = styled.section`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;

  h4 {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin: 30px 0;
  }
`;

const PostTitle = styled.p`
  cursor: pointer;
  color: #0000ff;
`;

const Post = styled.section`
  width: 100%;
`;

Post.GridWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image content';
  grid-auto-columns: 200px auto;
`;

Post.Content = styled.div`
  margin-left: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

Post.BackButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: none;
`;

Post.ImageWrapper = styled.div`
  width: 200px;
  cursor: pointer;
`;

const SearchWrapper = styled.aside`
  padding-right: 40px;
  padding-top: 40px;

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
      padding: 0;
      margin: 20px 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  border: none;
  border-radius: 30px;
  background: #f3f3f3;
  display: block;

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
        <meta name="description" content="" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Post" />
        <meta name="og:description" content="" />
        <meta name="og:url" content="https://borgfy.vercel.app/post" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/post" />
      </Head>
      <Navbar navStyle="white" />
      <Post>
        <Container>
          <Container.AnotherPosts>
            <h4>Recent Posts</h4>
            <ul>
              {lastTenPosts.map((post) => (
                <li key={`Post__${post._id}`}>
                  <Post.GridWrapper>
                    <Post.ImageWrapper onClick={() => router.push(`/post/${post._id}`)}>
                      <Image
                        src={`${process.env.BUCKET_LINK}${post.image}`}
                        layout="responsive"
                        width={200}
                        height={200}
                      />
                    </Post.ImageWrapper>
                    <Post.Content>
                      <PostTitle onClick={() => router.push(`/post/${post._id}`)}>
                        {post.title}
                      </PostTitle>
                      <p>{post.text.split('.').splice(0, 1).join(' ')}.</p>
                      <p>{new Date(post.date).toLocaleDateString()}</p>
                    </Post.Content>
                  </Post.GridWrapper>
                </li>
              ))}
            </ul>
          </Container.AnotherPosts>
          <SearchWrapper>
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
                    <li key={`post__${post._id}`}>
                      <PostTitle onClick={() => router.push(`/post/${post._id}`)}>
                        {post.title}
                      </PostTitle>
                    </li>
                  );
                })}
            </ul>
          </SearchWrapper>
        </Container>
        <Footer />
      </Post>
    </>
  );
}

export default PostComp;

export async function getServerSideProps() {
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
    props: { lastTenPosts, posts },
  };
}
