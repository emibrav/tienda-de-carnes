import styled from "styled-components";
import { INFO } from "../app/constants";

const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 70%;
  max-width: 840px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-inline: auto;
  box-sizing: border-box;
  background-color: white;
  /* transition: all 0.5s ease-in-out; */
  /* transform: translateX(1000px, 1000px); */

  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }
`;

const CartHeader = styled.div`
  display: flex;
  width: inherit;
  max-width: 680px;
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
  max-width: 487px;
  color: red;
  font-size: 15px;
  font-weight: bold;
  margin-top: 1rem;
`;

const CheckOutButton = styled.a`
  background-color: #25d366;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
  color: white;
  height: 2.5rem;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 17px 7px;

  &:hover {
    background-color: #32d399;
    cursor: pointer;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Total = styled.p`
  font-size: large;
  font-weight: bolder;
  margin-top: 1rem;
`;

const DeleteButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ff4136;
  color: #fff;
  margin-top: 1rem;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ff0000;
    box-shadow: 0px 0px 10px #ff0000;
  }
`;

const RemoveItemButton = styled.button`
  background-color: transparent;
  padding: 4px 10px;
  font-size: 13px;
  background-color: #ff4136;
  color: #fff;
  margin-left: 0.2rem;
  font-weight: bold;
  border-radius: 20px;
  border: none;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const CartList = styled.div`
  width: 58%;

  font-size: 18px;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 487px) {
    width: 100%;
  }
`;

function Cart({
  products,
  setCart,
  totalPrice,
  isOpen,
  setIsOpen,
  handleRemoveFromCart,
}) {
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
          <CloseButton onClick={() => setIsOpen(false)}> ↪ </CloseButton>
        </CartHeader>
        {products.map((item) => (
          <CartList key={item.id}>
            ▪ {item.name} ({item.count}kg) ${item.count * item.price}
            <RemoveItemButton onClick={() => handleRemoveFromCart(item)}>
              {item.count > 1 ? "restar 1kg" : "eliminar"}
            </RemoveItemButton>
          </CartList>
        ))}
        <Total>
          {!totalPrice ? "El pedido ha quedado vacío" : `Total $${totalPrice}`}
        </Total>
        <PiecesInfo>
          (*)Recuerde que si su pedido incluye cortes por pieza, el monto total
          es un estimado, queda sujeto al pesaje de la misma
        </PiecesInfo>
        <DeleteButton onClick={() => setCart([])}>Borrar todo</DeleteButton>
        {!totalPrice ? null : (
          <CheckOutButton
            href={`https://wa.me/${INFO.phone}?text=${encodeURIComponent(
              text
            )}`}
          >
            Finalizar compra por Whatsapp
          </CheckOutButton>
        )}
      </CartContainer>
    </>
  );
}

export default Cart;
