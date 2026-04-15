import { useEffect, useState } from "react";
import logoAuria from "@/assets/logo-auria.png";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFading(true), 1200);
    const hideTimer = setTimeout(() => setIsVisible(false), 1800);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center gradient-hero transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Cargando AURIA"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-widest">
          AURIA
        </h1>
        <div className="mt-4 w-32 h-0.5 mx-auto shimmer rounded-full" />
      </div>
    </div>
  );
};

export default Preloader;
