import 'bootstrap/dist/css/bootstrap.min.css';

import Blog from '../src/Home/Blog';
import Clients from '../src/Home/Clients';
import Container from '../src/Components/BlockContainer';
import Depoiments from '../src/Home/Depoiments';
import Footer from '../src/Components/Footer';
import Head from 'next/head';
import Idea from '../src/Components/Idea';
import Navbar from '../src/Components/NavBar';
import OurWork from '../src/Home/OurWork';
import PhotoGallery from '../src/Home/Gallery';
import VideoBanner from '../src/Home/VideoBanner';
import WebExpert from '../src/Home/WebExpert';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Gallery = styled.section`
  width: 100%;
  height: calc(100vh - 66px);
  background: ${({ theme }) => theme.colors.bg_black};
  position: relative;
  z-index: 2;
`;

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Borgfy - Helping startups developing their products</title>
        <meta
          name="description"
          content="An organization that works passionately to transform the world. We help start-ups, SMEs, MSME by giving shape to their ideas and developing their products."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content="Borgfy - Helping startups developing their products" />
        <meta
          name="og:description"
          content="An organization that works passionately to transform the world. We help start-ups, SMEs, MSME by giving shape to their ideas and developing their products."
        />
        <meta name="og:url" content="https://borgfy.vercel.app/" />
        <meta name="og:site_name" content="Borgfy" />
        <meta name="msapplication-TileImage" content="{LINK TO FAVICON}"></meta>
        <meta httpEquiv="content-language" content="en"></meta>
        <link rel="canonical" href="https://borgfy.vercel.app/" />
      </Head>
      <Navbar navStyle="black" />
      <Gallery>
        <Container>
          <VideoBanner />
        </Container>
      </Gallery>
      <WebExpert />
      <OurWork />
      <Depoiments />
      <PhotoGallery />
      <Blog posts={posts} />
      <Clients />
      <Idea />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://borgfy.vercel.app/api/posts')
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

  const posts = res.slice(0, 9);

  return {
    props: { posts },
  };
}
