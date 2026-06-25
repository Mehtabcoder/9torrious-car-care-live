'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <div className="min-h-screen bg-[#f7faff] text-gray-900 font-sans flex flex-col w-full overflow-x-hidden antialiased">

      {/* ======================================================= */}
      {/* NAVBAR SECTION                                          */}
      {/* ======================================================= */}
      <header className="w-full max-w-md mx-auto px-4 pt-4 relative z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center shadow-sm border border-white/40">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight text-slate-900">
              9Torious<span className="text-red-600">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Menu</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-end gap-1.5 w-6 h-6 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-slate-800 rounded transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl p-4 flex flex-col gap-2 font-medium text-sm shadow-xl border border-slate-100 z-50">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Home</Link>
            <Link href="services" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Services</Link>
            <Link href="#packages" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Packages</Link>
            <Link href="#quote" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Get Free Quote</Link>
            <Link href="#faq" onClick={() => setIsOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">FAQ</Link>
          </nav>
        )}
      </header>

      {/* ======================================================= */}
      {/* HERO HERO SECTION                                       */}
      {/* ======================================================= */}
      <main className="flex-1 flex flex-col items-center max-w-md mx-auto w-full px-4 pt-8 pb-12 text-center">
        
        <div className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-sm border border-white/90 rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-slate-800 mb-6">
          <div className="flex text-amber-400 tracking-tighter">⭐⭐⭐⭐⭐</div>
          <span className="ml-1 text-slate-600">Trusted by 25+ customers</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2 leading-tight">
          9Torious
        </h1>
        
        <p className="text-slate-700 italic font-medium text-sm sm:text-base flex items-center justify-center gap-1.5 mb-6">
          Get Service At Home or At Your Workplace 
          <span className="text-red-400 text-xs">❤️</span>
        </p>

        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-8">
          <div className="absolute inset-0 bg-slate-200 z-0" />
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none">
            <source src="/videos/car-care-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none" />
        </div>

        <div className="w-full flex flex-col gap-3.5 px-2 mb-12">
          <Link
            href="/quote"
            className="w-full bg-[#fcd34d] hover:bg-[#fbbf24] text-slate-900 font-bold text-base py-4 px-6 rounded-full flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.99]"
          >
            <span>Get Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <a
            href="tel:+16479161495"
            className="w-full bg-[#27272a] hover:bg-[#18181b] text-white font-bold text-base py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow transition-all active:scale-[0.99]"
          >
            <span>Call Now</span>
          </a>
        </div>

        <div className="text-slate-400 animate-bounce mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        {/* ======================================================= */}
        {/* SERVICES SECTION (image_3ec64d.png style)                */}
        {/* ======================================================= */}
       <section id="services" className="w-full mb-16 text-center">
  <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Our Main Services</h2>
  
  <div className="flex flex-col gap-5 w-full">
    {[
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
    ].map((service) => (
      <div 
        key={service.id} 
        className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg border-4 border-white group bg-slate-900"
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
        <section id="faq" className="w-full text-left scroll-mt-6 mb-8">
          <h2 className="text-3xl font-black text-center tracking-tight text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="flex flex-col gap-2.5 w-full">
            {[
              "How do I book a service?",
              "Can you detail my car at my home, office or apartment?",
              "How long does the detail usually take?",
              "How long will the detail last?",
              "What if I don't have access to water or electricity?"
            ].map((question, index) => (
              <div key={index} className="w-full bg-[#1e1e20] text-white rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 flex justify-between items-center font-bold text-xs sm:text-sm transition-colors active:bg-zinc-800 text-left"
                >
                  <span>{question}</span>
                  <span className="text-base text-zinc-400 font-light ml-2">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-xs text-zinc-300 font-normal leading-relaxed border-t border-zinc-800 pt-2 bg-zinc-900/50">
                    We bring all certified products and tools necessary to complete top-tier premium detailing services directly to your custom location.
                  </div>
                )}
              </div>
            ))}
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