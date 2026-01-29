"use client";
import { motion } from "framer-motion";

const categories = ["All", "Cloud", "Finance", "Productivity", "Marketing"];

export default function FilterBar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (val: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className="relative px-6 py-2 text-sm font-medium rounded-full transition-colors overflow-hidden"
        >
          {/* This span moves the text color based on active state */}
          <span className={`relative z-10 ${activeTab === cat ? "text-white" : "text-slate-400"}`}>
            {cat}
          </span>
          
          {/* The "Pill" animation that slides behind the text */}
          {activeTab === cat && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-blue-600"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}