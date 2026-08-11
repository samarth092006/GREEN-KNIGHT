"use client";

import Image from "next/image";
import Link from "next/link";
import { roundTableServices } from "@/data/roundTableServices";

export default function RoundTableMobile() {
  return (
    <div className="w-full space-y-6">
      {/* ── Center Shield Header ── */}
      <div className="flex flex-col items-center justify-center text-center py-2">
        <div className="relative w-16 h-16 mb-2">
          <div
            className="absolute -inset-3 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(11,110,79,0.3) 0%, rgba(201,162,39,0.2) 60%, transparent 80%)",
              filter: "blur(8px)",
            }}
          />
          <Image
            src="/images/brand/gk-shield-premium.png"
            alt="Green Knights Shield Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-[18px] sm:text-[20px] font-extrabold tracking-wide uppercase text-[#0B6E4F] mb-1">
          KNIGHTS OF THE ROUND TABLE
        </p>
        <p className="text-[14px] sm:text-[15px] font-medium text-gray-600">Tap a capability to explore</p>
      </div>

      {/* ── Direct Link Capability Grid ── */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 px-1 sm:px-2">
        {roundTableServices.map((service) => (
          <Link
            key={service.id}
            href={service.slug}
            className="flex items-center gap-2.5 p-3 rounded-xl transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            style={{
              background: "rgba(255, 252, 242, 0.95)",
              border: "1px solid rgba(201, 162, 39, 0.35)",
              color: "#0A251B",
              boxShadow: "0 2px 8px rgba(11, 110, 79, 0.08)",
            }}
          >
            <span
              className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-extrabold text-[14px] sm:text-[15px] flex-shrink-0"
              style={{
                background: "rgba(11, 110, 79, 0.12)",
                color: "#C9A227",
              }}
            >
              {service.number}
            </span>
            <div className="text-left min-w-0 flex-1">
              <span className="text-[15px] sm:text-[16px] font-bold block leading-snug text-[#0A251B] break-words">
                {service.name}
              </span>
              <span className="text-[13px] sm:text-[14px] text-[#0B6E4F] font-semibold flex items-center gap-0.5 mt-0.5">
                Explore &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
