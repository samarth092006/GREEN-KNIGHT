"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { Brain, Cloud, Shield, Database, Network, Sparkles } from "lucide-react";

const loadingMessages = [
  "Initializing AI Systems...",
  "Connecting Secure Cloud...",
  "Loading Enterprise Services...",
  "Preparing Intelligent Solutions...",
  "Launching Green Knights...",
];

// Deterministic particle data — no Math.random() in render
const particles = [
  { x: -320, y: -180, color: "#0B6E4F", size: 6, delay: 0,    duration: 5 },
  { x:  240, y: -220, color: "#C9A227", size: 4, delay: 0.4,  duration: 6 },
  { x: -200, y:  200, color: "#ffffff", size: 5, delay: 0.8,  duration: 4.5 },
  { x:  310, y:  150, color: "#0B6E4F", size: 3, delay: 1.2,  duration: 7 },
  { x: -380, y:   60, color: "#C9A227", size: 6, delay: 0.2,  duration: 5.5 },
  { x:  180, y: -280, color: "#ffffff", size: 4, delay: 1.0,  duration: 6.5 },
  { x: -140, y: -310, color: "#0B6E4F", size: 5, delay: 0.6,  duration: 4 },
  { x:  350, y: -100, color: "#C9A227", size: 3, delay: 1.4,  duration: 5 },
  { x: -260, y:  280, color: "#0B6E4F", size: 4, delay: 0.3,  duration: 7.5 },
  { x:  290, y:  240, color: "#ffffff", size: 6, delay: 0.9,  duration: 5.5 },
  { x:  120, y:  320, color: "#C9A227", size: 4, delay: 1.6,  duration: 6 },
  { x: -340, y: -280, color: "#0B6E4F", size: 3, delay: 0.7,  duration: 4.5 },
  { x:  400, y:   30, color: "#C9A227", size: 5, delay: 1.1,  duration: 7 },
  { x: -100, y:  350, color: "#ffffff", size: 3, delay: 0.5,  duration: 5 },
  { x:  210, y: -340, color: "#0B6E4F", size: 6, delay: 1.3,  duration: 6.5 },
  { x: -440, y:  140, color: "#C9A227", size: 4, delay: 1.8,  duration: 4 },
  { x:  360, y:  310, color: "#ffffff", size: 5, delay: 0.1,  duration: 7 },
  { x: -180, y: -380, color: "#0B6E4F", size: 3, delay: 1.5,  duration: 5.5 },
];

const decorIcons = [
  { Icon: Brain,    x: "8%",  y: "12%", rotate:  -15 },
  { Icon: Cloud,    x: "88%", y: "10%", rotate:   10 },
  { Icon: Shield,   x: "6%",  y: "75%", rotate:   -8 },
  { Icon: Database, x: "90%", y: "72%", rotate:   12 },
  { Icon: Network,  x: "50%", y: "6%",  rotate:    0 },
];

export default function LoadingScreen() {
  const [show, setShow]         = useState(true);
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [exiting, setExiting]   = useState(false);
  const ringControls = useAnimation();

  // Progress counter — deterministic steps, runs only client-side
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setExiting(true);
          // Accelerate rings, then fade out
          ringControls.start({
            rotate: 720,
            transition: { duration: 0.8, ease: "easeIn" },
          });
          setTimeout(() => setShow(false), 1200);
          return 100;
        }
        return Math.min(p + 8, 100);
      });
    }, 75);
    return () => clearInterval(interval);
  }, [ringControls]);

  // Message ticker
  useEffect(() => {
    const t = setInterval(() => {
      setMsgIndex((i) => (i + 1) % loadingMessages.length);
    }, 900);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden select-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #F5F0DA 0%, #EDE8CC 40%, #E0DBC0 70%, #D5D0B5 100%)",
          }}
        >
          {/* ── Subtle grid overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,110,79,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,110,79,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* ── Floating blurred background circles ── */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(11,110,79,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 400, height: 400,
              left: "60%", top: "30%",
              background: "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* ── Light vignette ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.08) 100%)",
            }}
          />

          {/* ── Decorative tech icons ── */}
          {decorIcons.map(({ Icon, x, y, rotate }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.04, 0.1, 0.04] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              className="absolute pointer-events-none"
              style={{ left: x, top: y, rotate: `${rotate}deg` }}
            >
              <Icon size={40} className="text-[#0B6E4F]" strokeWidth={1} />
            </motion.div>
          ))}

          {/* ── Floating Particles ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.5 }}
                animate={{
                  y:       [p.y, p.y - 90, p.y],
                  opacity: [0, 0.75, 0],
                  scale:   [0.5, 1.3, 0.5],
                }}
                transition={{
                  duration: p.duration,
                  repeat:   Infinity,
                  ease:     "easeInOut",
                  delay:    p.delay,
                }}
                className="absolute rounded-full"
                style={{
                  width: p.size, height: p.size,
                  background: p.color,
                  boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                  left: "50%", top: "50%",
                }}
              />
            ))}
          </div>

          {/* ── Central Logo + Rings ── */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Outer gold ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dashed pointer-events-none"
              style={{
                width: 280, height: 280,
                borderColor: "rgba(201,162,39,0.45)",
              }}
            />

            {/* Middle emerald dashed ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border-2 border-dashed pointer-events-none"
              style={{
                width: 230, height: 230,
                borderColor: "rgba(11,110,79,0.55)",
              }}
            />

            {/* Inner pulsing glow ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 188, height: 188,
                background: "radial-gradient(circle, rgba(11,110,79,0.25) 0%, rgba(201,162,39,0.12) 60%, transparent 80%)",
                filter: "blur(8px)",
              }}
            />

            {/* Premium glass logo card */}
            <motion.div
              animate={exiting ? { scale: 1.15 } : { scale: [0.97, 1.03, 0.97] }}
              transition={
                exiting
                  ? { duration: 0.6, ease: "easeOut" }
                  : { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative z-10 flex items-center justify-center rounded-3xl"
              style={{
                width: 180, height: 180,
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1.5px solid rgba(255,255,255,0.75)",
                boxShadow:
                  "0 8px 40px rgba(11,110,79,0.2), 0 2px 12px rgba(201,162,39,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <Image
                src="/images/brand/gk-shield-premium.png"
                alt="Green Knights Premium Shield"
                width={150}
                height={150}
                className="object-contain drop-shadow-xl"
                priority
              />
            </motion.div>
          </div>

          {/* ── Company Name ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            <h1
              className="font-extrabold text-3xl sm:text-4xl mb-2 tracking-wide"
              style={{ color: "#1A1A14", fontFamily: "'Playfair Display', serif", letterSpacing: "0.04em" }}
            >
              Green Knights of Tech & AI
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#0B6E4F]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B6E4F] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#C9A227]" />
                Enterprise AI • Cloud • Security
                <Sparkles size={12} className="text-[#C9A227]" />
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#0B6E4F]" />
            </div>
          </motion.div>

          {/* ── Shimmer Progress Bar ── */}
          <div className="w-72 max-w-[88vw]">
            <div
              className="w-full h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(11,110,79,0.1)" }}
            >
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: "linear-gradient(90deg, #0B6E4F 0%, #1A8F68 40%, #C9A227 100%)",
                }}
                transition={{ ease: "easeOut" }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ["-100%", "250%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 h-full skew-x-12"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)" }}
                />
              </motion.div>
            </div>

            {/* Message + Percentage row */}
            <div className="flex items-center justify-between mt-3 px-0.5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={msgIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.22 }}
                  className="text-[11px] font-semibold text-[#4A5568]"
                >
                  {loadingMessages[msgIndex]}
                </motion.p>
              </AnimatePresence>

              <span className="text-xs font-bold text-[#0B6E4F] font-mono tabular-nums">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </div>

          {/* ── Footer ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9AA0A6]"
          >
            Powered by AI • Cloud • Security
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
