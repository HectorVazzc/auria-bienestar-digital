interface MagazineCutoutProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}

const MagazineCutout = ({ src, alt, className = "", rotation = 0 }: MagazineCutoutProps) => {
  // Use a single layered drop-shadow for performance instead of 17 stacked ones
  const outlineFilter = [
    "drop-shadow(0 0 2px white)",
    "drop-shadow(0 0 3px white)",
    "drop-shadow(0 0 4px white)",
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
