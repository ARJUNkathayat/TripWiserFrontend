"use client";
import React, { useRef, useState } from "react";

export type AspectRatio = "portrait" | "landscape" | "square" | "cinema";

export interface CometCardProps {
  width?: number;
  ratio?: AspectRatio;
  imageHeight?: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  cardBg?: string;       // ← pass your color here
  maxTilt?: number;
  hoverScale?: number;
  padding?: number;
  rank:number;
  attraction_name:string;
  rating:number;
  attraction_image_url:string
  category:string;
  review_count:number;
}

const RATIO_MAP: Record<AspectRatio, string> = {
  portrait:  "3 / 4",
  landscape: "16 / 9",
  square:    "1 / 1",
  cinema:    "21 / 9",
};

export function Cards({
  width      = 288,
  ratio      = "portrait",
  imageHeight,
 
  imageAlt   = "Card image",
  
  cardBg     = "black",   // ← white default now
  maxTilt    = 17.5,  
  hoverScale = 1.05,
  padding    = 3,
  rank,
   attraction_name,
   rating,
    attraction_image_url,
     category,
      review_count



}: CometCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt]     = useState({ rotX: 0, rotY: 0 });
  const [glare, setGlare]   = useState({ x: 50, y: 50, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2)  / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    setTilt({ rotX: -dy * maxTilt, rotY: dx * maxTilt });
    setGlare({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
      opacity: 0.6,
    });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotX: 0, rotY: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setHovered(false);
  };

  return (
    <div style={{ perspective: "800px", display: "inline-block" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          borderRadius: "18px",
          cursor: "pointer",
          transform: `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale(${hovered ? hoverScale : 1})`,
          transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          boxShadow: "0px 83px 83px rgba(0,0,0,0.26), 0px 21px 46px rgba(0,0,0,0.29)",
        }}
      >
        <div style={{
          background: cardBg,
          borderRadius: "18px",
          padding: `${padding}px`,
          width: `${width}px`,
        }}>
          {/* Image */}
          <div style={{
            position: "relative",
            borderRadius: "14px",
            overflow: "hidden",
            ...(imageHeight ? { height: imageHeight } : { aspectRatio: RATIO_MAP[ratio] }),
          }}>
            <img
              src={attraction_image_url}
              alt={imageAlt}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {rank && (
              <div style={{
                position: "absolute",
                top: 12, right: 12, zIndex: 10,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "4px 12px",
                fontSize: "9px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: hovered ? 0 : 1,
                transition: "opacity 0.3s",
              }}>
                {rank}
              </div>
            )}

            {/* Bottom Content */}
<div
  style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "18px",
    background:
      hovered
        ? "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25), transparent)"
        : "linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)",
    transition: "all 0.35s ease",
  }}
>
  {/* Name always visible */}
  <h3
    style={{
      color: "white",
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
      transform: hovered ? "translateY(0px)" : "translateY(18px)",
      transition: "all 0.35s ease",
    }}
  >
    {attraction_name}
  </h3>

  {/* Hover content */}
  <div
    style={{
      opacity: hovered ? 1 : 0,
      maxHeight: hovered ? "200px" : "0px",
      overflow: "hidden",
      transition: "all 0.35s ease",
      marginTop: hovered ? "10px" : "0px",
    }}
  >
    <p
      style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "13px",
        margin: "4px 0",
      }}
    >
      ⭐ {rating} rating
    </p>

    <p
      style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: "13px",
        margin: "4px 0",
      }}
    >
      {review_count} reviews
    </p>

    <p
      style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: "12px",
        margin: "6px 0 0",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {category}
    </p>
  </div>
</div>
          </div>
        </div>

        {/* Glare */}
        <div style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          borderRadius: "18px",
          zIndex: 50,
          mixBlendMode: "overlay",
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 20%, transparent 70%)`,
          opacity: glare.opacity,
          transition: hovered ? "opacity 0.1s" : "opacity 0.4s",
        }} />
      </div>
    </div>
  );
}