"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Code2,
  Cloud,
  ShieldCheck,
  Zap,
  Cog,
  Lightbulb,
  BarChart2,
} from "lucide-react";
import { roundTableServices } from "@/data/roundTableServices";

// ── Icons for 8 Services ──────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain size={12} strokeWidth={1.8} />,
  Code2: <Code2 size={12} strokeWidth={1.8} />,
  Cloud: <Cloud size={12} strokeWidth={1.8} />,
  ShieldCheck: <ShieldCheck size={12} strokeWidth={1.8} />,
  Zap: <Zap size={12} strokeWidth={1.8} />,
  Cog: <Cog size={12} strokeWidth={1.8} />,
  Lightbulb: <Lightbulb size={12} strokeWidth={1.8} />,
  BarChart2: <BarChart2 size={12} strokeWidth={1.8} />,
};

// ── Geometry & Rotation Constants ─────────────────────────────────────────────
const N = 8;
const DURATION_MS = 25_000; // 25 seconds per full 360° revolution

// Background aspect ratio 1448x1086 (4:3)
// Table center: 50% left, 52% top
const CENTER_X = 50; // %
const CENTER_Y = 52; // %

// Perspective Ellipse radii for hotspot orbit
const RADIUS_X = 20.5; // % of container width
const RADIUS_Y = 16.0; // % of container height

// Base starting angles for 8 service positions (starts at top = -90°)
const BASE_ANGLES = Array.from({ length: N }, (_, i) => (i * 360) / N - 90);

interface RoundTableSceneProps {
  reducedMotion?: boolean;
}

export default function RoundTableScene({
  reducedMotion = false,
}: RoundTableSceneProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // rAF global rotation state (0° -> 360°)
  const angleRef = useRef(0);
  const lastTsRef = useRef(0);
  const rafRef = useRef(0);
  const runningRef = useRef(false);

  // DOM refs for direct position mutation (avoids React re-renders every frame)
  const hotspotRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const isPaused = reducedMotion;

  // rAF loop update — updates hotspot X/Y coordinates along the perspective ellipse
  const tickRef = useRef<(ts: number) => void>(() => {});

  useEffect(() => {
    tickRef.current = (ts: number) => {
      if (!runningRef.current) return;
      if (lastTsRef.current !== 0) {
        const delta = ts - lastTsRef.current;
        angleRef.current = (angleRef.current + (360 / DURATION_MS) * delta) % 360;
      }
      lastTsRef.current = ts;
      const currentRotation = angleRef.current;

      // Update position of each of the 8 service hotspots
      hotspotRefs.current.forEach((el, i) => {
        if (!el) return;
        const baseAngle = BASE_ANGLES[i];
        const angleDeg = (currentRotation + baseAngle) % 360;
        const angleRad = (angleDeg * Math.PI) / 180;

        // Calculate perspective ellipse coordinates
        const x = RADIUS_X * Math.cos(angleRad);
        const y = RADIUS_Y * Math.sin(angleRad);

        const leftPct = CENTER_X + x;
        const topPct = CENTER_Y + y;

        el.style.left = `${leftPct}%`;
        el.style.top = `${topPct}%`;
      });

      rafRef.current = requestAnimationFrame(tickRef.current);
    };
  });

  const start = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(tickRef.current);
  }, []);

  const stop = useCallback(() => {
    runningRef.current = false;
    lastTsRef.current = 0;
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    if (isPaused) {
      stop();
    } else {
      start();
    }
    return stop;
  }, [isPaused, start, stop]);

  return (
    <div
      className="round-table-scene relative w-full max-w-[720px] lg:max-w-[760px] mx-auto select-none overflow-hidden rounded-3xl border border-[#0B6E4F]/20 shadow-2xl transition-all duration-300"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* ══════════════════════════════════════════════════════════════════════
          LAYER 1 — 100% STATIC BACKGROUND IMAGE
          Castle environment + banners + torches + chairs + ALL 8 KNIGHTS + PHYSICAL TABLE.
          100% STATIONARY. NO ROTATION. object-fit: contain ensures no knight is cropped.
        ══════════════════════════════════════════════════════════════════════ */}
      <div className="static-background absolute inset-0 pointer-events-none">
        <Image
          src="/images/brand/roundtable-background.png"
          alt="Green Knights Round Table Environment — 8 Digital Knights"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-contain"
        />
      </div>

      {/* Torch pulse ambient glow overlays (static position) */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div
          className="absolute w-20 h-20 rounded-full"
          style={{
            left: "7%",
            top: "14%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,160,0,0.5) 0%, transparent 70%)",
            filter: "blur(12px)",
            animation: "torchPulse 2.4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-20 h-20 rounded-full"
          style={{
            right: "7%",
            top: "14%",
            transform: "translate(50%, -50%)",
            background: "radial-gradient(circle, rgba(255,160,0,0.5) 0%, transparent 70%)",
            filter: "blur(12px)",
            animation: "torchPulse 2.4s ease-in-out infinite 1.2s",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          LAYER 2 — 8 ORBITING SERVICE HOTSPOTS (DIRECT LINK NAVIGATION ON CLICK)
          - Clicking ANY hotspot immediately navigates to its service page (/services/[slug]).
          - NO modals, side panels, or resizing on click.
          - Hotspot text and icons remain 100% UPRIGHT and READABLE.
        ══════════════════════════════════════════════════════════════════════ */}
      <div className="service-carousel-layer absolute inset-0 z-20 pointer-events-none">
        {roundTableServices.map((svc, i) => {
          const isHovered = hoveredId === svc.id;

          // Initial position at angle 0
          const baseAngle = BASE_ANGLES[i];
          const angleRad = (baseAngle * Math.PI) / 180;
          const initialX = CENTER_X + RADIUS_X * Math.cos(angleRad);
          const initialY = CENTER_Y + RADIUS_Y * Math.sin(angleRad);

          return (
            <Link
              key={svc.id}
              href={svc.slug}
              ref={(el) => {
                hotspotRefs.current[i] = el;
              }}
              className="absolute group flex flex-col items-center justify-center gap-0.5 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-1 transition-all duration-300 backdrop-blur-md px-2 py-1 min-w-[62px] sm:min-w-[68px] pointer-events-auto"
              style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
                transform: "translate(-50%, -50%)",
                willChange: "left, top",
                background: isHovered
                  ? "rgba(8, 30, 20, 0.95)"
                  : "rgba(5, 20, 13, 0.85)",
                border: isHovered
                  ? "1.5px solid #C9A227"
                  : "1px solid rgba(201,162,39,0.45)",
                boxShadow: isHovered
                  ? "0 0 16px rgba(201,162,39,0.7), 0 0 8px rgba(11,110,79,0.8)"
                  : "0 3px 10px rgba(0,0,0,0.6)",
              }}
              onMouseEnter={() => setHoveredId(svc.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Explore ${svc.name}`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                <span
                  style={{
                    color: isHovered ? "#C9A227" : "#FFF8DC",
                  }}
                  className="transition-colors duration-200"
                >
                  {ICON_MAP[svc.iconName]}
                </span>
              </div>

              {/* Service Name — UPRIGHT */}
              <span
                className="font-semibold text-[8px] sm:text-[9px] text-center leading-tight tracking-tight transition-colors duration-200"
                style={{
                  color: isHovered ? "#FFF8DC" : "rgba(255,248,220,0.9)",
                  maxWidth: "68px",
                }}
              >
                {svc.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          LAYER 3 — FIXED CENTER EMBLEM
          Official Green Knights shield, 100% stationary and upright at table center.
        ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="fixed-center-shield absolute z-30 pointer-events-none"
        style={{
          left: `${CENTER_X}%`,
          top: `${CENTER_Y}%`,
          width: "12%",
          aspectRatio: "1 / 1",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Breathing glow animation */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,110,79,0.7) 0%, rgba(201,162,39,0.3) 55%, transparent 80%)",
            filter: "blur(10px)",
            animation: "shieldBreath 3s ease-in-out infinite",
          }}
        />
        {/* Gold accent ring around emblem */}
        <div
          className="absolute -inset-1 rounded-full pointer-events-none"
          style={{
            border: "1.5px solid rgba(201,162,39,0.5)",
          }}
        />
        {/* Transparent Shield PNG */}
        <div className="relative w-full h-full drop-shadow-[0_0_16px_rgba(11,110,79,0.95)]">
          <Image
            src="/images/brand/gk-shield-transparent.png"
            alt="Green Knights Official Shield"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
