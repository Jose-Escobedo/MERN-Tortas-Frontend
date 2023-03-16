import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { extrasInfo } from "../data";
import { useNavigate } from "react-router-dom";

const ProductWithChoice = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [productPrice, setProductPrice] = useState(product.price);
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const [extrasSum, setExtrasSum] = useState(0);
  const [note, setNote] = useState();
  const [sideCheck, setSideCheck] = useState();
  const [itemWarning, setItemWarning] = useState(false);
  const [chimi, setChimi] = useState(false);
  const [tamalCombo, setTamalCombo] = useState(false);

  const blankCombo = {
    firstItem: "",
    secondItem: "",
  };

  const [itemCombo, setItemCombo] = useState(blankCombo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
    if (product.name === "Chimichanga Burrito") {
      setChimi(true);
    }
  }, [id]);

  useEffect(() => {
    let originalPrice = product.price;
    product.extras = [];
    product.note = "";
    product.itemCombo = [];
    setProductPrice(originalPrice);

    if (
      product.categories?.includes("sides") ||
      product.categories?.includes("desserts") ||
      product.categories?.includes("beverages") ||
      product.categories?.includes("shakes")
    ) {
      setSideCheck(true);
    } else {
      setSideCheck(false);
    }
  }, [product.extras]);

  const { firstItem, secondItem } = itemCombo;

  const handleFirstItem = (e) => {
    setItemCombo({
      ...itemCombo,
      firstItem: e.target.value,
    });

    console.log("first item", itemCombo);
  };
  const handleSecondItem = (e) => {
    setItemCombo({
      ...itemCombo,
      secondItem: e.target.value,
    });

    console.log("second item", itemCombo);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (
      product.name !== "Hardshell Taco" &&
      product.name !== "Chimichanga Burrito"
    ) {
      setProductPrice(product.price + extrasSum);
      product.price = product.price + extrasSum;
      if (extras !== []) {
        product.extras.push(extras);
      }

      product.itemCombo = itemCombo;

      product.note = note;
      dispatch(addProduct({ ...product, quantity }));
      toast.success("Item has been added to Cart.", {
        position: toast.POSITION.TOP_CENTER,
        toastId: "success3",
      });

      navigate("/cart");
    } else if (product.name === "Hardshell Taco") {
      if (itemCombo.firstItem !== "") {
        setProductPrice(product.price + extrasSum);
        product.price = product.price + extrasSum;
        if (extras !== []) {
          product.extras.push(extras);
        }

        product.itemCombo = itemCombo;

        product.note = note;
        dispatch(addProduct({ ...product, quantity }));
        toast.success("Item has been added to Cart.", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "success3",
        });

        navigate("/cart");
      } else {
        setItemWarning(true);
      }
    } else if (product.name === "Chimichanga Burrito") {
      if (itemCombo.firstItem !== "" && itemCombo.secondItem !== "") {
        setProductPrice(product.price + extrasSum);
        product.price = product.price + extrasSum;
        if (extras !== []) {
          product.extras.push(extras);
        }

        product.itemCombo = itemCombo;

        product.note = note;
        dispatch(addProduct({ ...product, quantity }));
        toast.success("Item has been added to Cart.", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "success3",
        });

        navigate("/cart");
      } else {
        setItemWarning(true);
      }
    }
  };
  const addOrRemove = (e) => {
    // current array of options
    const newExtras = extras;
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      newExtras.push(e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = newExtras.indexOf(e.target.value);
      newExtras.splice(index, 1);
    }

    // update the state with the new array of options
    setExtras(newExtras);
    const sum = extras
      .map((obj) => Number(obj.replace(/[^0-9\.]+/g, "")))
      .reduce((totalValue, currValue) => {
        // currValue will be the actual object )
        return totalValue + currValue;
      }, 0);

    setExtrasSum(sum);
    console.log(extras);
    console.log(extrasSum);
  };

  const handleNote = (e) => {
    console.log(e);
    setNote(e);
  };

  return (
    <Container>
      <StyledToastContainer />
      <Navbar />
      <NoImageWrapper>
        <NoImageInfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {productPrice}</Price>
          <NoImageFilterContainer>
            <NoImageFilter>
              {chimi ? (
                <>
                  <SelectContainer>
                    <select
                      onChange={(e) => handleFirstItem(e)}
                      name="selectedDishOne"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        SELECT MEAT
                      </option>
                      <option value="Asada">Asada</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Shredded Chicken">Shredded Chicken</option>
                      <option value="Carnitas">Carnitas/Pork</option>
                    </select>
                  </SelectContainer>
                  <SelectContainer>
                    <select
                      onChange={(e) => handleSecondItem(e)}
                      name="selectedDishTwo"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        SELECT RICE OR BEANS
                      </option>
                      <option value="Rice">Rice</option>
                      <option value="Beans">Beans</option>
                    </select>
                  </SelectContainer>
                </>
              ) : (
                <SelectContainer>
                  <select
                    onChange={(e) => handleFirstItem(e)}
                    name="selectedDishOne"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      SELECT MEAT
                    </option>
                    <option value="Asada">Asada</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Shredded Chicken">Shredded Chicken</option>
                    <option value="Carnitas">Carnitas/Pork</option>
                    <option value="Picadillo">Picadillo/Ground Beef</option>
                    <option value="Lengua">Lengua</option>
                    <option value="Pastor">Al Pastor</option>
                    <option value="Chorizo">Chorizo</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Fish">Fish</option>
                  </select>
                </SelectContainer>
              )}
              {itemWarning ? (
                <SelectContainer>
                  <h2>
                    Please make sure to select item before adding to cart.
                  </h2>
                </SelectContainer>
              ) : null}

              <NoImageFilterNotes onChange={(e) => handleNote(e.target.value)}>
                <span>ADD NOTE: </span>
                <br></br>

                <textarea placeholder="Allergies, No onions, etc, anything else we should know before preparation."></textarea>
              </NoImageFilterNotes>
              {sideCheck ? null : (
                <>
                  <NoImageFilterTitle>EXTRAS:</NoImageFilterTitle>
                  <NoImageFilterExtras onChange={(event) => addOrRemove(event)}>
                    {extrasInfo?.map((i) => (
                      <>
                        <label>
                          <input value={i.option} type="checkbox" />
                          {i.option}
                        </label>
                      </>
                    ))}
                  </NoImageFilterExtras>
                </>
              )}
            </NoImageFilter>
          </NoImageFilterContainer>
          <NoImageAddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </NoImageAddContainer>
        </NoImageInfoContainer>
      </NoImageWrapper>
      <Footer />
    </Container>
  );
};

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  .toast {
    background-color: black;
    color: white;
  }
  button[aria-label="close"] {
    color: white;
  }
`;

const Container = styled.div`
  margin-top: 70px;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const NoImageWrapper = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SelectContainer = styled.div`
  padding-top: 0;
  padding-bottom: 20px;

  h2 {
    color: red;
    font-size: 1.2rem;
  }

  select {
    width: 50%;
    font-size: 1rem;
    display: inline-block;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    border-top: none;
    border-right: none;
    border-left: none;
    -webkit-border-radius: 4px 4px 4px 4px;
    -moz-border-radius: 4px 4px 4px 4px;
    border-radius: 4px 4px 4px 4px;
    -webkit-box-shadow: inset 0 2px 4px rgba(107, 105, 105, 0.15),
      0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
      0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
      0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 8px 3px -9px #000000;
    -webkit-box-shadow: 0px 8px 3px -9px #000000;
    box-shadow: 0px 8px 3px -9px #000000;
  }
  option {
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const GenericImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const NoImageInfoContainer = styled.div`
  width: 35%;
  ${mobile({ padding: "10px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 3em;
`;

const NoImageFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const NoImageFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const NoImageFilterTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 200;
`;
const NoImageFilterNotes = styled.form`
  width: 90%;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: black;
  padding-bottom: 1em;
  span {
    margin-left: 0.5em;
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0.5em;
  }
  @media screen and (max-width: 410px) {
    padding: 0.4em;
  }

  textarea {
    resize: none;
    width: 100%;
    min-height: 20%;
    background-color: transparent;
    color: black;
    border-radius: 20px;
    font-size: 1em;
    letter-spacing: 1px;
    border: 1px solid black;
    padding: 0.5em 0.5em;
    @media screen and (max-width: 760px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 435px) {
      font-size: 0.7rem;
    }
  }
`;
const NoImageFilterExtras = styled.div`
  display: flex;

  flex-direction: column;
  label input {
    margin-right: 1em;
  }
  label {
    font-size: 1.5rem;
    display: block;
  }
  input {
    width: 13px;
    height: 13px;
    vertical-align: middle;

    position: relative;
    *overflow: hidden;
  }
`;

const NoImageAddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const FilterTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 200;
`;
const FilterNotes = styled.form`
  max-width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: black;
  padding-bottom: 1em;
  span {
    margin-left: 0.5em;
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0.5em;
  }
  @media screen and (max-width: 410px) {
    padding: 0.4em;
  }

  textarea {
    resize: none;
    width: 100%;
    min-height: 20%;
    background-color: transparent;
    color: black;
    border-radius: 20px;
    font-size: 1em;
    letter-spacing: 1px;
    border: 1px solid black;
    padding: 0.5em 0.5em;
    @media screen and (max-width: 760px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 435px) {
      font-size: 0.7rem;
    }
  }
`;
const FilterExtras = styled.div`
  display: flex;

  flex-direction: column;
  label input {
    margin-right: 1em;
  }
  label {
    font-size: 1.5rem;
    display: block;
  }
  input {
    width: 13px;
    height: 13px;
    vertical-align: middle;

    position: relative;
    *overflow: hidden;
  }
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 1em;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export default ProductWithChoice;
