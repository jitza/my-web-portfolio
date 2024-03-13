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
`;

const StarryBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = documnet.createElement("div");
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}`;
      star.style.top = `${Math.random() * 100}`;
      document.querySelector(".stars").appendChild(star);
    };

    for (let i = 0; i < 100; i++) {
      createStar();
    }
  }, []);

  return (
    <Container className="starts">
      {[...Array(100)].map((_, index) => (
        <Star key={index} />
      ))}
    </Container>
  );
};

export default StarryBackground;
