"use client";

import { useEffect, useState } from "react";

export function useTransparentLogo(src: string) {
  const [transparentSrc, setTransparentSrc] = useState<string>(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Loop through pixels and make white/near-white transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If the pixel is near-white (threshold of 200)
        if (r > 200 && g > 200 && b > 200) {
          data[i + 3] = 0; // Set alpha to 0
        }
      }

      ctx.putImageData(imageData, 0, 0);
      try {
        setTransparentSrc(canvas.toDataURL("image/png"));
      } catch (err) {
        console.error("Failed to generate transparent logo data URL:", err);
      }
    };
  }, [src]);

  return transparentSrc;
}
