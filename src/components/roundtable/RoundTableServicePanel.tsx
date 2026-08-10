"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { KnightService } from "@/data/roundTableServices";

interface RoundTableServicePanelProps {
  selectedService: KnightService | null;
  onClose: () => void;
}

export default function RoundTableServicePanel({
  selectedService,
  onClose,
}: RoundTableServicePanelProps) {
  if (!selectedService) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedService.id}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg mx-auto mt-6 lg:mt-0 relative z-30"
      >
        <div
          className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 252, 242, 0.92) 0%, rgba(245, 238, 218, 0.88) 100%)",
            border: "1.5px solid rgba(201, 162, 39, 0.4)",
            boxShadow:
              "0 20px 50px rgba(11, 110, 79, 0.18), 0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Subtle decorative emerald glow top-right */}
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(11,110,79,0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
            style={{
              background: "rgba(11, 110, 79, 0.08)",
              border: "1px solid rgba(11, 110, 79, 0.15)",
            }}
          >
            <X size={18} />
          </button>

          {/* Badge & Number */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
              style={{
                background: "rgba(11, 110, 79, 0.12)",
                color: "#0B6E4F",
                border: "1px solid rgba(11, 110, 79, 0.25)",
              }}
            >
              <Sparkles size={13} className="text-[#C9A227]" />
              Capability {selectedService.number}
            </span>
            <span className="text-xs font-semibold text-gray-500">
              Knight of the Round Table
            </span>
          </div>

          {/* Service Title */}
          <h3
            className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
            style={{
              color: "#0A251B",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {selectedService.name}
          </h3>

          {/* Service Description */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: "#2D4A3E" }}
          >
            {selectedService.description}
          </p>

          {/* Highlights List */}
          <div className="space-y-2 mb-6">
            {selectedService.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium" style={{ color: "#145A32" }}>
                <CheckCircle2 size={16} className="text-[#0B6E4F] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <Link
              href={selectedService.slug}
              className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-2xl font-bold text-sm text-white shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] group"
              style={{
                background:
                  "linear-gradient(135deg, #0B6E4F 0%, #06402E 100%)",
                boxShadow:
                  "0 8px 24px rgba(11, 110, 79, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              }}
            >
              <span>Explore {selectedService.name}</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
