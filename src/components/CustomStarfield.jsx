'use client';

import React, { useEffect } from 'react';

export default function CustomStarfield(props) {
  const {
    speedFactor = 0.05,
    backgroundColor = 'black',
    starColor = [255, 255, 255],
    starCount = 1000,
  } = props;

  useEffect(() => {
    const canvas = document.getElementById('starfield');

    if (!canvas) {
      console.error('Could not find canvas element with id "starfield"');
      return;
    }

    const c = canvas.getContext('2d');

    if (!c) {
      console.error('Could not get 2d context from canvas element');
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        out.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        });
      }
      return out;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      c.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance) => {
      for (let i = 0; i < stars.length; i++) {
        stars[i].z -= distance;
        while (stars[i].z <= 1) {
          stars[i].z += 1000;
        }
      }
    };

    let prevTime;

    const init = (time) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    const tick = (time) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);
      clear();

      const cx = w / 2;
      const cy = h / 2;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = star.z / 1000;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [starColor, backgroundColor, speedFactor, starCount]);

  return (
    <canvas
      id="starfield"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
}
