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
      <div className="relative">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-contain drop-shadow-xl"
          style={{
            filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
            WebkitFilter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
          }}
        />
      </div>
    </div>
  );
};

export default MagazineCutout;
