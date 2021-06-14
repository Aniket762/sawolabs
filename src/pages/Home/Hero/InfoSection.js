import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import {
  Container, 
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from '../../../components/InfoSection/InfoSection.elements';


const Image = styled.img`
  border: 0;
  max-width: 25%;
  vertical-align: middle;
  horizontal-align:left;
  margin:0 auto;
  margin-left:40%;
  cursor:pointer;
`;

function InfoSection({
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  linkTo,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link  activeClass="active"
            to="strong"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}  to={linkTo}> 
                <Image src={require("../../../assets/scroll.gif").default} alt={alt} />
                    {buttonLabel}
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
