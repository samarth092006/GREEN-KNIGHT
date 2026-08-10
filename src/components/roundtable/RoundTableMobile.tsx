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
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#0B6E4F]">
          Knights of the Round Table
        </p>
        <p className="text-[11px] text-gray-500">Tap a capability to explore</p>
      </div>

      {/* ── Direct Link Capability Grid ── */}
      <div className="grid grid-cols-2 gap-2.5 px-2">
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
              className="w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs flex-shrink-0"
              style={{
                background: "rgba(11, 110, 79, 0.1)",
                color: "#C9A227",
              }}
            >
              {service.number}
            </span>
            <div className="text-left min-w-0 flex-1">
              <span className="text-xs font-bold block truncate text-[#0A251B]">
                {service.name}
              </span>
              <span className="text-[10px] text-[#0B6E4F] font-semibold flex items-center gap-0.5">
                Explore &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
