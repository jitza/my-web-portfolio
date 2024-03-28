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

    const twinkle = `
      @keyframes twinkle {
        0% {
          opacity: 0.5;
          transform: scale(0.5);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(twinkle, styleSheet.cssRules.length);

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      const duration = Math.random() * 20 + 10; // Random duration for movement
      const translateX = Math.random() * containerWidth - left;
      const translateY = Math.random() * containerHeight - top;

      star.style.position = "absolute";
      star.style.backgroundColor = "#fff";
      star.style.borderRadius = "50%";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      star.style.animation = `twinkle 2s infinite, moveStar${i} ${duration}s linear infinite`;

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
    }
  }, []);

  return <Container id="stars-container" />;
};

export default MovingParticlesBg;
