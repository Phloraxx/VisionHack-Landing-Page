import React from "react";

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | { src: string; width?: number; height?: number };
  alt: string;
  priority?: boolean;
}

export default function Image({ src, alt, priority, ...props }: ImageProps) {
  // Resolve image source if it is an object from a static import
  const resolvedSrc = typeof src === "object" && src !== null ? src.src : src;

  // Render standard img element
  return <img src={resolvedSrc} alt={alt} {...props} />;
}
