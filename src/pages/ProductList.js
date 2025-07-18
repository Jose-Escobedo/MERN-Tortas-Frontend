import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Products from "../components/Products";
import { mobile } from "../responsive";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState();
  const [catImageLink, setCatImageLink] = useState("");
  const [altCatImageText, setAltCatImageText] = useState();

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (cat === "tortas") {
      setAltCatImageText(
        "Torta cubana on a yellow plate with cheese melting in the middle."
      );
      setCatImageLink(
        "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/cubana.jpg?alt=media&token=94876bed-3776-4093-9134-57f064c4ae7d"
      );
    } else if (cat === "burritos") {
      setAltCatImageText(
        "Wet Burrito with cheese and enchilada sauce all over it."
      );
      setCatImageLink(
        "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/burrito-wet.JPG?alt=media&token=8f2af152-f2f7-4a9c-be57-93db3f15fd6b"
      );
    } else {
      setAltCatImageText("Tacos de buche with onions and cilantro.");
      setCatImageLink(
        "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/tacos-buche.jpeg?alt=media&token=7ed5f819-0c85-45ba-b779-68dbaffffb27"
      );
    }
  }, []);

  return (
    <Container>
      <Navbar />
      <TitleAndImageWrapper>
        <Title>{cat.toUpperCase()}</Title>
        <CategoryImageContainer>
          <CategoryImage src={catImageLink} alt={altCatImageText} />
        </CategoryImageContainer>
      </TitleAndImageWrapper>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Items:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer cat={"cat"} />
    </Container>
  );
};

const Container = styled.div`
  background: white;
`;
const TitleAndImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
const Title = styled.h1`
  margin-top: 20vh;
  padding-bottom: 20px;
`;

const CategoryImageContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
  ${mobile({ height: "40vh" })}
`;
const CategoryImage = styled.img`
  width: auto;
  height: 100%;
  margin-left: -50px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.3em 0em;
  margin-left: 2em;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 20px;
  color: white;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export default ProductList;
