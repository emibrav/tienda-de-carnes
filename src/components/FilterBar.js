// import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  border-bottom: 1px solid grey;

  &.sticky {
    position: static;
  }
`;

const FilterOption = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  border: none;
  margin: 0 10px;
  padding: 10px 12px;
  cursor: pointer;
  &:hover,
  :active {
    background-color: black;
    color: white;
  }
`;

const FilterBar = ({ products, setFilteredProducts, isOpen }) => {
  // const [filter, setFilter] = useState("Todos");

  const handleFilter = (category) => {
    // setFilter(category);
    if (category === "Todos") {
      setFilteredProducts(products);
    } else if (category === "promocion") {
      setFilteredProducts(
        products.filter((product) => product.isPromotion === "si")
      );
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <FilterContainer className={` ${isOpen ? "sticky" : "null"} `}>
      <FilterOption onClick={() => handleFilter("Todos")}>Todos</FilterOption>
      <FilterOption onClick={() => handleFilter("promocion")}>
        Oferta
      </FilterOption>
      <FilterOption onClick={() => handleFilter("cerdo")}>Cerdo</FilterOption>
      <FilterOption onClick={() => handleFilter("molida")}>Molida</FilterOption>
    </FilterContainer>
  );
};

export default FilterBar;
