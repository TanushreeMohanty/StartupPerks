"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ExternalLink, User } from "lucide-react";
import { DEALS } from "@/lib/data";

// Mock data for claimed deals
const CLAIMED_DEALS = [
  { id: 1, dealId: 1, status: "Approved", date: "2026-01-20" },
  { id: 2, dealId: 3, status: "Pending", date: "2026-01-28" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        
        {/* User Profile Header */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User size={40} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Founder Account</h1>
            <p className="text-slate-400">Verified Startup Status: <span className="text-emerald-400">Active</span></p>
          </div>
        </section>

        <h2 className="text-xl font-bold text-white mb-6">Your Claimed Benefits</h2>

        {/* Claimed Deals List */}
        <div className="space-y-4">
          {CLAIMED_DEALS.map((claim) => {
            const deal = DEALS.find((d) => d.id === claim.dealId);
            return (
              <motion.div
                key={claim.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{deal?.logo}</span>
                  <div>
                    <h3 className="font-bold text-white">{deal?.title}</h3>
                    <p className="text-xs text-slate-500">Claimed on {claim.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Status Badge */}
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                    claim.status === "Approved" 
                    ? "bg-emerald-500/10 text-emerald-400" 
                    : "bg-amber-500/10 text-amber-400"
                  }`}>
                    {claim.status === "Approved" ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                    {claim.status}
                  </div>

                  <button className="text-slate-400 hover:text-blue-400 transition">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}