import styled from "styled-components";
import { categories } from "./../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background: #f5fafd;
`;

const Container = styled.div`
  display: flex;
  flex-direction:
  padding: 20px;
  align-items: center;
  justify-content: center;
  width: 98%;

  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;
const Title = styled.h1`
  font-size: 25px;
  padding: 25px 40px;
  text-align: center;
  font-weight: 900;
`;

const Categories = () => {
  return (
    <Wrapper>
      <Title>EXPLORE OUR PRODUCTS</Title>
      <Container>
        {categories.map((category) => (
          <CategoryItem key={category.id} item={category} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Categories;
