"use client";

import { CheckCircle2, Award } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-[#0a1f15] text-white relative overflow-hidden border-y border-[#C9A227]30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-[#C9A227] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#C9A227]35 mb-4">
            <Award size={15} />
            Enterprise Technology &amp; Security
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Partnerships &amp; Enterprise Compliance
          </h2>
          <p className="text-[16px] sm:text-[17px] text-white/85 mt-4 leading-[1.7] max-w-[750px] mx-auto">
            Green Knights of Tech &amp; AI Ltd operates under strict data privacy and security standards. Partner ecosystem details and formal compliance announcements will be published soon.
          </p>
        </div>

        <div className="flex items-center gap-3 justify-center flex-wrap max-w-4xl mx-auto">
          {[
            "Enterprise Security Standards",
            "Cloud Infrastructure Best Practices",
            "Strict Data Privacy Guarantees",
            "Sovereign AI Perimeter Security",
            "Continuous Threat Monitoring",
            "Zero Data Leakage Protocols",
          ].map((item, i) => (
            <span key={i} className="text-[14px] sm:text-[15px] font-semibold px-4.5 py-2.5 rounded-full bg-white/5 text-white/90 border border-white/14 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#C9A227]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
