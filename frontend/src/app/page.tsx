"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Check if these paths match your new 'src' folder exactly!
import { DEALS } from "@/lib/data"; 
import DealCard from "@/components/DealCard";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDeals = DEALS.filter(deal => 
    activeTab === "All" ? true : deal.category === activeTab
  );

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-white tracking-tight"
          >
            Browse Perks
          </motion.h2>
          <p className="text-slate-400 mt-2 text-lg">Exclusive rewards for your startup journey.</p>
        </header>

        <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Use motion.div as the grid container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDeals.map((deal) => (
              <motion.div
                key={deal.id}
                layout // Crucial for smooth sliding
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              >
                <DealCard deal={deal} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}