interface MagazineCutoutProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}

const MagazineCutout = ({ src, alt, className = "", rotation = 0 }: MagazineCutoutProps) => {
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
      />
    </div>
  );
};

export default MagazineCutout;
