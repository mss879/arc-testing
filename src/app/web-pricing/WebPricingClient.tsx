'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, X, ArrowRight, Zap, BarChart3, Bot, Palette, Shield, Clock, Globe, Mail, Phone, Lock } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    tagline: 'Get Online Fast',
    price: '60,000',
    monthly: null,
    color: 'rgb(71,85,105)', // Slate 600 for high contrast on white
    timeline: '2–3 days',
    bestFor: 'Businesses that need a clean, professional web presence fast.',
    features: [
      'Modern responsive website (5 pages)',
      'Clean, minimal design — standard layouts',
      'WhatsApp button + contact/inquiry form',
      'Mobile-optimized & fast-loading',
      'Free hosting forever (up to 1GB)',
    ],
    notIncluded: [
      'Custom animations & parallax effects',
      'Glassmorphism & advanced UI',
      'Bespoke hero sections',
      'SEO structured data',
    ],
    crmFeatures: false,
    aiAgent: false,
  },
  {
    name: 'Launch',
    tagline: 'Stand Out & Convert',
    price: '90,000',
    monthly: null,
    color: 'rgb(37,99,235)', // Blue 600
    timeline: '3–5 days',
    bestFor: 'Businesses that want a stunning, conversion-focused website that stands out.',
    features: [
      'Everything in Starter, plus:',
      'Premium custom design with advanced animations',
      'Parallax scrolling, hover effects, micro-interactions',
      'Glassmorphism cards & bespoke hero section',
      'Video/animation support in hero',
      'Conversion-optimized layout with strategic CTAs',
      'Full SEO with structured data & meta tags',
    ],
    notIncluded: [],
    crmFeatures: false,
    aiAgent: false,
  },
  {
    name: 'Growth',
    tagline: 'Capture & Close Leads',
    price: '130,000',
    monthly: null,
    color: 'rgb(147,51,234)', // Purple 600
    popular: true,
    timeline: '5–7 days',
    bestFor: 'Businesses that want a premium website plus a system to capture, track, and close more leads.',
    features: [
      'Everything in Launch, plus:',
      'Lead Dashboard — every inquiry in one place',
      'CRM pipeline (New → Contacted → Quoted → Won/Lost)',
      'Email capture + newsletter system',
      'Email campaigns — promos, updates, re-engagement',
    ],
    notIncluded: [],
    crmFeatures: true,
    aiAgent: false,
  },
  {
    name: 'Scale',
    tagline: '24/7 AI-Powered Sales',
    price: '160,000',
    monthly: '$4',
    color: 'rgb(234,88,12)', // Orange 600
    timeline: '5–7 days',
    bestFor: 'Businesses that want everything in Growth plus an AI agent handling inquiries around the clock.',
    features: [
      'Everything in Growth, plus:',
      'AI agent integrated into your website',
      'Instant responses to visitor questions 24/7',
      'Handles common inquiries & guides users to action',
      'Improves response time and availability',
    ],
    notIncluded: [],
    crmFeatures: true,
    aiAgent: true,
  },
];

const comparisonFeatures = [
  { name: 'Responsive 5-Page Website', starter: true, launch: true, growth: true, scale: true },
  { name: 'WhatsApp Button + Contact Form', starter: true, launch: true, growth: true, scale: true },
  { name: 'Mobile Optimized', starter: true, launch: true, growth: true, scale: true },
  { name: 'Free Hosting Forever', starter: true, launch: true, growth: true, scale: true },
  { name: 'Custom Animations & Parallax', starter: false, launch: true, growth: true, scale: true },
  { name: 'Glassmorphism & Advanced UI', starter: false, launch: true, growth: true, scale: true },
  { name: 'Bespoke Hero Section (Video/Animation)', starter: false, launch: true, growth: true, scale: true },
  { name: 'Full SEO Optimization', starter: false, launch: true, growth: true, scale: true },
  { name: 'Lead Dashboard', starter: false, launch: false, growth: true, scale: true },
  { name: 'CRM Pipeline', starter: false, launch: false, growth: true, scale: true },
  { name: 'Email Capture + Newsletter', starter: false, launch: false, growth: true, scale: true },
  { name: 'Email Marketing Campaigns', starter: false, launch: false, growth: true, scale: true },
  { name: 'AI Agent (24/7 Support)', starter: false, launch: false, growth: false, scale: true },
];

export default function WebPricingClient() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-500/20">
      {/* ═══════════════════════════════════════════════ */}
      {/* HEADER / DOCUMENT INTRO                        */}
      {/* ═══════════════════════════════════════════════ */}
      <header className="relative border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1280px] mx-auto px-6 py-12 sm:py-16">
          {/* ARC AI Logo / Brand */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/favicon.png"
                  alt="ARC AI Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-black tracking-widest text-black uppercase">ARC AI AGENCY</p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100/80 px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential Pricing Proposal
                </div>
              </div>
            </div>
            {/* Timestamp / Details - Fake ID for corporate doc feel */}
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Document ID: ARC-{new Date().getFullYear()}-PRC</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prepared for Intended Recipient</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              Your Website Is Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Best Salesperson.
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
              It works 24/7, never takes a day off, and is the first impression every potential customer has of your business.
              The question isn&apos;t whether you need a great website — it&apos;s how much revenue you&apos;re losing without one.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-12 bg-white inline-flex p-3 rounded-2xl border border-gray-100 shadow-sm">
            {[
              { icon: Shield, label: '100+ Clients Served' },
              { icon: Clock, label: '2–7 Day Delivery' },
              { icon: Globe, label: 'UK & Sri Lanka' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600 px-3">
                <badge.icon className="w-4 h-4 text-orange-500" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* WHY THIS MATTERS — PROBLEM STATEMENT           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                stat: '75%',
                label: 'of users judge credibility based on website design',
                desc: 'First impressions are formed in 0.05 seconds. A dated website costs you trust before visitors even read a word.',
              },
              {
                stat: '53%',
                label: 'of mobile users leave if a page takes over 3 seconds',
                desc: 'Speed isn\'t optional. Every second of load time costs you potential customers who will never come back.',
              },
              {
                stat: '88%',
                label: 'of users won\'t return after a bad experience',
                desc: 'Your competitors are one click away. A poor website doesn\'t just lose one sale — it loses a lifetime customer.',
              },
            ].map((item) => (
              <div key={item.stat} className="space-y-4">
                <p className="text-6xl font-black text-black tracking-tighter">
                  {item.stat}
                </p>
                <p className="text-sm font-bold text-gray-900 leading-snug uppercase tracking-wide">{item.label}</p>
                <div className="w-10 h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full" />
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* THE SOLUTION — WHAT WE BUILD                   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">What We Deliver</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Not just a website.<br />
              A revenue-generating machine.
            </h2>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-medium">
              Every ARC AI project is built with one goal: to turn visitors into paying customers.
              We combine premium design, conversion psychology, and modern technology to deliver results — not just pixels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: 'Premium Design', desc: 'Hand-crafted interfaces that build instant trust and credibility.' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Next.js & React — sub-second load times, no page refreshes.' },
              { icon: BarChart3, title: 'Conversion Focused', desc: 'Strategic CTAs and layouts designed to maximize inquiries.' },
              { icon: Bot, title: 'AI-Powered', desc: 'Optional AI agent that handles customer inquiries 24/7.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* PACKAGES                                       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Choose Your Core Setup</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Four options. One goal:<br />
              <span className="text-gray-400">grow your business.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onMouseEnter={() => setHoveredPkg(pkg.name)}
                onMouseLeave={() => setHoveredPkg(null)}
                className={`relative flex flex-col rounded-3xl border transition-all duration-500 overflow-hidden bg-white ${
                  hoveredPkg === pkg.name
                    ? 'border-gray-200 shadow-2xl scale-[1.02] z-10'
                    : 'border-gray-100 shadow-sm'
                } ${pkg.popular ? 'ring-2 ring-purple-600 shadow-lg' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
                    Most Popular Choice
                  </div>
                )}

                <div className={`p-8 space-y-6 flex-1 flex flex-col ${pkg.popular ? 'pt-10' : ''}`}>
                  {/* Name & Tagline */}
                  <div className="space-y-2">
                    <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>
                      {pkg.name}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{pkg.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-gray-400">Rs</span>
                      <span className="text-4xl font-black text-black tracking-tight">{pkg.price}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-500">
                      {pkg.monthly ? `One-time + ${pkg.monthly}/month AI fee` : 'One-time payment. No monthly fees.'}
                    </p>
                  </div>

                  {/* Best For */}
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100/50">
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-900">Best for: </span>
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    <Clock className="w-4 h-4" />
                    <span>Delivered in <span className="text-gray-900">{pkg.timeline}</span></span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 flex-1 pb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full p-0.5" style={{ backgroundColor: `${pkg.color}15` }}>
                          <Check className="w-3 h-3 shrink-0" style={{ color: pkg.color }} />
                        </div>
                        <span className="text-sm font-medium text-gray-600 leading-snug">{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <div key={`no-${i}`} className="flex items-start gap-3 opacity-40">
                        <div className="mt-0.5 rounded-full p-0.5 bg-gray-100">
                          <X className="w-3 h-3 shrink-0 text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 leading-snug line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/447466368427"
                    target="_blank"
                    rel="noopener"
                    className="mt-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: pkg.color,
                      color: 'white',
                    }}
                  >
                    Select Package
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Upgrade Path Note */}
          <div className="text-center space-y-2 pt-6">
            <p className="text-sm font-bold text-gray-900">
              Start small, scale up later.
            </p>
            <p className="text-xs font-medium text-gray-500 max-w-2xl mx-auto">
              You can always upgrade your package in the future. We simply credit what you&apos;ve already paid toward the new tier. 
              (e.g., Starter → Launch is just the Rs 30,000 difference).
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* FULL COMPARISON TABLE                          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Detailed Breakdown</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              Compare Features.
            </h2>
          </div>

          {/* Mobile View - Stacked Cards */}
          <div className="md:hidden space-y-4">
            {comparisonFeatures.map((feature) => (
              <div key={feature.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-4">
                <p className="text-sm font-bold text-gray-900">{feature.name}</p>
                <div className="flex flex-wrap gap-2">
                  {(['starter', 'launch', 'growth', 'scale'] as const).map((tier) => {
                    if (!feature[tier]) return null;
                    const pkg = packages.find(p => p.name.toLowerCase() === tier);
                    if (!pkg) return null;
                    
                    return (
                      <div 
                        key={tier} 
                        className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-md"
                        style={{ backgroundColor: `${pkg.color}15`, color: pkg.color }}
                      >
                        {pkg.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Traditional Table */}
          <div className="hidden md:block relative -mx-6 px-6 pb-4">
            <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-5 px-6 text-xs font-black text-gray-500 uppercase tracking-widest w-[35%] sticky left-0 z-20 bg-gray-50 border-r border-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.03)]">Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="py-5 px-4 text-center border-l border-gray-100">
                        <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>{pkg.name}</p>
                        <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Rs {pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className={`group transition-colors ${i % 2 === 0 ? 'bg-white hover:bg-gray-50/80' : 'bg-gray-50/70 hover:bg-gray-100/60'}`}>
                      <td className={`py-4 px-6 text-sm font-bold text-gray-700 sticky left-0 z-10 border-r border-gray-100 shadow-[2px_0_12px_rgba(0,0,0,0.02)] transition-colors ${i % 2 === 0 ? 'bg-white group-hover:bg-[#f8fafc]' : 'bg-[#f8fafc] group-hover:bg-[#f1f5f9]'}`}>{feature.name}</td>
                      {(['starter', 'launch', 'growth', 'scale'] as const).map((tier) => (
                        <td key={tier} className="py-4 px-4 text-center border-l border-gray-100">
                          {feature[tier] ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                          ) : (
                            <X className="w-4 h-4 mx-auto text-gray-300" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* HOSTING & MAINTENANCE                          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Post-Launch Support</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              Hosting & Maintenance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hosting */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-gray-900">Hosting</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-emerald-600">FREE</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">forever</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    Hosting is free forever as long as total uploaded media stays within 1GB.
                    A monthly storage fee applies only if storage exceeds 1GB.
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    *Domain purchase & renewal is handled directly by the client.
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Maintenance */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-gray-900">Annual Peace of Mind</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">Rs</span>
                  <span className="text-3xl font-black text-black">60,000</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">/year</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Includes:</p>
                  {[
                    'Security & dependency updates',
                    'Uptime monitoring & backups',
                    'Minor text/image updates',
                    'Bug fixes for existing features',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-gray-600 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pay Per Fix */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-gray-900">Pay-Per-Fix</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">Rs</span>
                  <span className="text-3xl font-black text-black">4,000</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">/request</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Covers:</p>
                  {[
                    'Fixing errors & bugs',
                    'Small UI tweaks',
                    'Updating text or images',
                    'Broken links/buttons/forms',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 text-purple-600" />
                      <span className="text-sm font-medium text-gray-600 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* ROI / WHY THIS INVESTMENT PAYS OFF             */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Return On Investment</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              The math is simple.
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 sm:p-12 space-y-10">
            <div className="grid md:grid-cols-3 gap-10 md:divide-x md:divide-gray-100">
              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">If your average deal is worth</p>
                <p className="text-4xl font-black text-black tracking-tight">Rs 50,000</p>
              </div>
              <div className="space-y-3 md:pl-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">And your website brings in</p>
                <p className="text-4xl font-black text-blue-600 tracking-tight">3 extra leads<span className="text-xl text-blue-400">/mo</span></p>
              </div>
              <div className="space-y-3 md:pl-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your website pays for itself in</p>
                <p className="text-4xl font-black text-emerald-500 tracking-tight">Under 1 month</p>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100">
              <p className="text-base font-medium text-gray-600 leading-relaxed max-w-4xl">
                Most of our clients see a measurable increase in inquiries within the first 2 weeks of launch.
                With a conversion-optimized website, you&apos;re not spending money — you&apos;re investing in a sophisticated tool that generates ROI every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* PROCESS — HOW IT WORKS                         */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-600 uppercase tracking-widest">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              From idea to launch in days, not months.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and what makes your business unique.' },
              { step: '02', title: 'Build', desc: 'We design and develop your website with precision — no templates, no shortcuts.' },
              { step: '03', title: 'Refine', desc: 'You review, give feedback, and we iterate until it\'s exactly right.' },
              { step: '04', title: 'Launch', desc: 'We deploy your website and ensure everything runs perfectly from day one.' },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all">
                <span className="absolute top-6 right-8 text-6xl font-black text-gray-100 group-hover:text-gray-50 transition-colors select-none z-0">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <p className="text-lg font-black text-gray-900 mb-3">{item.title}</p>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CTA / NEXT STEPS                               */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-black text-white selection:bg-orange-500/30">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Ready to grow?
            </h2>
            <p className="text-lg font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your project. No hard sells, no pressure — just a conversation about how we can help your business generate more revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="group flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-orange-600 hover:bg-orange-500 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.4)]"
              >
                Message Us on WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/arcai-support/30min"
                target="_blank"
                rel="noopener"
                className="flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 border border-white/10"
              >
                Book a Direct Call
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-white/10">
              <a href="mailto:support@arcai.agency" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                support@arcai.agency
              </a>
              <a href="tel:+447466368427" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +44 7466 368427 (UK)
              </a>
              <a href="tel:+94771852522" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +94 771852522 (LK)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Stamp */}
      <footer className="bg-black py-8 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} ARC AI Agency (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">
            Strictly Confidential — Authorized Personnel Only
          </p>
        </div>
      </footer>
    </div>
  );
}
