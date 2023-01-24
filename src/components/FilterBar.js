import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterOption = styled.button`
  background-color: white;
  color: black;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const FilterBar = ({ products, setFilteredProducts }) => {
  const [filter, setFilter] = useState("Todos");

  const handleFilter = (category) => {
    setFilter(category);
    if (category === "Todos") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <FilterContainer>
      <FilterOption onClick={() => handleFilter("Todos")}>Todos</FilterOption>
      <FilterOption onClick={() => handleFilter("cerdo")}>Cerdo</FilterOption>
      <FilterOption onClick={() => handleFilter("molida")}>Molida</FilterOption>
    </FilterContainer>
  );
};

export default FilterBar;