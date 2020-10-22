import React from 'react';
import {
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  BtnWrap,
} from './InfoSectionElements';
import { Button } from '../ButtonElement';

const InfoSection = (props) => {
  return (
    <>
      <InfoContainer lightBg={props.data.lightBg} id={props.data.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.data.topLine}</TopLine>
                <Heading lightText={props.data.lightText}>
                  {props.data.headline}
                </Heading>
                <Subtitle darkText={props.data.darkText}>
                  {props.data.description}
                </Subtitle>
                <BtnWrap>
                  <Button
                    to='/'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={props.data.primary ? 1 : 0}
                    dark={props.data.dark ? 1 : 0}
                    dark2={props.data.dark2 ? 1 : 0}
                  >
                    {props.data.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.data.img} alt={props.data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
