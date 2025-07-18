import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import {
  removeProduct,
  decrementQuantity,
  incrementQuantity,
} from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import emptyCartSvg from "../images/groceries.svg";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [emptyCart, setEmptyCart] = useState();
  const [extrasBoolean, setExtrasBoolean] = useState(false);
  const [cartArr, setCartArr] = useState(cart.products);

  useEffect(() => {
    if (cart.quantity == "0") {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [cart.quantity]);

  useEffect(() => {
    let newArr;
    newArr = cart.products;
    setCartArr(newArr.map((obj, i) => ({ ...obj, _id: i })));
    console.log(cartArr);
  }, [cart.quantity]);

  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch(removeProduct(item));
  };
  const handleDecrementItem = (item) => {
    console.log(item);
    dispatch(decrementQuantity(item));
  };
  const handleIncrementItem = (item) => {
    console.log(item);
    dispatch(incrementQuantity(item));
  };

  return (
    <Container>
      <Helmet>
        <title>Cart</title>
        <meta
          name="description"
          content="Your delicious Tortas await! Review and finalize your order seamlessly on the Tortas Mexico Studio City cart page."
        />
        <link rel="canonical" href="/cart"></link>
      </Helmet>
      <Navbar />
      <Wrapper>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE ORDERING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Cart ({cart.quantity})</TopText>
          </TopTexts>

          {emptyCart ? null : (
            <Link to="/optionaldelivery">
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Link>
          )}
        </Top>
        <Bottom>
          <Info>
            {emptyCart ? (
              loading ? (
                <Loader />
              ) : (
                <div id="empty-cart">
                  <h1>Your Cart is empty...</h1>
                  <img
                    src={emptyCartSvg}
                    alt="Illustration of a women next to a Huge phone ordering food."
                  />
                </div>
              )
            ) : (
              <></>
            )}
            {cartArr.map((item, index) => (
              <div key={index}>
                <Product>
                  <ProductDetail>
                    {(() => {
                      // if (item.name === "2 Item Combination") {
                      //   let genericImage =
                      //     "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/5400_10_03-removebg-preview.png?alt=media&token=a320fedf-3aa4-464a-891c-2a5d4bc87d14";

                      //   return <Image src={genericImage} />;
                      // } else if (item.name === "1 Item Combination") {
                      //   let genericImage =
                      //     "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/2204-removebg-preview.png?alt=media&token=f2cc9ed7-f90b-4824-9593-74af2beffed5";

                      //   return <Image src={genericImage} />;
                      // }
                      if (item.img === "") {
                        return null;
                      } else {
                        return <Image src={item.img} alt={item.alt} />;
                      }
                    })()}

                    <Details>
                      <ProductName>
                        <b>PRODUCT: </b>
                        {item.name.toUpperCase()}
                      </ProductName>
                      {(() => {
                        if (
                          !item.itemCombo.firstItem ||
                          item.itemCombo.firstItem === ""
                        ) {
                          return <></>;
                        } else {
                          return (
                            <ProductNote>
                              <b>VARIATION:</b>
                              <br></br>
                              {item.itemCombo.firstItem.replace(/-/g, " ")}
                              <br></br>
                              {item.variety.firstItem}
                              <br></br>
                              {item.itemCombo.secondItem.replace(/-/g, " ")}
                              <br></br>
                              {item.variety.secondItem}
                            </ProductNote>
                          );
                        }
                      })()}
                      {(() => {
                        if (
                          !item.note ||
                          item.note === "" ||
                          item.note[0] === "" ||
                          item.note.length === 0
                        ) {
                          return <></>;
                        } else {
                          return (
                            <ProductNote>
                              <b>NOTE:</b>
                              <br></br>
                              {item.note}
                            </ProductNote>
                          );
                        }
                      })()}

                      {(() => {
                        if (item.extras.length == 0 || item.extras[0] == "") {
                          return <></>;
                        } else {
                          return (
                            <ProductExtras>
                              <b>EXTRAS:</b>
                              <br></br>{" "}
                              {item.extras?.map(
                                (extra) => `${extra},
                              `
                              )}
                            </ProductExtras>
                          );
                        }
                      })()}
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => handleIncrementItem(item)}
                      />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDecrementItem(item)}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {(item.price * item.quantity).toFixed(2)}
                    </ProductPrice>
                    <RiDeleteBin6Line
                      style={{
                        paddingTop: "3em",
                        paddingBottom: "1.3em",
                        height: "25px",
                        width: "25px",
                        cursor: "pointer",
                        color: "darkred",
                      }}
                      onClick={() => handleRemoveItem(item)}
                    ></RiDeleteBin6Line>
                  </PriceDetail>
                </Product>
                <Hr></Hr>
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                ${" "}
                {cart.subtotal.toFixed(2) == -0.0
                  ? 0.0
                  : cart.subtotal.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            {/* <SummaryItem>
              <SummaryItemText>Delivery Fee</SummaryItemText>
              <SummaryItemPrice>$4.99</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem>
              <SummaryItemText>Taxes</SummaryItemText>
              <SummaryItemPrice>
                $ {cart.taxes.toFixed(2) == -0.0 ? 0.0 : cart.taxes.toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                $ {(cart.total.toFixed(2) - 4.99).toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>

            {emptyCart ? null : (
              <Link to="/optionaldelivery">
                <Button type="filled">CHECKOUT NOW</Button>
              </Link>
            )}
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  @media screen and (max-width: 660px) {
    padding-top: 20px;
  }
`;
const Wrapper = styled.div`
  padding: 1.3em;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3em;
  @media screen and (max-width: 660px) {
    width: 100%;
    padding: 0;
  }
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  @media screen and (max-width: 660px) {
    border: 1px solid black;
    color: black;
    background-color: white;
  }
`;

const TopTexts = styled.div`
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  font-size: 1.2rem;

  img {
    min-height: 350px;
    max-width: 350px;
  }
  #empty-cart {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 3em 0em;
    animation: easeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media screen and (max-width: 840px) {
      img {
        height: 300px;
        width: 300px;
        padding: 20px;
      }
    }
    @media screen and (max-width: 660px) {
      img {
        display: none;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @keyframes easeIn {
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media screen and (max-width: 660px) {
    align-items: center;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 200px;
  @media screen and (max-width: 660px) {
    display: none;
  }
`;
const Details = styled.div`
  padding: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductNote = styled.span``;
const ProductExtras = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 660px) {
    padding: 20px;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 5px;
  @media screen and (max-width: 660px) {
    padding: 10px;
  }
`;
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  @media screen and (max-width: 660px) {
    padding: 10px;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px sild lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 2em 0em;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const MinimumText = styled.div`
  color: red;
  font-weight: bold;
`;

export default Cart;
