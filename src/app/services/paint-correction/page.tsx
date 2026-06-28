'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Shield, Droplets, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export default function paintcorrectionPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen text-gray-100 font-sans flex flex-col w-full overflow-x-hidden antialiased pb-12">
      
      {/* ======================================================= */}
      {/* NAVBAR SECTION (APPLE GLASS SPEC)                      */}
      {/* ======================================================= */}
      <header className="w-full max-w-md mx-auto px-4 pt-4 relative z-50">
        <div className="bg-white/10 backdrop-blur-2xl backdrop-saturate-150 rounded-full px-6 py-3.5 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-white/20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight text-white">
              9Torious<span className="text-red-500">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">Menu</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-end gap-1.5 w-6 h-6 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="absolute top-full left-4 right-4 mt-2 bg-red-950/80 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 font-medium text-sm shadow-2xl border border-red-500/20 z-50 text-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Services</Link>
            <Link href="#packages" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Packages</Link>
            <Link href="#quote" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Get Free Quote</Link>
            <Link href="#faq" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">FAQ</Link>
          </nav>
        )}
      </header>

      {/* Main Page Container */}
      <div className="max-w-md mx-auto w-full px-4 pt-6 flex-1">
        
        {/* Back Navigation Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full shadow-md hover:bg-zinc-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[3] text-red-500" />
          <span>Back to Services</span>
        </Link>

               

        {/* ======================================================= */}
        {/* NEW: HEAT CURING PROCESS SECTION                         */}
        {/* ======================================================= */}
        <div className="w-full flex flex-col items-center text-center mt-4 px-2">
          {/* Header */}
          <h2 className="text-white text-2xl font-black tracking-tight mb-5 drop-shadow-md">
            Our Heat Curing Process
          </h2>

          {/* Premium Image Wrapper with Amber/Gold Border */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/40 shadow-xl bg-zinc-900 mb-5">
            <Image 
              src="/Images/Paint-fix.jpg" 
              alt="Infrared Curing Process"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center"
            />
            {/* Subtle Gradient Overlap to pop the bottom badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            
            {/* Pill Badge Overlay matched to Screenshot 2026-06-28 192324.png */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-zinc-900/80 backdrop-blur-md text-white border border-zinc-700/50 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg tracking-wide">
                Infrared Curing
              </span>
            </div>
          </div>

          {/* Descriptive Copy matched to Screenshot 2026-06-28 192324.png */}
          <p className="text-zinc-300 text-xs font-semibold leading-relaxed max-w-sm px-1">
            Most shops let ceramic coatings air dry and hope for the best. We apply professional-grade infrared heat to every job, the same process used by manufacturers, locking the coating onto your paint for maximum hardness, gloss, and protection that a standard application can never match.
          </p>
        </div>

        {/* ======================================================= */}
        {/* DYNAMIC FEATURE LIST SECTION                           */}
        {/* ======================================================= */}
        <div className="flex flex-col gap-4 relative mt-14">
          
          <h2 className="text-center text-white text-3xl font-black tracking-tight mb-4">
            About Our Warranty
          </h2>

      {/* Feature 1 - No BS Guarantee */}
{/* Feature 1 - No BS Guarantee Wrapper */}
{/* We removed overflow-hidden and added a custom red drop-shadow filter to cast light BEHIND the card */}
<div className="relative rounded-[24px] bg-[#1a1a1a] p-[1px] shadow-xl filter drop-shadow-[0_0_25px_rgba(220,38,38,0.15)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-red-500/40 before:to-transparent">
  
  {/* The Ambient Red Glow Layer (Now bleeds out beautifully behind the top of the card) */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-28 w-48 rounded-full bg-red-600/25 blur-[32px] pointer-events-none z-0" />

  {/* Inner Card Content */}
  {/* added z-10 to ensure content stays crisp on top of the glowing background blur */}
  <div className="relative z-10 bg-[#171717] rounded-[23px] p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center gap-3 text-white font-black text-[20px] tracking-wide">
      {/* Icon styled with red colour and subtle inner fill */}
      <Shield className="w-6 h-6 text-red-600 fill-red-500/10" strokeWidth={2.5} />
      <h3>No BS Guarantee</h3>
    </div>
    
    <p className="text-zinc-300 text-[14px] font-normal leading-[1.5]">
      Our ceramic comes with a warranty. If you ever need re-service just bring it to us and we'll help.
    </p>
  </div>
</div>
          
          
          {/* Feature 2 - Hydrophobic & Self Cleaning */}
<div className="relative rounded-[24px] bg-[#1a1a1a] p-[1px] shadow-xl filter drop-shadow-[0_4px_30px_rgba(220,38,38,0.12)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-red-500/30 before:to-transparent">
  {/* The Ambient Red Glow Layer (Centered directly behind the card body) */}
  <div className="absolute inset-0 m-auto h-32 w-56 rounded-full bg-red-600/20 blur-[36px] pointer-events-none z-0" />
  
  {/* Inner Card Content */}
  <div className="relative z-10 bg-[#171717] rounded-[23px] p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center gap-3 text-white font-black text-[20px] tracking-wide">
      <Droplets className="w-6 h-6 text-red-600 fill-red-500/10" strokeWidth={2.5} />
      <h3>Hydrophobic & Self Cleaning</h3>
    </div>
    <p className="text-zinc-300 text-[14px] font-normal leading-[1.5]">
      Water easily removes dirt from the surface by encapsulating it while rolling off the surface.
    </p>
  </div>
</div>

{/* Feature 3 - 9H & 10H Surface Hardness */}
<div className="relative rounded-[24px] bg-[#1a1a1a] p-[1px] shadow-xl filter drop-shadow-[0_4px_30px_rgba(220,38,38,0.12)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-red-500/30 before:to-transparent">
  {/* The Ambient Red Glow Layer (Centered directly behind the card body) */}
  <div className="absolute inset-0 m-auto h-32 w-56 rounded-full bg-red-600/20 blur-[36px] pointer-events-none z-0" />
  
  {/* Inner Card Content */}
  <div className="relative z-10 bg-[#171717] rounded-[23px] p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center gap-3 text-white font-black text-[20px] tracking-wide">
      <ShieldAlert className="w-6 h-6 text-red-600 fill-red-500/10" strokeWidth={2.5} />
      <h3>9H & 10H Surface Hardness</h3>
    </div>
    <p className="text-zinc-300 text-[14px] font-normal leading-[1.5]">
      Prevents damage from bird droppings, bugs, dirt, tar, tree sap, and graffiti from bonding to the surface.
    </p>
  </div>
</div>

{/* Feature 4 - Ultimate Deep Gloss */}
<div className="relative rounded-[24px] bg-[#1a1a1a] p-[1px] shadow-xl filter drop-shadow-[0_4px_30px_rgba(220,38,38,0.12)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-red-500/30 before:to-transparent">
  {/* The Ambient Red Glow Layer (Centered directly behind the card body) */}
  <div className="absolute inset-0 m-auto h-32 w-56 rounded-full bg-red-600/20 blur-[36px] pointer-events-none z-0" />
  
  {/* Inner Card Content */}
  <div className="relative z-10 bg-[#171717] rounded-[23px] p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center gap-3 text-white font-black text-[20px] tracking-wide">
      <Sparkles className="w-6 h-6 text-red-600 fill-red-500/10" strokeWidth={2.5} />
      <h3>Ultimate Deep Gloss</h3>
    </div>
    <p className="text-zinc-300 text-[14px] font-normal leading-[1.5]">
      Nanoparticles fill the smallest pores in the paint which gives your vehicle a permanent showroom shine.
    </p>
  </div>
</div>

{/* Feature 5 - Multi Surface Application */}
<div className="relative rounded-[24px] bg-[#1a1a1a] p-[1px] shadow-xl filter drop-shadow-[0_4px_30px_rgba(220,38,38,0.12)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-red-500/30 before:to-transparent mb-4">
  {/* The Ambient Red Glow Layer (Centered directly behind the card body) */}
  <div className="absolute inset-0 m-auto h-32 w-56 rounded-full bg-red-600/20 blur-[36px] pointer-events-none z-0" />
  
  {/* Inner Card Content */}
  <div className="relative z-10 bg-[#171717] rounded-[23px] p-6 flex flex-col gap-3 h-full">
    <div className="flex items-center gap-3 text-white font-black text-[20px] tracking-wide">
      <Layers className="w-6 h-6 text-red-600 fill-red-500/10" strokeWidth={2.5} />
      <h3>Multi Surface Application</h3>
    </div>
    <p className="text-zinc-300 text-[14px] font-normal leading-[1.5]">
      Glass, paint, rims, gel coat, fiber glass, plastic, metals, vinyl, leather, carpet, etc. Stay protected for years.
    </p>
  </div>
</div>

          {/* Exact Bottom Styled Action Button from Image reference */}
          <Link 
            href="/quote" 
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-bold tracking-tight py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-[0.99] mt-2"
          >
            <span>Get Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </main>
  );
}