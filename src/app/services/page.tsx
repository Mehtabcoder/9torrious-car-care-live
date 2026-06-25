'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Crown, Phone, MapPin, ArrowLeft } from 'lucide-react'; // Added ArrowLeft import here

const servicesData = [
  {
    id: 'car-wash',
    title: 'Car Wash',
    description: 'Thorough exterior wash for a spotless appearance.',
    imgSrc: '/Images/Carwashing.jpg',
  },
  {
    id: 'car-detailing',
    title: 'Car Detailing',
    description: 'Deep Cleaning of interior & exterior for a like-new feel.',
    imgSrc: '/Images/Ceramic.jpg',
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    description: 'Remove swirls, scratches & restore clarity.',
    imgSrc: '/Images/Paint-fix.jpg',
  },
  {
    id: 'body-repair',
    title: 'Body Repair',
    description: 'Bumper scuffs, dents & paint touch ups.',
    imgSrc: '/Images/Tint.jpg',
  },
];

export default function ServicesPage() {
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

      {/* Main Container */}
      <div className="max-w-md mx-auto w-full px-4 pt-6 text-center flex-1">
        
        {/* Back Navigation Link pointing to Home */}
        <div className="text-left w-full mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase text-slate-600 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[3]" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        {/* Accent Title Section */}
        <section className="w-full mb-8 text-center px-1">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 uppercase">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-sm mx-auto">
            We offer a range of premium car care services to keep your vehicle looking brand new. Simply browse what we can do for you below!
          </p>
        </section>

        {/* Dynamic Services Cards List */}
        <section className="w-full flex flex-col gap-5 mb-12">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="relative w-full h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white group bg-slate-900"
            >
              {/* Background Next.js Optimized Image */}
              <Image 
                src={service.imgSrc} 
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark Gradient Contrast Protection Filter Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/15 z-10 pointer-events-none" />
              
              {/* Content Layout Area */}
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 z-20 text-left">
                <h3 className="text-white text-2xl font-black tracking-tight mb-1 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-zinc-200 text-xs font-semibold max-w-[85%] leading-relaxed mb-4 drop-shadow-sm">
                  {service.description}
                </p>
                <Link 
                  href={`/services/${service.id}`} 
                  className="bg-[#fcd34d] hover:bg-[#fbbf24] text-slate-900 text-xs font-bold py-2.5 px-4 rounded-full flex items-center gap-1.5 transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Know More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Accent Transformation Section Banner */}
        <section className="w-full mb-10 px-2">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-2">
            Transform Your Vehicle Inside-Out
          </h2>
          <p className="text-slate-600 text-xs font-medium leading-relaxed max-w-xs mx-auto">
            From spotless interiors to mirror-finish exteriors, we restore your ride to NEW with our expert five-star service.
          </p>
        </section>

        {/* Studio Location / Footer Meta Bar */}
        <div className="w-full bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between text-[11px] font-bold text-slate-500 text-left">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-800" />
            <span>9Torious Carcare</span>
          </div>
          <span className="text-slate-400 font-medium">Open 7 Days (8AM - 8PM)</span>
        </div>

      </div>
    </main>
  );
}