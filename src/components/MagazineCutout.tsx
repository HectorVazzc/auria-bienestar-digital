interface MagazineCutoutProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}

const MagazineCutout = ({ src, alt, className = "", rotation = 0 }: MagazineCutoutProps) => {
  // Multiple white drop-shadows to create a thick outline that follows the shape
  const outlineFilter = [
    "drop-shadow(0 0 0px white)",
    "drop-shadow(1px 0 0px white)",
    "drop-shadow(-1px 0 0px white)",
    "drop-shadow(0 1px 0px white)",
    "drop-shadow(0 -1px 0px white)",
    "drop-shadow(2px 0 0px white)",
    "drop-shadow(-2px 0 0px white)",
    "drop-shadow(0 2px 0px white)",
    "drop-shadow(0 -2px 0px white)",
    "drop-shadow(3px 0 0px white)",
    "drop-shadow(-3px 0 0px white)",
    "drop-shadow(0 3px 0px white)",
    "drop-shadow(0 -3px 0px white)",
    "drop-shadow(2px 2px 0px white)",
    "drop-shadow(-2px 2px 0px white)",
    "drop-shadow(2px -2px 0px white)",
    "drop-shadow(-2px -2px 0px white)",
  ].join(" ");

  return (
    <div
      className={`inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={400}
        height={400}
        className="w-full h-full object-contain"
        style={{ filter: outlineFilter }}
      />
    </div>
  );
};

export default MagazineCutout;
