import { useState, type ImgHTMLAttributes } from "react";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  /** Use eager for above-the-fold images (hero, LCP) */
  eager?: boolean;
}

/**
 * Drop-in replacement for <img> that adds:
 * - Native lazy loading (loading="lazy") for below-fold images
 * - Async decoding for non-blocking render
 * - Fade-in + slight scale/translate animation on load
 * - Muted background placeholder while loading
 */
export const LazyImage = ({ src, alt, eager = false, className = "", ...props }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`bg-muted transition-all duration-700 ease-out will-change-[opacity,transform] ${
        loaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[1.03] translate-y-3"
      } ${className}`}
      {...props}
    />
  );
};
