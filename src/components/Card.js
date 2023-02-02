import styled from "styled-components";
// import AddIcon from "../icons/AddIcon";
// import RemoveIcon from "../icons/RemoveIcon"

const CardContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  max-width: 487px;
  max-height: 135px;
  margin: 1em auto;
  /* border: ${(props) => (props.selected ? "2px solid green" : "null")}; */
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0.1, 0.3);
`;

const ImageContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  width: 40%;
`;

const ProductImage = styled.img`
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  max-height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  border-left: 1px solid #e4e9f5;
  min-width: 60%;
  /* padding: 0.5em;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  padding: 0.5em;
  font-size: 17px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddOrSubstractItemContainer = styled.div`
  /* border: 1px solid red; */
  /* min-height: 50px; */
  max-height: 50%;
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  background-color: transparent;
  width: 34px;
  height: 34px;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 5px;
  background-color: #54d2c8;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: #3aa99c;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #ff5656;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5656;
  font-weight: bold;
  border-radius: 5px;
  width: 34px;
  cursor: pointer;
  height: 34px;
  margin-right: 15px;
  /* margin-top: 8px; */

  &:hover {
    background-color: #ff5656;
    color: white;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const AdditionalInfo = styled.p`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-bottom: 5px;
`;

// const isProductInCart (id) => {
//     return product.find((p) => p.id === product.id);
// }

const Card = ({ product, handleAddToCart, handleRemoveFromCart, selected }) => {
  const { name, price, wayToCount, image } = product;

  return (
    <CardContainer selected={selected}>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
      <ProductInfo>
        <h4>{name}</h4>
        {selected}
        <AdditionalInfo>(Se pide {wayToCount})</AdditionalInfo>
        <Price>${price} </Price>
        <span>x kg</span>
        <AddOrSubstractItemContainer>
          <RemoveButton onClick={handleRemoveFromCart}>➖</RemoveButton>
          <AddButton onClick={handleAddToCart}>➕</AddButton>
        </AddOrSubstractItemContainer>
      </ProductInfo>
    </CardContainer>
  );
};

export default Card;
