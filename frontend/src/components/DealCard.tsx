"use client";
import { motion } from "framer-motion";
import { Lock } from "lucide-react"; // Install with: npm install lucide-react
import Link from 'next/link';

export default function DealCard({ deal }: { deal: any }) {
  return (
    <Link href={`/deals/${deal.id}`}>
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-blue-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-4xl">{deal.logo}</span>
        {deal.isLocked && (
          <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
            <Lock size={16} />
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {deal.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-blue-400 font-semibold text-sm">{deal.value}</span>
        <button className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
          deal.isLocked 
          ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
          : "bg-blue-600 text-white hover:bg-blue-500"
        }`}>
          {deal.isLocked ? "Locked" : "Claim Now"}
        </button>
      </div>
    </motion.div>
    </Link>
  );
}