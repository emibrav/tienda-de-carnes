import styled from "styled-components";

const FilterBarContainer = styled.div`
    width: 100%;
    padding: 5px 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-block: 8px;
    /* border: 1px solid red; */
`;

const FilterButton = styled.button`
    width: 85px;
    height: 35px;
    background-color: #3b3c66;
    color: white;
    border-radius: 38px;

    &:active {
        border: 2px solid red;
        background-color: green;
        box-shadow: 2px 2px 5px #fc894d;
    }
`;

const FilterBar = (products) => {
    console.log(products)
    return (
        <>
            <FilterBarContainer>
                <FilterButton>
                    {
                        products ? "Todos" : "Nada"
                    }
                </FilterButton>
                <FilterButton>Cerdo</FilterButton>
                <FilterButton>Molida</FilterButton>
            </FilterBarContainer> 
        </>
    )
}

export default FilterBar;