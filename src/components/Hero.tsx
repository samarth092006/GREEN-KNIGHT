"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Globe,
  ShieldCheck,
  Cloud,
} from "lucide-react";
import RoundTableExperience from "@/components/roundtable/RoundTableExperience";

const stats = [
  {
    icon: <Briefcase size={22} className="text-[#0B6E4F]" />,
    value: "Enterprise AI",
    label: "Intelligent Automation",
  },
  {
    icon: <Cloud size={22} className="text-[#C9A227]" />,
    value: "Cloud Native",
    label: "AWS, Azure & GCP",
  },
  {
    icon: <ShieldCheck size={22} className="text-[#0B6E4F]" />,
    value: "Zero Trust",
    label: "Enterprise Security",
  },
  {
    icon: <Globe size={22} className="text-[#C9A227]" />,
    value: "24/7 SLA",
    label: "Dedicated Support",
  },
];

const trustBadges = ["Enterprise Ready", "AI Driven", "Secure by Design"];

/* ─── Motion variants for clean stagger entrance ─── */
const containerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
} as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse parallax motion values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const orbX = useTransform(springX, [-1, 1], [10, -10]);
  const orbY = useTransform(springY, [-1, 1], [8, -8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full pt-[96px] sm:pt-[104px] pb-10 sm:pb-12 lg:pb-16 noise-overlay flex flex-col justify-center"
      style={{
        background: "linear-gradient(155deg, #FFF8DC 0%, #FAF6DC 40%, #F5F0D2 100%)",
      }}
    >
      {/* ── Layered Background: mesh grid & ambient glowing blobs (contained overflow) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              linear-gradient(rgba(11, 110, 79, 0.06) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(11, 110, 79, 0.06) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            top: "-15%",
            left: "-10%",
            width: "min(750px, 85vw)",
            height: "min(750px, 85vw)",
            background: "radial-gradient(circle, rgba(11,110,79,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
            x: orbX,
            y: orbY,
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: "-15%",
            right: "-10%",
            width: "min(650px, 75vw)",
            height: "min(650px, 75vw)",
            background: "radial-gradient(circle, rgba(201,162,39,0.11) 0%, transparent 70%)",
            filter: "blur(60px)",
            x: useTransform(springX, [-1, 1], [-8, 8]),
            y: useTransform(springY, [-1, 1], [-6, 6]),
          }}
        />
      </div>

      {/* ── Main Container: Hero Text (Left on Desktop, Top on Mobile) + Round Table (Right on Desktop, Center on Mobile) ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[44fr_56fr] gap-8 xl:gap-12 items-center">

          {/* ═══ HERO TEXT CONTENT ═══ */}
          <motion.div
            variants={containerVar}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp} className="mb-3.5 sm:mb-5">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-bold tracking-[0.08em] uppercase shadow-xs"
                style={{
                  background: "rgba(11, 110, 79, 0.11)",
                  color: "#0B6E4F",
                  border: "1px solid rgba(11, 110, 79, 0.25)",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                  style={{ background: "#0B6E4F" }}
                />
                AI-Powered Enterprise Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[32px] sm:text-[48px] lg:text-[60px] xl:text-[64px] font-extrabold tracking-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.25rem, 8.5vw, 4.5rem)",
                lineHeight: "1.08",
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Building{" "}
              <span style={{ color: "#0B6E4F" }}>Intelligent</span>
              <br />
              Technology for
              <br />
              <span
                style={{
                  background: "linear-gradient(120deg, #C9A227 0%, #E5BE3B 50%, #C9A227 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tomorrow
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mb-5 sm:mb-7 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.6] max-w-[720px] font-medium"
              style={{
                color: "#1F2937",
              }}
            >
              <strong style={{ color: "#0B6E4F", fontWeight: 700 }}>GREEN KNIGHTS OF TECH &amp; AI LTD</strong> helps
              enterprises transform with AI, cloud, cybersecurity, automation, and next-generation
              software engineering.
            </motion.p>

            {/* Two CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-7">
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.04, y: -3, boxShadow: "0 14px 32px rgba(11,110,79,0.42)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2.5 font-bold text-white px-7 py-3.5 sm:px-8 sm:py-4 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #0B6E4F 0%, #145A32 100%)",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.0625rem", /* 17px */
                  letterSpacing: "0.01em",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                id="hero-primary-cta"
              >
                Book Consultation
                <motion.span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
                >
                  <ArrowRight size={19} strokeWidth={2.5} />
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#services")}
                whileHover={{ scale: 1.04, y: -2, background: "rgba(11,110,79,0.08)", borderColor: "#0B6E4F" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2.5 font-bold px-7 py-3.5 sm:px-8 sm:py-4 w-full sm:w-auto"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  color: "#111827",
                  borderRadius: "12px",
                  border: "1.5px solid rgba(11,110,79,0.28)",
                  cursor: "pointer",
                  fontSize: "1rem", /* 16px */
                  backdropFilter: "blur(8px)",
                  transition: "border-color 0.25s, background-color 0.25s, transform 0.25s",
                }}
                id="hero-secondary-cta"
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-2 sm:mb-4 text-[14px] sm:text-[16px] font-bold"
              style={{ color: "#1F2937" }}
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#0B6E4F]" strokeWidth={2.5} />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ DESKTOP ROUND TABLE VISUAL (ONLY shown on lg >= 1024px) ═══ */}
          <div className="hidden lg:flex relative items-center justify-center w-full max-w-[760px] mx-auto">
            <RoundTableExperience embedded />
          </div>

        </div>

        {/* ═══ MOBILE ROUND TABLE CAPABILITY SECTION (Shown on mobile < 1024px) ═══ */}
        <div className="block lg:hidden mt-8 pt-8 pb-10 border-t border-[#0B6E4F]/20">
          <RoundTableExperience embedded />
        </div>

        {/* ═══ STATISTICS ROW ═══ */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="mt-8 sm:mt-12 w-full"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 22px 45px rgba(11,110,79,0.16)" }}
                className="flex items-center gap-3 sm:gap-3.5 p-3.5 sm:p-5 rounded-[18px]"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(11, 110, 79, 0.18)",
                  boxShadow: "0 10px 30px rgba(11, 110, 79, 0.06)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
              >
                <div
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(11, 110, 79, 0.12)",
                  }}
                >
                  {stat.icon}
                </div>

                <div className="text-left min-w-0">
                  <p
                    className="text-lg sm:text-2xl lg:text-[28px] font-extrabold leading-none mb-1 text-[#111827]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#374151] uppercase tracking-wider leading-none truncate">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll indicator button (Desktop only) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="hidden lg:flex mt-8 justify-center w-full"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
            style={{ background: "transparent", border: "none" }}
            aria-label="Scroll to explore"
          >
            <span
              className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#4B5563] group-hover:text-[#0B6E4F] transition-colors"
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: "1.5px solid rgba(11, 110, 79, 0.35)" }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-1 h-1.5 rounded-full"
                style={{ background: "#0B6E4F" }}
              />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
