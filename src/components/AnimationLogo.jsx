import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function AnimationLogo() {
  const textRef = useRef(null);
  const text = "Exclusive";

  useEffect(() => {
    const letters = textRef.current.children;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Harflarni chiqarish
    tl.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "power3.out",
      }
    )

    // Kutish
    .to({}, { duration: 1 })

    // Harflarni o‘chirish (teskari tartibda)
    .to(letters, {
      opacity: 0,
      y: -20,
      stagger: 0.08,
      duration: 0.2,
      ease: "power3.in",
    });

  }, []);

  return (
    <Link to="/" className="inline-block">
      <span
        ref={textRef}
        className="text-4xl font-bold tracking-widest text-MainColor inline-block"
      >
        {text.split("").map((letter, i) => (
          <span key={i} className="inline-block">
            {letter}
          </span>
        ))}
      </span>
    </Link>
  );
}

export default AnimationLogo;