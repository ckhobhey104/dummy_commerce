import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background: #edf6fbbc;
  /* color: #333; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: center;

  /* ${mobile({
    padding: "0px",
    flexDirection: "column",
  })} */
`;
const Title = styled.h1`
  font-size: 30px;
  padding: 5px;
  text-align: center;
  font-weight: 900;
  cursor: default !important;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 250;
  letter-spacing: 1px;
  line-height: 1.5;
  /* margin-bottom: 20px; */
  &.paragraph {
    margin-top: 20px;
  }
`;

const Categories = () => {
  return (
    <Wrapper>
      <Container>
        <Title>ABOUT US</Title>
        <Desc>
          We, Sky And Son's Ltd, have been exporting and wholesale supplying
          various products such as Azobe Wood, Cashew Nut, Copper Wires Scrap,
          Denya Woods, Gold Bar And Gold Dust, Iron Cast, Iron Cut Scrap, Oil,
          Rice, Rough Diamonds, Sesame, Soybean, Sugar, and Teak Wood since
          2013. Our products are made by our vendor network using high-quality
          raw materials and cutting-edge machinery. All of the items are
          well-liked because of their high quality, long shelf life, and
          customisable packaging. We are capable of delivering products in large
          quantities on schedule. Our company adheres to corporate policies and
          industry norms. In addition, we make every transaction clear and
          transparent in order to develop long-term partnerships with our
          clients.
        </Desc>
        <Desc className="paragraph">
          We are a sole proprietorship, and we obtain our products from
          well-known market sellers at cheap pricing. We are able to
          satisfactorily satisfy our clients thanks to the direction of "Mr.
          Osafo Justus," who has extensive knowledge and experience in this
          sector.
        </Desc>
      </Container>
    </Wrapper>
  );
};

export default Categories;
