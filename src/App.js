import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {INFO} from "./app/constants";
import Papa from "papaparse";
import Card from "./components/Card";
import SearchIcon from "./icons/SearchIcon";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sofia sans', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border: 0px solid blue;
  height: 100vh;
  `;

const Title = styled.h3`
  color: white;
  font-size: 1.5rem;
  `;

const HeaderContainer = styled.div`
  // border: 1px solid red;
  background-color: #3b3c66;
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {

  const [ loading, setLoading ] = useState(false);
  const [ APIdata, setAPIdata ] = useState([])


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
  }, [])

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
          {
            APIdata.map(item => (
              <Card product={item} key={item.id} />
            ))
          }
        </Container>
    </>
  );
}

export default App;
