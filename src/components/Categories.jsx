import styled from "styled-components";
import { categories } from "./../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;

  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((category) => (
          <CategoryItem key={category.id} item={category} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
