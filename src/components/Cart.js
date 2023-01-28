import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 80%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  /* transition: all 0.5s ease-in-out; */
  /* transform: translateX(1000px, 1000px); */

  @media screen and (max-width: 680px) {
    width: 100%;
    height: 100%;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
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

const PiecesInfo = styled.p`
  color: red;
  font-size: 15px;
  font-weight: bold;
  margin-top: 1rem;
`;

const CheckOutButton = styled.a`
  background-color: green;
  position: fixed;
  cursor: pointer;
  width: 50%;
  z-index: 10;
  text-decoration: none;
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

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Total = styled.p`
  font-size: large;
  font-weight: bolder;
  margin-top: 1rem;
`;

function Cart({ products, setCart, totalPrice, isOpen, setIsOpen }) {
  const text = `Hola! Te paso mi pedido:
  ${products
    .reduce(
      (message, item) =>
        message.concat(
          `\n• ${item.name} - ${item.count}kg $${item.price * item.count}`
        ),
      ``
    )
    .concat(
      `\n\nTotal: $${products.reduce(
        (total, item) => parseInt(total) + parseInt(item.price * item.count),
        0
      )}`
    )}
  
  `;
  return (
    <>
      <CartContainer isOpen={isOpen}>
        <CartHeader>
          <h4>Detalle de pedido:</h4>
          <CloseButton onClick={() => setIsOpen(false)}> X </CloseButton>
        </CartHeader>
        {products.map((item) => (
          <div key={item.id}>
            ▪ {item.name} ({item.count}kg) ${item.count * item.price}
          </div>
        ))}
        <Total>Total $ {totalPrice}*</Total>
        <PiecesInfo>
          (*)Recuerde que si su pedido incluye cortes por pieza, el monto total
          es un estimado, queda sujeto al pesaje de la misma
        </PiecesInfo>
      </CartContainer>
      <CheckOutButton
        href={`https://wa.me/5493512297944?text=${encodeURIComponent(text)}`}
      >
        Finalizar compra por Whatsapp
      </CheckOutButton>
    </>
  );
}

export default Cart;
