import React from 'react';
import styled from 'styled-components';

const Idea = styled.div`
  background-color: #fff;
  width: max-content;
  margin: 38px auto 98px;
  display: flex;

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

Idea.Title = styled.h3`
  margin: 11px 40px 11px 0;
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: center;
  color: #000000;

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 10px 0;
  }

  @media only screen and (max-width: 576px) {
    margin: 10px 0;
  }
`;

Idea.Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 0 0 40px;
  padding: 15px 45px 14px;
  border: solid 2px #000000;
  background-color: #ffffff;
  transition: .3s ease-out;

  p {
    width: 110px;
    height: 21px;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 0;
  }

  &:hover {
    background-color: #000000;

    p {
      color: #ffffff;
    }
  }
`;

function IdeaComp() {
  return (
    <Idea>
      <Idea.Title>Have an idea? Let’s do something great together!</Idea.Title>
      <Idea.Button>
        <p>send message</p>
      </Idea.Button>
    </Idea>
  );
}

export default IdeaComp;
