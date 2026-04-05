"use client";

import { motion, Variant } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number): Variant => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 lg:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fade as any} custom={0} className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            WHY CHOOSE US
          </motion.h2>
          <motion.p
            variants={fade as any}
            custom={1}
            className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400"
          >
            Where insight meets execution and strategy drives results — this is what sets us apart and defines how we deliver real value for every client.
          </motion.p>
        </motion.div>

        {/* Custom layout: First row 3 columns (middle stacked), second row 2 wide cards */}
        <div className="space-y-6 md:space-y-8">
          {/* First Row */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {/* Col 1: Strategy */}
            <Card index={0} className="bg-white/[0.04] border-white/10">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <Image src="/images/collaborative_compass.webp"
                  alt="compass"
                  fill
                  className="object-cover scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy" />
              </div>
              <div className="mt-4 pb-2">
                <p className="text-2xl font-semibold text-white mb-3 leading-tight tracking-tight">Strategy-First Execution</p>
                <p className="text-[12px] md:text-sm text-zinc-300 leading-relaxed">We don't pull tactics from thin air. Every system we architect is rooted in deep operational clarity and scalable design.</p>
              </div>
            </Card>

            {/* Col 2: Stacked (Quality + Support) */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Quality */}
              {/* Quality card: 3/4 height */}
              <Card index={1} className="relative overflow-hidden p-0 flex-[3] min-h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
                <div className="relative flex flex-col h-full p-6">
                  <p className="text-lg md:text-xl font-semibold text-white leading-tight mb-2">
                    Quality Over
                    <br />
                    Quantity, Always
                  </p>
                  <div className="absolute left-6 bottom-0 translate-y-[73%] md:translate-y-[67%] w-16 md:w-20 select-none pointer-events-none">
                    <Image src="/images/brush.webp"
                      alt="brush"
                      width={80}
                      height={460}
                      className="w-full h-auto object-cover"
                      loading="lazy" />
                  </div>
                  <p className="mt-auto text-[11px] md:text-xs text-white/80 leading-snug max-w-[150px] self-end text-right">
                    We focus on fewer projects to deliver better outcomes.
                  </p>
                </div>
              </Card>

              {/* Support */}
              {/* 24/7 Support card: 1/4 height */}
              <Card index={2} className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 flex-[1] min-h-[100px] overflow-hidden">
                <div className="flex items-center h-full gap-4 md:gap-6 px-4">
                  <div className="flex flex-col justify-center">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">24/7</p>
                    <p className="text-[11px] md:text-xs text-zinc-400 mt-2">Priority Support</p>
                  </div>
                  <div className="relative ml-auto">
                    <div className="rounded-2xl bg-white px-5 md:px-6 py-4 md:py-5 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.35),0_2px_4px_rgba(0,0,0,0.25)] flex items-center gap-4 min-w-[210px]">
                      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <path d="M4 6h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H4a1 1 0 0 1-1-1V7c0-.55.45-1 1-1Z" />
                          <path d="m4 8 8 5 8-5" />
                        </svg>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-base md:text-lg font-medium text-black tracking-tight">Avexa</span>
                        <span className="text-xs md:text-sm text-zinc-500">Support Ticket</span>
                      </div>
                    </div>
                    {/* Subtle base shadow / reflection */}
                    <div className="absolute inset-x-6 -bottom-2 h-4 rounded-xl bg-black/30 blur-md opacity-40 pointer-events-none" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Col 3: Engineered */}
            <Card index={3} className="relative overflow-hidden p-0">
              <div className="relative w-full aspect-[4/3]">
                <Image src="/images/bespoke_engineering.webp"
                  alt="bespoke engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/10 to-black/70" />
              </div>
              <div className="p-5">
                <p className="text-2xl font-semibold text-white mb-3 leading-tight tracking-tight">Bespoke Engineering</p>
                <p className="text-[12px] md:text-sm text-zinc-300 leading-relaxed max-w-[280px]">
                  No cookie-cutter templates. We architect custom solutions engineered explicitly for your operational goals.
                </p>
              </div>
            </Card>
          </div>

          {/* Second Row: Two wide cards spanning full width */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/* Collaborative (wide) */}
            <Card index={4} className="relative overflow-hidden p-0 min-h-[300px] md:min-h-[400px] bg-black">
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/collaborative_partnership.webp"
                  alt="Collaborative partnership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Text Area explicitly positioned at the bottom */}
              <div className="relative flex flex-col justify-end h-full p-6 md:p-8 z-10 pt-48">
                <p className="text-2xl font-semibold text-white mb-3 leading-tight tracking-tight">Collaborative Partnership</p>
                <p className="text-[12px] md:text-sm text-zinc-300 leading-relaxed max-w-sm">
                  We don't just build for you; we build with you. True collaboration creates solutions that actually fit your workflow.
                </p>
              </div>
            </Card>


            {/* Col 5: Data-Driven Performance (wide) */}
            <Card index={5} className="relative bg-white/[0.03] min-h-[260px]">
              <div className="absolute top-4 left-5 flex gap-1 z-20">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="h-2 w-2 rounded-full bg-orange-500/70" />
                <span className="h-2 w-2 rounded-full bg-orange-500/40" />
              </div>

              {/* Full Background Image */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image src="/images/data_driven_design.webp"
                  alt="Data-driven design"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy" />
                {/* Gradients to keep text readable and replicate the dark card feel */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>

              <div className="relative z-10 flex flex-col justify-center h-full pt-10 pb-4 pl-5 pr-4">
                <p className="text-2xl font-semibold text-white mb-3 leading-tight tracking-tight">Data-Driven Performance</p>
                <p className="text-[12px] md:text-sm text-zinc-300 leading-relaxed max-w-[280px] md:max-w-xs mb-4">
                  Beautiful design is only half the equation. We architect scalable solutions backed by analytics, ensuring every interaction translates to measurable business growth.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    variants={fade as any}
    className={`group relative rounded-xl border border-white/10 p-5 overflow-hidden 
      before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit]
      before:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_65%)]
      bg-black/20 backdrop-blur-[2px]
      shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_2px_4px_-1px_rgba(0,0,0,0.55),0_8px_18px_-6px_rgba(0,0,0,0.55)]
      transform-gpu
      transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)]
      ${className}`}
  >
    {children}
  </motion.div>
);

export default Benefits;

