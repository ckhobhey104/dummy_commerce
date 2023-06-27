import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 3px;
  height: 70vh;
  align-items: center;
  justify-content: center;
  position: relative;
  filter: blur(0.6px);
  &:hover {
    filter: none;
    transform: scale(0.96);
    transition: all 0.6s ease;
  }

  ${mobile({
    height: "30vh",
    width: "320px",
  })}
`;

const Image = styled.img`
  width: 320px;
  height: 100%;
  object-fit: cover;
  filter: blur(0.6px);

  &:hover {
    filter: none;
    transition: all 0.6s ease;
  }
  ${mobile({
    // height: "80%",
  })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </Container>
    </div>
  );
};

export default CategoryItem;
