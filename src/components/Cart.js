import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  width: 80%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  /* transition: all 0.5s ease-in-out; */
  /* transform: translateX(1000px, 1000px); */

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background-color: transparent;
  padding: 4px 10px;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 5px;

  &:hover {
    background-color: red;
    border: 1px solid white;
  }
`;

function Cart({ products, isOpen, setIsOpen }) {
  return (
    <CartContainer isOpen={isOpen}>
      <CartHeader>
        <h4>My Cart</h4>
        <CloseButton onClick={() => setIsOpen(false)}> X </CloseButton>
      </CartHeader>
      {products.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </CartContainer>
  );
}

export default Cart;
