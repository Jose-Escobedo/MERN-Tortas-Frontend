import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import ArrowLeftOutlined from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlined from "@material-ui/icons/ArrowRightOutlined";
import { mobile } from "../responsive";

const MenuGridList = ({ items }) => {
  const [toggle, setToggle] = useState(true);
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState();
  const [filteredItems, setFilteredItems] = useState(products);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data);
        setFilteredItems(res.data);
        console.log("menu", res.data);
      } catch (error) {}
    };
    getProduct();
    setCategory("All");
  }, []);

  useEffect(() => {
    handleFilter(category);
  }, [category]);

  const handleCatSelection = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleFilter = (cat) => {
    if (cat === "All") {
      return setFilteredItems(products);
    } else {
      setFilteredItems(products.filter((i) => i.categories.includes(cat)));
    }
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleMenuArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <MenuCatContainer>
        <Arrow direction="left" onClick={() => handleMenuArrowClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <MenuCategoryList slideIndex={slideIndex}>
          <MenuCatLink onClick={handleCatSelection} value={"All"}>
            All
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"popular"}>
            Popular
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"tacos"}>
            Tacos
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"tortas"}>
            Tortas
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"burritos"}>
            Burritos
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"beverages"}>
            Beverages
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"specialties"}>
            Specialties
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"combos"}>
            Combinations
          </MenuCatLink>

          <MenuCatLink onClick={handleCatSelection} value={"soups"}>
            Soups
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"breakfast"}>
            Breakfast
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"shakes"}>
            Shakes
          </MenuCatLink>

          <MenuCatLink onClick={handleCatSelection} value={"appetizers"}>
            Appetizers
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"salads"}>
            Ensaladas
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"taquitos"}>
            Taquitos
          </MenuCatLink>

          <MenuCatLink onClick={handleCatSelection} value={"sopes"}>
            Sopes
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"tostadas"}>
            Tostadas
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"tamales"}>
            Tamales
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"quesadillas"}>
            Quesadillas
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"sides"}>
            Sides
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"kids-meal"}>
            Kid's Meal
          </MenuCatLink>
          <MenuCatLink onClick={handleCatSelection} value={"desserts"}>
            Desserts
          </MenuCatLink>
        </MenuCategoryList>

        <Arrow direction="right" onClick={() => handleMenuArrowClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </MenuCatContainer>
      <MenuItemsGrid>
        {filteredItems?.map((item, index) => {
          return (
            <MenuContainerBox key={index}>
              <MenuLink to={`/product/${item._id}`}>
                <MenuContainerWrapper>
                  <MenuBoxDetails>
                    <h2>{item.name}</h2>
                    <h3 className="desc">{item.desc}</h3>
                    <h3>{`$ ${item.price}`}</h3>
                  </MenuBoxDetails>
                  {/* <MenuBoxImg>
                <img src={tacoHuman} />
              </MenuBoxImg> */}
                </MenuContainerWrapper>
              </MenuLink>
            </MenuContainerBox>
          );
        })}
      </MenuItemsGrid>
    </>
  );
};

const MenuCatContainer = styled.div`
  width: 70%;
  height: 20vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  ${mobile({ display: "none" })}
`;

const MenuItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  padding: 1em 2em;
`;
const MenuCategoryList = styled.div`
  width: 210%;
  display: flex;
  justify-content: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -33}%);
`;

// const MenuCategoryListWrapper = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 300%;
//   height: 20vh;
// `;

const MenuCatLink = styled.button`
  color: black;
  font-size: 1rem;
  text-decoration: none;
  padding: 1em 1em;
  border: none;
  background-color: white;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    outline: 1px white solid;
    color: white;
    outline-offset: -2px;
    background-color: black;
    opacity: 0.8;
  }

  &:active {
    outline: 1px white solid;
    color: white;
    outline-offset: -2px;
    background-color: black;
  }

  @media screen and (max-width: 925px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 840px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
`;

const Arrow = styled.div`
  width: 35px;
  height: 35px;
  color: white;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "100px"};
  right: ${(props) => props.direction === "right" && "100px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const MenuContainerBox = styled.div`
  width: 100%;
  border: 1px solid black;
  transition: transform 0.1s;
  background: white;

  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 5px grey, -2px -2px 5px grey;
  }
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const MenuContainerWrapper = styled.div`
  display: flex;
  padding: 20px;
`;
const MenuBoxImg = styled.div`
  img {
    max-height: 130px;
    min-height: 50px;
    width: 100%;
  }
`;

const MenuBoxDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5em;

  h2 {
    padding-bottom: 0.3em;
  }

  .desc {
    font-weight: 300;
    padding-bottom: 0.5em;
  }
`;

export default MenuGridList;
