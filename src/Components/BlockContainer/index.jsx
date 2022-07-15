import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (min-width: 1400px) {
    margin: 0 auto;
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

export default Container;
