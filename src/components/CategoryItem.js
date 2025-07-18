import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt={item.alt} />
        <Info>
          <Title>{item.title}</Title>
          <Button>ORDER NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 1.3em;
`;
const Button = styled.button`
  border: none;
  padding: 0.8em;
  color: gray;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;

export default CategoryItem;
