import styled from "styled-components";
import AddIcon from "../icons/AddIcon";
import RemoveIcon from "../icons/RemoveIcon"

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
  min-height: 50px;
  max-height: 50%;
`;

const Card = ({product, handleAddToCart}) => {

  const { name, price, image } = product

  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <h3>{name}</h3>
        <span>${price}</span>
        <AddOrSubstractItemContainer>
          <RemoveIcon />
          <AddIcon />
        </AddOrSubstractItemContainer>
      </ProductInfo>
    </CardContainer>
  )
}

export default Card
