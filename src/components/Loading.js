import styled from "styled-components";

const Message = styled.span`
    text-align: center;
    color: salmon;
    font-size: 24px;
    font-weight: bold;
`;

const Loading = () => {
    return (
        <Message>
            Cargando cortes...
        </Message>
    )
}

export default Loading;