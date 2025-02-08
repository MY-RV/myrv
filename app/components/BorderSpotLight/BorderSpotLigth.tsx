import { useRef, useState } from "react";

/**
 * BoderSpotlight Component
 *
 * This component creates a spotlight effect with customizable border colors and focus behavior.
 * It allows highlighting sections with a radial spotlight that follows the mouse pointer.
 *
 * Props:
 * - `children` (ReactNode): Content to be displayed inside the spotlight container.
 * - `borderColor` (string): The default border color. (Default: 'gray-500')
 * - `focusBorderColor` (string): The border color when the element is focused. (Default: '#97EB9D')
 * - `spotlightBorderColor` (string): The color of the spotlight border. (Default: '#97EB9D')
 *
 * Usage:
 * ```jsx
 * <BoderSpotlight
 *   borderColor="gray-500"
 *   focusBorderColor="#FF5733"
 *   spotlightBorderColor="#FFC300"
 * >
 *   <p>Content with spotlight effect</p>
 * </BoderSpotlight>
 * ```
 */

const BoderSpotlight = ({
  children,
  borderColor = "white/5",
  focusBorderColor = "#97EB9D",
  spotlightBorderColor = "#97EB9D",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="z-0 relative w-full h-full">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        className={`h-full rounded-md cursor-pointer border border-${borderColor} dark:border-gray-500 focus:border-${focusBorderColor} focus:outline-none transition-colors duration-500`}
      >
        {children}
      </div>
      <div
        style={{
          border: `1px solid ${spotlightBorderColor}`,
          opacity,
          WebkitMaskImage: `radial-gradient(50% 50px at ${position.x}px ${position.y}px, black 60%, transparent)`,
          borderRadius: "6px",
        }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-transparent opacity-0 transition-opacity duration-500"
      />
    </div>
  );
};

export default BoderSpotlight;
