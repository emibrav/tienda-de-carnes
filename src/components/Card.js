import styled from "styled-components";
// import AddIcon from "../icons/AddIcon";
// import RemoveIcon from "../icons/RemoveIcon"

const CardContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  max-width: 487px; 
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0.1, 0.3);
`;

const ProductImage = styled.img`
  /* border: 1 px solid red; */
  max-width: 40%;
  height: 100px;
  border-radius: inherit;
`;

const ProductInfo = styled.div`
  border-left: 1px solid #e4e9f5;
  min-width: 60%;
  padding: .5em;
`;

const AddOrSubstractItemContainer = styled.div`
  /* border: 1px solid red; */
  /* min-height: 50px; */
  max-height: 50%;
`;

const AddButton = styled.button`
  background-color: transparent;
  width: 34px;
  height: 34px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  width: 34px;
  height: 34px;
  margin-right: 15px;
  margin-top: 8px;
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

const Card = ({product, handleAddToCart, handleRemoveFromCart}) => {

  const { name, price, wayToCount, image } = product

  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <h4>{name}</h4>
        <AdditionalInfo>(Se pide {wayToCount})</AdditionalInfo>
        <Price>${price} </Price><span>x kg</span>
        <AddOrSubstractItemContainer>
          <RemoveButton onClick={handleRemoveFromCart}>➖</RemoveButton>
          <AddButton onClick={handleAddToCart}>➕</AddButton>
        </AddOrSubstractItemContainer>
      </ProductInfo>
    </CardContainer>
  )
}

export default Card
