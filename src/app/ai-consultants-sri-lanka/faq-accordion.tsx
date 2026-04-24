"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-neutral-800 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
            >
                <span className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-neutral-400 mt-1 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-6" : "max-h-0"}`}
            >
                <p className="text-neutral-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
