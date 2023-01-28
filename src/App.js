import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { INFO } from "./app/constants";
import Papa from "papaparse";
import Card from "./components/Card";
import SearchIcon from "./icons/SearchIcon";
import FilterBar from "./components/FilterBar";
import Spinner from "./components/Spinner";
import Cart from "./components/Cart";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sofia sans', sans-serif;
  }
`;

const Container = styled.div`
  position: relative;
  /* z-index: 0; */
  width: 100%;
  max-width: 687px;
  margin-inline: auto;
  margin-bottom: 3.5em;
  border: 0px solid blue;
  height: 100%;

  @media screen and (min-width: 487px) {
    width: 80%;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 1.4rem;
`;

const HeaderContainer = styled.div`
  // border: 1px solid red;
  background-color: #3b3c66;
  padding: 1em;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartButton = styled.button`
  background-color: green;
  position: fixed;
  cursor: pointer;
  width: 100%;
  bottom: 0;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  /* margin-top: 1rem; */
  color: white;
  height: 2.5rem;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 17px 7px;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [APIdata, setAPIdata] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(INFO.sheet, {
        responseType: "blob",
      })
      .then((response) => {
        return new Promise((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              setAPIdata(results.data);
              setFilteredProducts(results.data);
              return resolve(results.data);
            },
            error: (error) => {
              return reject(error.message);
            },
          });
          setLoading(false);
        });
      });
  }, []);

  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (acc, product) => acc + parseInt(product.price * product.count),
        0
      )
    );
  }, [cart]);

  const handleAddToCart = (product) => {
    let isProductInCart = cart.find((p) => p.id === product.id);
    if (!isProductInCart) {
      setCart([...cart, { ...product, count: 1 }]);
    } else {
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, count: p.count + 1 };
          } else {
            return p;
          }
        })
      );
    }
  };

  const handleRemoveFromCart = (product) => {
    let isProductInCart = cart.find((p) => p.id === product.id);
    if (isProductInCart) {
      if (isProductInCart.count > 1) {
        setCart(
          cart.map((p) => {
            if (p.id === product.id) {
              return { ...p, count: p.count - 1 };
            } else {
              return p;
            }
          })
        );
      } else {
        setCart(cart.filter((p) => p.id !== product.id));
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        {isOpen ? (
          <Cart
            setIsOpen={setIsOpen}
            products={cart}
            setCart={setCart}
            totalPrice={totalPrice}
          />
        ) : null}
        <HeaderContainer>
          <Title className="App">Tienda de carnes</Title>
          <SearchIcon />
        </HeaderContainer>
        <FilterBar
          products={APIdata}
          setFilteredProducts={setFilteredProducts}
        />
        {loading ? <Spinner /> : null}
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            handleAddToCart={() => handleAddToCart(item)}
            handleRemoveFromCart={() => handleRemoveFromCart(item)}
            product={item}
          />
        ))}
        {cart.length ? (
          <CartButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen
              ? "Finalizar pedido por Whatsapp"
              : `Subtotal $${totalPrice} - Ver compra`}
          </CartButton>
        ) : null}
      </Container>
    </>
  );
}

export default App;
