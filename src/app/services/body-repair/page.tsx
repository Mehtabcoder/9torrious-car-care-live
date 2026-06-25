'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Crown, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PaintCorrectionPage() {
  return (
    <main className="bg-gradient-to-b from-[#d6ebff] via-[#f7faff] to-white min-h-screen text-gray-900 font-sans flex flex-col w-full overflow-x-hidden antialiased pb-12">
      
      {/* Premium Header */}
      <div className="w-full bg-white/85 backdrop-blur-md sticky top-0 z-50 px-6 py-4 shadow-sm border-b border-white/40">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-slate-900" />
            <span className="font-black text-xl tracking-tight text-slate-900">
              9Torious<span className="text-red-600">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200 shadow-sm">
            <Phone className="w-3.5 h-3.5 text-slate-800" />
            <a href="tel:+16479161495">+1 (647) 916-1495</a>
          </div>
        </div>
      </div>

      {/* Main Page Container */}
      <div className="max-w-md mx-auto w-full px-4 pt-6 flex-1">
        
        {/* Back Navigation Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-slate-600 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:bg-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[3]" />
          <span>Back to Services</span>
        </Link>

        {/* Premium Core Package Card */}
        <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white flex flex-col mb-8">
          
          {/* Dynamic Service Hero Cover */}
          <div className="relative w-full h-48 bg-slate-900">
            <Image 
              src="/Images/Paint-fix.jpg" 
              alt="Paint Correction & Polish"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <span className="text-[10px] font-extrabold uppercase bg-red-600 text-white px-2 py-0.5 rounded-md w-fit mb-1 tracking-wider shadow-sm">
                Pro Restoration
              </span>
              <h1 className="text-white text-2xl font-black tracking-tight drop-shadow-md">
                Paint Correction & Polish
              </h1>
            </div>
          </div>

          {/* Card Meta Content Info */}
          <div className="p-6 flex flex-col">
            <p className="text-slate-600 text-sm font-semibold leading-relaxed mb-6">
              Remove unsightly swirls, micro-scratches, and oxidation to fully restore depth, intense optical clarity, and a flawless showroom reflection.
            </p>

            {/* Structured Included Items Breakdown */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-black uppercase text-slate-900 tracking-wider border-b border-slate-100 pb-2">
                What's Included:
              </h3>
              
              <div className="grid grid-cols-1 gap-3.5">
                {[
                  "Multi-stage paint depth analysis",
                  "Machine compounding to eliminate heavy swirls",
                  "Jeweling polish for a mirror-like finish",
                  "1-Year premium paint sealant application"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-slate-700 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Link Button */}
            <Link 
              href="/quote" 
              className="bg-[#fcd34d] hover:bg-[#fbbf24] text-slate-900 text-sm font-black uppercase tracking-tight py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 mt-8 transition-all shadow-md active:scale-[0.99]"
            >
              <span>Get Free Quote Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}