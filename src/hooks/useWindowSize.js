import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

//custom hook to determine the canvas size
export default function useWindowSize() {
  // check if window is defined
  function getSize() {
    if (isBrowser) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      if (isBrowser) {
        setWindowSize(getSize());
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
