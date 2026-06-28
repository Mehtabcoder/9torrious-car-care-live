'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, Crown, MapPin } from 'lucide-react';

const servicesData = [
  { id: 'car-wash', title: 'Car Wash', description: 'Thorough exterior wash for a spotless appearance.', imgSrc: '/Images/Carwashing.jpg' },
  { id: 'car-detailing', title: 'Car Detailing', description: 'Deep Cleaning of interior & exterior for a like-new feel.', imgSrc: '/Images/Ceramic.jpg' },
  { id: 'paint-correction', title: 'Paint Correction', description: 'Remove swirls, scratches & restore clarity.', imgSrc: '/Images/Paint-fix.jpg' },
  { id: 'body-repair', title: 'Body Repair', description: 'Bumper scuffs, dents & paint touch ups.', imgSrc: '/Images/Tint.jpg' },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen text-gray-100 font-sans flex flex-col w-full overflow-x-hidden antialiased pb-12">
      
      {/* Premium Glass Header */}
      <div className="w-full bg-zinc-950/80 backdrop-blur-2xl sticky top-0 z-50 px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-white" />
            <span className="font-black text-xl tracking-tight text-white">
              9Torious<span className="text-red-500">.</span>
            </span>
          </Link>
          <a href="tel:+16479161495" className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 rounded-full px-3 py-1.5 border border-white/10 hover:bg-white/10 transition-colors">
            <Phone className="w-3 h-3 text-red-500" />
            Call Now
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-md mx-auto w-full px-4 pt-8 text-center flex-1">
        
        {/* Back Link */}
        <div className="text-left w-full mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 stroke-[3] text-red-500" />
            <span>Back Home</span>
          </Link>
        </div>
        
        {/* Title */}
        <section className="w-full mb-10">
          <h2 className="text-4xl font-black tracking-tighter text-white mb-3 uppercase">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-sm mx-auto">
            Premium car care designed for those who demand perfection.
          </p>
        </section>

        {/* Services Cards */}
        <section className="w-full flex flex-col gap-6 mb-12">
          {servicesData.map((service) => (
            <div key={service.id} className="relative w-full h-52 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group bg-zinc-900">
              <Image 
                src={service.imgSrc} 
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 z-20 text-left">
                <h3 className="text-white text-2xl font-black tracking-tight mb-1">{service.title}</h3>
                <p className="text-zinc-300 text-xs font-medium max-w-[80%] mb-4">{service.description}</p>
                <Link 
                  href={`/services/${service.id}`} 
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-tight py-3 px-5 rounded-xl flex items-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-red-900/20"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Footer Meta Bar */}
        <div className="w-full bg-zinc-900 px-5 py-4 rounded-2xl border border-zinc-800 flex items-center justify-between text-[11px] font-bold text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>9Torious Studio</span>
          </div>
          <span className="text-zinc-600">Open 7 Days (8AM - 8PM)</span>
        </div>

      </div>
    </main>
  );
}
