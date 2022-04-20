import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover : hover vao
  // mouseout : hover ra
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
