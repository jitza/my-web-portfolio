import React, { useEffect } from "react";
import styled from "styled-components";
import Star from "./Star";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background-color: black;
`;

const StarryBackground = () => {
  useEffect(() => {
    const numStars = 100;
    const container = document.getElementById("stars-container");

    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const twinkle = `
      @keyframes twinkle {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(twinkle, styleSheet.cssRules.length);

    const createStar = () => {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;

      star.style.position = "absolute";
      star.style.backgroundColor = "#fff";
      star.style.borderRadius = "50%";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      star.style.animation = `twinkle 1s infinite`;

      container.appendChild(star);
    };

    for (let i = 0; i < numStars; i++) {
      createStar();
    }
  }, []);

  return <Container id="stars-container" />;
};

export default StarryBackground;
