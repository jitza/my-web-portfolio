import React, { useEffect } from "react";
import styled from "styled-components";

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

const MovingParticlesBg = () => {
  useEffect(() => {
    const numStars = 150;
    const container = document.getElementById("stars-container");

    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const styleSheet = document.styleSheets[0];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      const speed = Math.random() * 20 + 10;
      const duration = Math.random() * 5 + 2;
      const translateX = Math.random() * containerWidth - left;
      const translateY = Math.random() * containerHeight - top;

      star.style.position = "absolute";
      star.style.backgroundColor = "#fff";
      star.style.borderRadius = "50%";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      star.style.animation = `twinkle${i} ${duration}s infinite, moveStar${i} ${speed}s linear infinite`;

      container.appendChild(star);

      const moveStarKeyframes = `
        @keyframes moveStar${i} {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(${translateX}px, ${translateY}px);
          }
        }
      `;
      styleSheet.insertRule(moveStarKeyframes, styleSheet.cssRules.length);

      const twinkleKeyframes = `
        @keyframes twinkle${i} {
          0% {
            transform: scale(0.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `;
      styleSheet.insertRule(twinkleKeyframes, styleSheet.cssRules.length);
    }
  }, []);

  return <Container id="stars-container" />;
};

export default MovingParticlesBg;
