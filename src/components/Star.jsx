import React from "react";
import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
   }
`;

const Star = styled.div`
  position: absolute;
  background-color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${twinkle} 1s infinite alternate;
`;

export default Star;
