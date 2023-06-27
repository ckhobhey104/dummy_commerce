import { useCallback, useRef, useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "./../data";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({
    display: "none",
  })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  background-color: #cee7f3af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 2;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  /* width: "1060px"; */
  // width: 106%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  // width: 94%;
`;
const Title = styled.h1`
  font-size: 60px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #0297e7;
  background: #0297e7;
  color: white;
  cursor: pointer;
`;

const Slider = () => {
  const timerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? sliderItems.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = slideIndex === sliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  }, [slideIndex]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  const handleClick = (direction) => {
    if (direction === "left") {
      goToPrevious();
    } else {
      goToNext();
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
