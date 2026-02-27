import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AnimationLogo() {
  const textRef = useRef(null);
  const gradientRef = useRef(null);
  const text = "Exclusive";

  useGSAP(() => {
    // Harflarga wave effect
    gsap.to(textRef.current.children, {
      y: -2,
      duration: 1,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: "sine.inOut",
    });

    // Gradient harakatlanishi
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% center",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <h1
      ref={textRef}
      className="text-4xl font-extrabold tracking-widest flex gap-1 select-none"
    >
      {text.split("").map((letter, i) => (
        <span
          key={i}
          ref={gradientRef}
          className="inline-block bg-gradient-to-r 
                     from-blue-500 via-indigo-500 to-cyan-400
                     bg-[length:200%_200%] bg-clip-text text-transparent"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}

export default AnimationLogo;
