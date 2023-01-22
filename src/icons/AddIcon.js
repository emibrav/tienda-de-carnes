import styled from "styled-components"

const Icon = styled.svg`
  border: 1px solid red;
  cursor: pointer;
`;

const AddIcon = () => {
    return (
      <button>
        <Icon xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/></Icon>
      </button>
    )
  }
  
  export default AddIcon