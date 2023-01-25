import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

const Dot = styled.div`
  width: 10px;
  background-color: black;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${bounce} 1s ease-in-out infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const Spinner = () => {
  const [dots, setDots] = useState(["", "", ""]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => [...dots.slice(1), ""]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <DotsContainer>
      {dots.map((dot, index) => (
        <Dot key={index} style={{ animationDelay: `${index * 0.1}s` }} />
      ))}
    </DotsContainer>
  );
};
export default Spinner;
