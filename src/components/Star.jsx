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
  border-radius: 50%;
  amimation: ${twinkle} is infinite alternate;
`;

export default Star;
