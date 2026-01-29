"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DEALS } from "@/lib/data";
import { ArrowLeft, CheckCircle, ShieldAlert } from "lucide-react";

export default function DealDetails() {
  const { id } = useParams();
  const router = useRouter();
  
  // Find the specific deal based on the URL ID
  const deal = DEALS.find((d) => d.id === Number(id));

  if (!deal) return <div className="text-white p-20">Deal not found.</div>;

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} /> Back to deals
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Left Column: Icon & Quick Info */}
          <div className="md:col-span-1">
            <div className="w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center text-5xl border border-white/10 mb-6">
              {deal.logo}
            </div>
            <h1 className="text-3xl font-bold mb-2">{deal.title}</h1>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
              {deal.category}
            </span>
          </div>

          {/* Right Column: Description & Actions */}
          <div className="md:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Benefit Details</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {deal.description} This exclusive partnership provides startup founders with 
                high-tier access to premium features usually reserved for enterprise clients.
              </p>
              
              <div className="text-2xl font-bold text-blue-400 mb-6">
                {deal.value}
              </div>

              {deal.isLocked ? (
                <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-sm">
                  <ShieldAlert size={18} />
                  This deal requires business verification to unlock.
                </div>
              ) : (
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition">
                  Claim this Benefit
                </button>
              )}
            </div>

            {/* Eligibility Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Eligibility Conditions</h3>
              <ul className="space-y-3">
                {["New customers only", "Must have raised < $5M", "Valid business email"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
