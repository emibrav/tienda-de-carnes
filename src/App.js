import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {INFO} from "./app/constants";
import Papa from "papaparse";
import Card from "./components/Card";
import SearchIcon from "./icons/SearchIcon";
import Loading from "./components/Loading";
import FilterBar from "./components/FilterBar";
import Spinner from "./components/Spinner";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sofia sans', sans-serif;
  }
`;

const Container = styled.div`
  /* width: 100%; */
  max-width: 600px;
  margin: 0 auto;
  border: 0px solid blue;
  height: 100vh;
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
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 1rem;
  color: white;
  height: 2.5rem;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 7px;
`;

function App() {

  const [ loading, setLoading ] = useState(false);
  const [ APIdata, setAPIdata ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(INFO.sheet,
    {
      responseType: "blob"
    }
    )
    .then(response => {
      return new Promise ((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            setAPIdata(results.data);
            setFilteredProducts(results.data);
            return resolve(results.data);
          },
          error: (error) => {
            return reject(error.message);
          }
        })
        setLoading(false)
      })
      
    })
  }, []);
  
  useEffect(() => {
    setTotalPrice(cart.reduce((acc, product) => acc + parseInt(product.price), 0))
  }, [cart])

  const handleAddToCart = (product) => {
    setCart((cart) => cart.concat(product))
    setTotalPrice(cart.reduce((acc, product) => acc + parseInt(product.price), 0))
  };
  
  const handleRemoveFromCart = (id) => {
    let index = cart.findIndex(product => product.id === id);
    if(index !== -1){
      let newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setTotalPrice(newCart.reduce((acc, product) => acc + parseInt(product.price), 0))
    }
  }

  return (
    <>
      <GlobalStyles />
        <Container>
          <HeaderContainer>
            <Title className="App">
              Tienda de carnes
            </Title>
              <SearchIcon />
          </HeaderContainer>
        <FilterBar products={APIdata} setFilteredProducts={setFilteredProducts} />
        { loading ? <Spinner /> : null }
          {
            filteredProducts.map(item => (
              <Card 
                key={item.id}
                handleAddToCart={() => handleAddToCart(item)} handleRemoveFromCart={() => handleRemoveFromCart(item.id)} product={item} />
              ))
            }
            { cart.length ? <CartButton>Subtotal: ${totalPrice} - Ver compra</CartButton> : null }
        </Container>
    </>
  );
}

export default App;
