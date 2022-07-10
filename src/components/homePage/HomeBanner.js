import React, { useEffect, useRef } from "react";
import BannerVideo from "../../assets/video/video.mp4";
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles";

//context
import { useGlobalStateContext } from "../../context/globalContext";

//custom hook
import useWindowSize from "../../hooks/useWindowSize";

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();

  //canvas
  useEffect(() => {
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode();

    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");

    let lastX;
    let lastY;

    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#fff";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseover", (e) => {
      moving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageXY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseup", (e) => {
      moving = false;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageXY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (e) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentTheme]);

  //banner title animation
  const parent = {
    initial: { y: 800 },
    animate: { y: 0, transition: { staggerChildren: 0.2 } },
  };

  //headline animation
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  return (
    <Banner>
      <Video>
        <video
          controls
          autoPlay="autoPlay"
          muted
          loop
          height="100%"
          width="100%"
        >
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child} initial="initial" animate="animate">
          DIG
        </Headline>
        <Headline variants={child} initial="initial" animate="animate">
          DEEP
        </Headline>
      </BannerTitle>
    </Banner>
  );
};

export default HomeBanner;
