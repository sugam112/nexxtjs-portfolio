import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Divider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      className="divider"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    ></span>
  );
}

export default Divider;
