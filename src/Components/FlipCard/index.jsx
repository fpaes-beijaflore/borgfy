import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 392px;
  perspective: 1000px;
  border: none;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;

FlipCard.Inner = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

FlipCard.Front = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`;

FlipCard.FrontImage = styled.div`
  width: 521px;
  height: 392px;
`;

FlipCard.Back = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 140px 110px 140px 110px;
  background-color: #f1ae78;
`;

FlipCard.BackTitle = styled.h5`
  height: 51px;
  margin: 0 0 13px;
  font-size: 2.5rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

FlipCard.BackText = styled.p`
  height: 33px;
  font-size: 1.7rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

function FlipCardComp({ imageUrl, name, office }) {
  return (
    <FlipCard>
      <FlipCard.Inner className="flip-card-inner">
        <FlipCard.Front>
          <FlipCard.FrontImage>
            <Image
              src={`/${imageUrl}`}
              layout="responsive"
              width={521}
              height={392}
              alt={imageUrl}
            />
          </FlipCard.FrontImage>
        </FlipCard.Front>

        <FlipCard.Back>
          <FlipCard.BackTitle>{name}</FlipCard.BackTitle>
          <FlipCard.BackText>{office}</FlipCard.BackText>
        </FlipCard.Back>
      </FlipCard.Inner>
    </FlipCard>
  );
}

export default FlipCardComp;
