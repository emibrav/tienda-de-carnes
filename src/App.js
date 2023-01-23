import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {INFO} from "./app/constants";
import Papa from "papaparse";
import Card from "./components/Card";
import SearchIcon from "./icons/SearchIcon";
import Loading from "./components/Loading";
import FilterBar from "./components/FilterBar";


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

  const handleAddToCart = (item) => {
    setCart((cart) => cart.concat(item))
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  let total = cart.reduce((total, item) => parseInt(total) + parseInt(item.price), 0)

  console.log(cart)

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
        <FilterBar products={APIdata} />
      { loading ? <Loading /> : null }
          {
            APIdata.map(item => (
              <Card 
                key={item.id}
                handleAddToCart={() => handleAddToCart(item)} handleRemoveFromCart={() => handleRemoveFromCart(item.id)} product={item} />
              ))
            }
            { cart.length ? <CartButton>Subtotal: ${total} - Ver compra</CartButton> : null }
        </Container>
    </>
  );
}

export default App;
