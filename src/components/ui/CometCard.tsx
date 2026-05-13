"use client";
import React, { useRef, useState } from "react";

type AspectRatio = "portrait" | "landscape" | "square" | "cinema";

const RATIOS: { label: string; key: AspectRatio; css: string }[] = [
  { label: "Portrait 3:4",   key: "portrait",  css: "aspect-[3/4]"  },
  { label: "Landscape 16:9", key: "landscape", css: "aspect-[16/9]" },
  { label: "Square 1:1",     key: "square",    css: "aspect-[1/1]"  },
  { label: "Cinema 21:9",    key: "cinema",    css: "aspect-[21/9]" },
];

export default function CometCardEnhanced() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState<AspectRatio>("portrait");
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, scale: 1, z: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const currentRatio = RATIOS.find((r) => r.key === ratio)!;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ rotX: -dy * 17.5, rotY: dx * 17.5, scale: 1.05, z: 30 });
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.6,
    });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotX: 0, rotY: 0, scale: 1, z: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setHovered(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-12 bg-[#0a0a0a] min-h-screen font-mono">

      {/* Ratio Controls */}
      <div className="flex gap-2 flex-wrap justify-center">
        {RATIOS.map((r) => (
          <button
            key={r.key}
            onClick={() => setRatio(r.key)}
            className={`px-4 py-1.5 rounded-full border text-[11px] tracking-widest uppercase transition-all duration-200 cursor-pointer
              ${ratio === r.key
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-500 border-gray-700 hover:border-gray-400 hover:text-gray-300"
              }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Card Scene */}
      <div style={{ perspective: "800px" }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl cursor-pointer"
          style={{
            transform: `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale(${tilt.scale}) translateZ(${tilt.z}px)`,
            transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
            boxShadow: "0px 83px 83px rgba(0,0,0,0.26), 0px 21px 46px rgba(0,0,0,0.29)",
          }}
        >
          <div className="bg-[#1F2121] rounded-[18px] p-2.5 w-72">

            {/* Image */}
            <div
              className={`relative rounded-[14px] overflow-hidden transition-all duration-500 ${currentRatio.css}`}
            >
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop"
                alt="Invite background"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ${
                  hovered ? "contrast-90 saturate-[0.6]" : "contrast-75 saturate-0"
                }`}
              />

              {/* Badge — hides on hover */}
              <div
                className={`absolute top-3 right-3 z-10 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1 text-[9px] text-white/70 tracking-widest uppercase transition-opacity duration-300 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              >
                ✦ Exclusive
              </div>

              {/* Hover Info Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 rounded-[14px] transition-opacity duration-350 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.88) 100%)",
                }}
              >
                <p className="text-white font-bold text-[15px] tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                  Northern Lights
                </p>
                <p className="text-white/50 text-[10px] mt-0.5 leading-relaxed">
                  Iceland · Jan 2024 · Limited Edition
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {["Nature", "Aurora", "Rare"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 border border-white/15 text-white/70 px-2 py-0.5 rounded-full text-[9px] tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-2 py-3">
              <span className="text-white text-[10px] tracking-widest">COMET INVITATION</span>
              <span className="text-white/35 text-[10px] tracking-widest">#F7RA</span>
            </div>
          </div>

          {/* Glare overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[18px] z-50 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 20%, transparent 70%)`,
              opacity: glare.opacity,
              transition: hovered ? "opacity 0.1s" : "opacity 0.4s",
            }}
          />
        </div>
      </div>
    </div>
  );
}