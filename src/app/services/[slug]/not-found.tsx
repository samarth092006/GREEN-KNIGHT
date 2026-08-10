import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
        <ShieldAlert size={32} />
      </div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Service Not Found</h1>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        The requested service pillar does not exist or may have been renamed. Explore our full suite of enterprise technology services.
      </p>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B6E4F] text-white font-semibold shadow-lg hover:bg-[#145A32] transition-colors"
      >
        <ArrowLeft size={18} />
        Browse All Services
      </Link>
    </div>
  );
}
