import Image from "next/image";
import { useState, useEffect } from "react";

export default function  ParallaxImage  ({ src, alt })  {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative  h-[400px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{
          transform: `translateY(${offsetY * 0.1}px)`, // Adjust multiplier for intensity
        }}
      />
    </div>
  );
};

 
