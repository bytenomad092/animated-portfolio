import { useEffect, useRef, useState } from "react";

const NAME_LETTERS = [
  { char: "M", className: "ai_svg_M" },
  { char: "a", className: "ai_svg_U" },
  { char: "r", className: "ai_svg_N" },
  { char: "k", className: "ai_svg_E1" },
  { char: "E", className: "ai_svg_E2" },
  { char: "l", className: "ai_svg_B" },
  { char: "m", className: "ai_svg_K1" },
  { char: "o", className: "ai_svg_K2" },
  { char: "r", className: "ai_svg_K3" },
  { char: "e", className: "ai_svg_H" },
];

const SvgLetter = ({ char, className, index, total }) => {
  const step = 1000 / (total + 1);
  const x = step * (index + 1);

  return (
    <div className={`ai-afzal-imdad-parallax ${className}`}>
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="1000"
      >
        <text
          x={x}
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="220"
        >
          {char}
        </text>
      </svg>
    </div>
  );
};

export default function AfzalImdad() {
  const ref = useRef(null);
  const [mount, handleMount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      const isVisible = rect?.top < window.innerHeight / 2;
      handleMount(Boolean(isVisible));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ai-afzal-imdad ${mount ? "ai-afzal-imdad-visible" : ""}`}
    >
      {NAME_LETTERS.map((item, index) => (
        <SvgLetter
          key={`${item.char}-${index}`}
          char={item.char}
          className={item.className}
          index={index}
          total={NAME_LETTERS.length}
        />
      ))}
    </div>
  );
}
