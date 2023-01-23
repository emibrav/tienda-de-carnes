import styled from "styled-components";

const Message = styled.div`
    width: 100%;
    text-align: center;
    color: black;
    font-size: 24px;
    font-weight: bold;
    /* border: 1px solid red; */
`;

const Loading = () => {
    return (
        <Message>
            Cargando cortes...
        </Message>
    )
}

export default Loading;