'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// =======================================================
// 1. SERVICE CARD COMPONENT (PLACED OUTSIDE HOME)
// =======================================================
const ServiceCard = ({ service }: { service: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative w-full h-52 rounded-2xl overflow-hidden shadow-lg border-4 border-white group bg-slate-900 
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
        style={{ backgroundImage: `url('${service.imgSrc}')` }}
      />
      
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
  );
};








// =======================================================
// 2. MAIN HOME PAGE APPLICATION COMPONENT
// =======================================================
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("full"); // For package switcher
  const [openFaq, setOpenFaq] = useState<number | null>(null); // For Accordion
  
  const [formData, setFormData] = useState({
    nameFirst: "",
    nameLast: "",
    phone: "",
    email: "",
    date: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Your return ( ... JSX UI elements continue down here )

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const businessNumber = "16479161495";
    const message =
      `*New Quote Request - 9Torious Car Care*%0A` +
      `---------------------------------------%0A` +
      `• *Name:* ${formData.nameFirst} ${formData.nameLast}%0A` +
      `• *Phone:* ${formData.phone}%0A` +
      `• *Email:* ${formData.email || "Not Provided"}%0A` +
      `• *Preferred Date:* ${formData.date || "Not Provided"}%0A` +
      `• *Address:* ${formData.street || ""}, ${formData.city || ""}, ${formData.postalCode || ""}`;

    window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };





  
 return (
  <div className="relative w-full bg-[#f4f8fe] text-gray-900 font-sans antialiased overflow-x-hidden">
    
    {/* ======================================================= */}
    {/* PREMIUM GRADIENT HERO BACKDROP LAYER                    */}
    {/* ======================================================= */}
    {/* This creates the rich, dark-blue glassy background gradient behind the hero area */}
    <div className="absolute top-0 left-0 right-0 h-[92vh] bg-gradient-to-b from-[#271111] via-[#aa2016] to-[#f4f8fe] z-0" />

    {/* ======================================================= */}
    {/* NAVBAR SECTION (APPLE GLASS SPEC)                      */}
    {/* ======================================================= */}
    <header className="w-full max-w-md mx-auto px-4 pt-4 relative z-50">
      {/* Frosted Glass Bar - Perfectly blends with the dark backdrop */}
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
          <Link href="services" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Services</Link>
          <Link href="#packages" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Packages</Link>
          <Link href="#quote" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">Get Free Quote</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors">FAQ</Link>
        </nav>
      )}
    </header>

    {/* ======================================================= */}
    {/* HERO CONTENT SECTION (STCKED LAYOUT)                   */}
    {/* ======================================================= */}
    <main className="relative z-10 max-w-md mx-auto w-full px-4 pt-8 pb-16 text-center flex flex-col items-center">
  
  {/* 1. BRAND CONTENT (White text glowing on gradient background with synchronized animations) */}
  <div className="flex flex-col items-center mb-6">
    
    {/* Premium Frosted Glass Pill (Slides in smoothly from the left) */}
    <div 
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 shadow-md text-xs font-semibold text-white mb-4 opacity-0 animate-[slideInLeft_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="flex text-amber-400 tracking-tighter">⭐⭐⭐⭐⭐</div>
      <span className="ml-1 text-white/90 font-medium tracking-tight">Trusted by 25+ customers</span>
    </div>

       <h1 className="text-4xl font-black tracking-tight text-white mb-2 leading-tight drop-shadow-md flex justify-center overflow-hidden">
  {"9Torious".split("").map((char, index) => (
    <span
      key={index}
      className="inline-block opacity-0 animate-[shatterReveal_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {char}
    </span>
  ))}
</h1>
        
       <p className="text-white/90 italic font-medium text-sm sm:text-base flex items-center justify-center gap-1.5 drop-shadow-sm opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ animationDelay: '0.8s' }}>
  <span>Get Service At Home or At Your Workplace</span> 
  <span className="text-red-400 text-xs animate-pulse">❤️</span>
</p>
</div>

      {/* 2. CAR IMAGE CONTAINER (Stacked perfectly below the brand text) */}
     <div className="relative w-full h-[38vh] mb-6 rounded-[28px] p-[1.5px] bg-gradient-to-b from-red-500/40 via-red-600/20 to-red-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(239,68,68,0.15)] overflow-hidden">
  
  {/* Inner Mask Wrapper matching the exact crisp spacing from image_240a05.png */}
  <div className="relative w-full h-full bg-zinc-950 rounded-[26px] overflow-hidden">
    <img 
      src="/hero-car.png" 
      alt="Premium Detailing" 
      className="w-full h-full object-cover object-center"
    />
    
    {/* Dark Glass Shadow Overlay inside the card wrapper */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    
    {/* Exact Pill Badge matching the bottom-left positioning from image_240a05.png */}
    <div className="absolute bottom-4 left-4 bg-zinc-900/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-lg shadow-black/40">
      <span className="text-white text-xs font-bold tracking-tight antialiased">
        Infrared Curing
      </span>
    </div>
  </div>

</div>

      {/* 3. PREMIUM ACTION BUTTONS (Stacked perfectly below the car image) */}
      <div className="w-full flex flex-col gap-3.5 px-1 mb-8">
    
<Link
  href="/quote"
  className="w-full bg-gradient-to-b from-[#ffea53] via-[#fdd53c] to-[#fbc328] hover:brightness-110 text-slate-950 font-bold text-base py-4 px-6 rounded-full flex items-center justify-center gap-1.5 shadow-[inset_0_4px_8px_rgba(255,255,255,0.85),_inset_0_-2px_6px_rgba(0,0,0,0.15),_0_12px_30px_rgba(251,195,40,0.4)] transition-all duration-300 active:scale-[0.98]"
>
  <span>Get Free Quote</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-slate-950">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
</Link>


        <a
  href="tel:+16479161495"
  className="w-full bg-gradient-to-b from-[#2e2e33] to-[#1c1c1f] hover:brightness-110 text-white font-bold text-base py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-[inset_0_0_10px_3px_rgba(255,255,255,0.25),_0_12px_24px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98] border border-white/10"
>
  <span>Call Now</span>
</a>
</div>

     {/* Soft Animated Chevron */}
<div className="text-black/80 drop-shadow-md animate-bounce mb-14">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 mx-auto">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
</div>

      {/* ======================================================= */}
      {/* SERVICES SECTION                                       */}
      {/* ======================================================= */}
      <section id="services" className="w-full text-center max-w-md mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Our Main Services</h2>
        
        <div className="flex flex-col gap-5 w-full">
          {[
            { id: 'car-wash', title: 'Car Wash', description: 'Thorough exterior wash for a spotless appearance.', imgSrc: '/Images/Carwashing.jpg' },
            { id: 'car-detailing', title: 'Car Detailing', description: 'Deep Cleaning of interior & exterior for a like-new feel.', imgSrc: '/Images/Ceramic.jpg' },
            { id: 'paint-correction', title: 'Paint Correction', description: 'Remove swirls, scratches & restore clarity.', imgSrc: '/Images/Paint-fix.jpg' },
            { id: 'body-repair', title: 'Body Repair', description: 'Bumper scuffs, dents & paint touch ups.', imgSrc: '/Images/Tint.jpg' },
          ].map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
   





{/* ======================================================= */}
{/* ACCENT TRANSFORMATION TEXT                              */}
{/* ======================================================= */}
<section className="w-full mb-16 px-2">
  <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-3">
    Transform Your Vehicle Inside-Out
  </h2>
  <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-sm mx-auto">
    From spotless interiors to mirror-finish exteriors, we restore your ride to NEW with our expert five-star service.
  </p>
</section>

        {/* ======================================================= */}
        {/* PACKAGES CONTAINER (Screenshot 2026-06-25 191200.png)    */}
        {/* ======================================================= */}
        <section id="packages" className="w-full mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Choose A Package</h2>
          
          {/* Package Selector Tab Buttons */}
          <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 flex mb-6 w-full max-w-sm mx-auto">
            <button 
              onClick={() => setActiveTab("full")}
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-full transition-all ${activeTab === 'full' ? 'bg-[#0070f3] text-white shadow' : 'text-slate-600'}`}
            >
              Full Detail
            </button>
            <button 
              onClick={() => setActiveTab("exterior")}
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-full transition-all ${activeTab === 'exterior' ? 'bg-[#0070f3] text-white shadow' : 'text-slate-600'}`}
            >
              Exterior Only
            </button>
            <button 
              onClick={() => setActiveTab("interior")}
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-full transition-all ${activeTab === 'interior' ? 'bg-[#0070f3] text-white shadow' : 'text-slate-600'}`}
            >
              Interior Only
            </button>
          </div>

          {/* Package Interactive Card */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 text-left w-full">
            <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="absolute inset-0 bg-[url('/images/gold-package.jpg')] bg-cover bg-center" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-md mb-1 inline-block shadow-sm">
                  Most Popular
                </span>
                <h3 className="text-white text-xl font-black tracking-tight">Gold Premium</h3>
              </div>
            </div>

            {/* Checklist items dynamic mapping container based on active Tab selection */}
            <div className="mb-6">
              <h4 className="font-extrabold text-sm text-slate-900 mb-3 border-b pb-1">Interior Clean</h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-1.5">✅ Double vacuum interior</li>
                <li className="flex items-center gap-1.5">✅ Wipe all surfaces</li>
                <li className="flex items-center gap-1.5">✅ Clean & protect plastic</li>
                <li className="flex items-center gap-1.5">✅ Windows & mirrors</li>
                <li className="flex items-center gap-1.5">✅ Stains spot treatment</li>
                <li className="flex items-center gap-1.5">✅ Detail trunk</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-extrabold text-sm text-slate-900 mb-3 border-b pb-1">Exterior Clean</h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-1.5">✅ Professional hand wash</li>
                <li className="flex items-center gap-1.5">✅ Spot polish</li>
                <li className="flex items-center gap-1.5">✅ Wax protection</li>
                <li className="flex items-center gap-1.5">✅ Wheel wells</li>
                <li className="flex items-center gap-1.5">✅ Detail rims & tires</li>
              </ul>
            </div>

            <Link href="#quote" className="w-full block text-center bg-slate-950 hover:bg-black text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm">
              Get Free Quote
            </Link>
          </div>
        </section>


{/* ======================================================= */}
{/* FULL SCREEN INFINITE SCROLLING TICKER (FIXED BREAKOUT)   */}
{/* ======================================================= */}
<div className="w-screen  bg-[#fdd53c] py-3 overflow-hidden whitespace-nowrap flex select-none border-y border-slate-950 my-8">
  {/* Track 1 */}
  <div className="flex items-center gap-8 shrink-0 animate-[marquee_20s_linear_infinite] min-w-full justify-around text-slate-950 font-sans text-sm tracking-wide uppercase font-extrabold">
    <span>Open 7 Days</span>
    <span className="text-xs opacity-60">•</span>
    <span>Trusted by 25+ Customers</span>
    <span className="text-xs opacity-60">•</span>
    <span>100% Safety Guaranteed</span>
    <span className="text-xs opacity-60">•</span>
    <span>Premium Mobile Detailing</span>
    <span className="text-xs opacity-60">•</span>
  </div>

  {/* Track 2 */}
  <div className="flex items-center gap-8 shrink-0 animate-[marquee_20s_linear_infinite] min-w-full justify-around text-slate-950 font-sans text-sm tracking-wide uppercase font-extrabold" aria-hidden="true">
    <span>Open 7 Days</span>
    <span className="text-xs opacity-60">•</span>
    <span>Trusted by 25+ Customers</span>
    <span className="text-xs opacity-60">•</span>
    <span>100% Safety Guaranteed</span>
    <span className="text-xs opacity-60">•</span>
    <span>Premium Mobile Detailing</span>
    <span className="text-xs opacity-60">•</span>
  </div>
</div>





        {/* ======================================================= */}
        {/* WHATSAPP FORM SECTION                                  */}
        {/* ======================================================= */}
        <section id="quote" className="w-full bg-white rounded-3xl p-6 shadow-xl border border-slate-100 text-left scroll-mt-6 mb-16">
  <div className="text-center mb-6">
    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">Get a Free Quote</h2>
    <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
      Fill out the details below to lock in your premium detailing slot directly on WhatsApp.
    </p>
  </div>

  <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5 text-xs font-black uppercase tracking-wider text-slate-700">
    
    {/* Input: Name */}
    <div>
      <label className="block mb-1.5">Your Name *</label>
      <div className="flex gap-3">
        <div className="w-1/2">
          <input 
            required 
            type="text" 
            name="nameFirst" 
            placeholder="First"
            value={formData.nameFirst} 
            onChange={handleChange} 
            className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
          />
          <span className="text-[10px] text-slate-400 font-semibold lowercase mt-1 block pl-1">First name</span>
        </div>
        <div className="w-1/2">
          <input 
            required 
            type="text" 
            name="nameLast" 
            placeholder="Last"
            value={formData.nameLast} 
            onChange={handleChange} 
            className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
          />
          <span className="text-[10px] text-slate-400 font-semibold lowercase mt-1 block pl-1">Last name</span>
        </div>
      </div>
    </div>

    {/* Input: Phone */}
    <div className="flex flex-col gap-1.5">
      <label className="block">Phone *</label>
      <input 
        required 
        type="tel" 
        name="phone" 
        placeholder="(503) 730-0014"
        value={formData.phone} 
        onChange={handleChange} 
        className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
      />
    </div>

    {/* Input: Email */}
    <div className="flex flex-col gap-1.5">
      <label className="block">Email <span className="text-slate-400 font-medium lowercase">(optional)</span></label>
      <input 
        type="digital-email" 
        name="email" 
        placeholder="john@example.com"
        value={formData.email} 
        onChange={handleChange} 
        className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
      />
    </div>

    {/* Input: Preferred Date */}
    <div className="flex flex-col gap-1.5">
      <label className="block">Preferred Date <span className="text-slate-400 font-medium lowercase">(optional)</span></label>
      <input 
        type="date" 
        name="date" 
        value={formData.date} 
        onChange={handleChange} 
        className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium text-slate-600 focus:outline-none focus:border-slate-900 focus:bg-white transition-all" 
      />
    </div>

    {/* Input: Service Location Section */}
    <div className="border-t border-slate-100 pt-5 mt-2">
      <label className="block mb-3 text-slate-900 text-sm font-black uppercase tracking-tight">
        Service Location <span className="text-slate-400 text-xs font-medium lowercase">(optional)</span>
      </label>
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-[11px] text-slate-500 font-black uppercase tracking-wider block mb-1 pl-1">Street Address</span>
          <input 
            type="text" 
            name="street" 
            placeholder="Enter a location"
            value={formData.street} 
            onChange={handleChange} 
            className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
          />
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
            <span className="text-[11px] text-slate-500 font-black uppercase tracking-wider block mb-1 pl-1">City</span>
            <input 
              type="text" 
              name="city" 
              placeholder="Houston"
              value={formData.city} 
              onChange={handleChange} 
              className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
            />
          </div>
          <div className="w-1/2">
            <span className="text-[11px] text-slate-500 font-black uppercase tracking-wider block mb-1 pl-1">Postal Code</span>
            <input 
              type="text" 
              name="postalCode" 
              placeholder="77001"
              value={formData.postalCode} 
              onChange={handleChange} 
              className="w-full p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-medium normal-case text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300" 
            />
          </div>
        </div>
      </div>
    </div>

    {/* Premium Submit Button matching image_3f98c9.png template styling */}
    <button 
      type="submit" 
      className="w-full mt-4 bg-slate-900 hover:bg-black text-white font-black text-sm uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-[0.99]"
    >
      <svg className="w-4 h-4 fill-current text-[#fcd34d]" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.179.001 6.169 1.24 8.424 3.496 2.254 2.256 3.491 5.246 3.491 8.425 0 6.562-5.337 11.91-11.905 11.91-2.003-.001-3.97-.504-5.717-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.626 5.309 1.628 5.373 0 9.743-4.373 9.746-9.749 0-2.604-1.012-5.052-2.85-6.892C17.003 2.293 14.545 1.28 11.96 1.28c-5.378 0-9.752 4.374-9.756 9.75-.001 1.915.49 3.489 1.423 5.074l-.993 3.626 3.712-.973z" />
      </svg>
      <span>Send via WhatsApp</span>
    </button>
  </form>
</section>

        {/* ======================================================= */}
        {/* FAQ ACCORDION BLOCK (Screenshot 2026-06-25 191153.png)  */}
        {/* ======================================================= */}
        
       

<section 
  id="faq" 
  className="w-screen relative  bg-black text-white text-left scroll-mt-6 py-14 px-4 border-t border-[#252528]"
  style={{ fontFamily: " SF Pro, Arial, sans-serif" }}
>
  <div className="max-w-md mx-auto w-full">
    
    {/* Heading matched perfectly to Helvetica styling */}
    <h2 className="text-[32px] font-bold text-center tracking-tight text-white mb-8 leading-tight max-w-[280px] mx-auto">
      Frequently Asked Questions
    </h2>
    
    <div className="flex flex-col gap-3 w-full">
      {[
        "How do I book a service?",
        "Can you detail my car at my home, office or appartment?",
        "How long does the detail usually take?",
        "How long will the detail last?",
        "What if I don't have access to water or electricity?"
      ].map((question, index) => (
        <div 
          key={index} 
          className="w-full bg-[#1c1c1e] text-white rounded-lg overflow-hidden transition-all duration-200"
        >
          <button 
            onClick={() => toggleFaq(index)}
            className="w-full p-5 flex justify-between items-center font-bold text-sm transition-colors active:bg-[#252528] text-left gap-4"
          >
            <span className="text-[14px] leading-snug font-bold tracking-wide text-white/95">
              {question}
            </span>
            <span className="text-lg text-white font-light shrink-0">
              {openFaq === index ? "−" : "+"}
            </span>
          </button>
          
          {openFaq === index && (
            <div className="px-5 pb-5 text-[13px] text-zinc-400 font-normal leading-relaxed border-t border-white/5 pt-3 bg-black/20">
              We bring all certified products and tools necessary to complete top-tier premium detailing services directly to your custom location.
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      </main>

      {/* ======================================================= */}
      {/* PROFESSIONAL PREMIUM FOOTER (Screenshot 2026-06-25 191140.png) */}
      {/* ======================================================= */}
      <footer className="w-full bg-black text-zinc-400 text-left pt-12 pb-8 px-6 border-t border-zinc-900 mt-auto">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-4 mb-10 text-[11px]">
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 pb-1 border-b border-zinc-800">Locations</h4>
            <ul className="flex flex-col gap-1.5 text-zinc-400 font-medium">
              <li>Houston, TX</li>
              <li>Sugarland, TX</li>
              <li>Katy, TX</li>
              <li>Cypress, TX</li>
              <li>Pearland, TX</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 pb-1 border-b border-zinc-800">Site Links</h4>
            <ul className="flex flex-col gap-1.5 text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#packages" className="hover:text-white">Packages</Link></li>
              <li><Link href="#quote" className="hover:text-white">Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 pb-1 border-b border-zinc-800">Company</h4>
            <ul className="flex flex-col gap-1.5 text-zinc-400 font-medium">
              <li><a href="tel:+16479161495" className="hover:text-white">Call Us (24/7)</a></li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="max-w-md mx-auto text-center border-t border-zinc-900 pt-6">
          <p className="text-white font-extrabold text-sm mb-1 tracking-tight">9Torious Car Care</p>
          <p className="text-[10px] text-zinc-500 mb-2">10605 s gessner rd houston Tx 77071</p>
          <p className="text-[10px] text-zinc-500 mb-4">Monday - Sunday 8:00 AM to 8:00 PM</p>
          <p className="text-[10px] text-zinc-600">
            © {new Date().getFullYear()} 9Torious Car Care. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}