'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
      `*New Quote Request - 9 Torious Car Care*%0A` +
      `---------------------------------------%0A` +
      `• *Name:* ${formData.nameFirst} ${formData.nameLast}%0A` +
      `• *Phone:* ${formData.phone}%0A` +
      `• *Email:* ${formData.email || "Not Provided"}%0A` +
      `• *Preferred Date:* ${formData.date || "Not Provided"}%0A` +
      `• *Address:* ${formData.street || ""}, ${formData.city || ""}, ${formData.postalCode || ""}`;

    window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col w-full overflow-x-hidden">

      {/* ======================================================= */}
      {/*                    NAVBAR SECTION                       */}
      {/* ======================================================= */}
      <header className="w-full flex flex-col">

        {/* TOP INFORMATION BAR */}
        <div className="bg-[#010102] text-white text-xs px-4 py-2.5 flex flex-row justify-between items-center border-b border-gray-800">
          <div className="flex items-center gap-1.5 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-sky-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.415-5.114-3.704-6.533-6.532l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span>+1 647-916-1495</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-sky-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>7:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* MAIN LOGO & NAVIGATION AREA */}
        <div className="bg-[#f83838] text-white px-4 sm:px-6 py-4 flex justify-between items-center shadow-md relative">
          <Link href="/" className="text-2xl font-black tracking-tight drop-shadow-sm">
            9 Torrious Car Care
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-black transition-colors">Services</Link>
            <Link href="/testimonials" className="hover:text-black transition-colors">Testimonials</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 rounded focus:outline-none hover:bg-sky-500 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>

          {isOpen && (
            <nav className="absolute top-full left-0 w-full bg-[#38bdf8] border-t border-sky-400 flex flex-col p-4 gap-3 font-semibold text-base shadow-xl z-50 md:hidden">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-sky-400/30 hover:text-black">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 border-b border-sky-400/30 hover:text-black">About Us</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="py-2 border-b border-sky-400/30 hover:text-black">Services</Link>
              <Link href="/testimonials" onClick={() => setIsOpen(false)} className="py-2 border-b border-sky-400/30 hover:text-black">Testimonials</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2 hover:text-black">Contact Us</Link>
            </nav>
          )}
        </div>

        {/* FULL-WIDTH CALL TO ACTION BUTTON */}
        <div className="bg-[#f83838] px-4 pb-4 md:px-6">
          <Link
            href="/contact"
            className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-bold text-sm py-3 px-4 rounded flex items-center justify-center gap-2 shadow transition-all active:scale-[0.99]"
          >
            <span>Get a Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.521 1.582.233 2.722 1.634 2.722 3.23v11.22c0 1.596-1.14 2.997-2.722 3.23a49.083 49.083 0 0 1-4.444.425.75.75 0 0 1-.532-.22l-3.113-3.112a1.022 1.022 0 0 0-.322-.222l-3.084-1.141a.75.75 0 0 1-.427-.929V15.75H4.848c-1.583-.233-2.722-1.634-2.722-3.23V6c0-1.596 1.14-2.997 2.722-3.23Zm11.27 6.01a.75.75 0 0 1 1.06-.02l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.463a3.75 3.75 0 0 0-3.75 3.75.75.75 0 0 1-1.5 0 5.25 5.25 0 0 1 5.25-5.25h2.463l-.97-.97a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </header>

      {/* ======================================================= */}
      {/*                     HERO SECTION                        */}
      {/* ======================================================= */}
      <div className="relative overflow-hidden w-full h-[480px] flex flex-col items-center justify-center px-4 text-center shadow-md bg-zinc-900">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          // ⚠️ Make sure this file exists at: public/videos/car-care-bg.mp4
          // Check the exact filename — your original had a typo "car-cae-bg.mp4"
        >
          <source src="/videos/car-care-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />

        {/* Hero Text */}
        <div className="relative z-20 flex flex-col items-center max-w-xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight drop-shadow-md">
            9 Torrious Car Care
          </h2>
          <p className="text-yellow-400 text-sm sm:text-base font-medium mb-2 drop-shadow">
            ⭐⭐⭐⭐⭐
          </p>
          <p className="text-zinc-100 text-sm sm:text-base font-medium mb-6 leading-relaxed drop-shadow">
            5-star rated Car Service <br />
            Our team you can trust!
          </p>
          <Link
            href="/services"
            className="inline-block bg-white hover:bg-zinc-200 text-black font-bold text-sm py-3 px-8 rounded shadow-md transition-all active:scale-[0.98]"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* ======================================================= */}
      {/*              CENTERED PAGE SECTIONS CONTENT             */}
      {/* ======================================================= */}
      <div className="w-full max-w-xl mx-auto px-4 flex flex-col gap-12 pb-16">

        {/* ======================================================= */}
        {/*                  WHY CHOOSE US SECTION                  */}
        {/* ======================================================= */}
        <div className="w-full text-left mt-12 bg-black border border-[#d62828] rounded-2xl p-6 sm:p-8 shadow-md">
          <h2 className="text-2xl font-black text-white uppercase tracking-wide mb-4">
            Why Choose Us:
          </h2>
          <p className="text-white text-sm font-medium mb-8 leading-relaxed opacity-90">
            At Torquius, we go above and beyond to ensure your vehicle needs are met with professionalism, care, and convenience. Here's why we're the right choice for you:
          </p>

          <div className="relative border-l-2 border-zinc-800 pl-6 ml-3 flex flex-col gap-8">

            <div className="relative">
              <div className="absolute -left-[35px] top-0.5 bg-zinc-900 text-white p-1 rounded flex items-center justify-center w-5 h-5 shadow-sm border border-zinc-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Locally Owned & Operated</h3>
              <p className="text-zinc-300 text-sm leading-normal opacity-90">
                We're proud local operators dedicated to serving our community with reliable, top-tier car care service.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] top-0.5 bg-zinc-900 text-white p-1 rounded flex items-center justify-center w-5 h-5 shadow-sm border border-zinc-700">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Fully Licensed & Insured</h3>
              <p className="text-zinc-300 text-sm leading-normal opacity-90">
                Rest assured knowing you're traveling with fully registered and comprehensively insured vehicles meeting all standard safety checks.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] top-0.5 bg-zinc-900 text-white p-1 rounded flex items-center justify-center w-5 h-5 shadow-sm border border-zinc-700">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Affordable Pricing</h3>
              <p className="text-zinc-300 text-sm leading-normal opacity-90">
                Car Services rates that won't break the bank—always upfront, completely fair, and with absolutely no hidden booking charges.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] top-0.5 bg-zinc-900 text-white p-1 rounded flex items-center justify-center w-5 h-5 shadow-sm border border-zinc-700">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">100% Satisfaction</h3>
              <p className="text-zinc-300 text-sm leading-normal opacity-90">
                If your journey isn't smooth, neither are we. You can inform us until you are not satisfied.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] top-0.5 bg-zinc-900 text-white p-1 rounded flex items-center justify-center w-5 h-5 shadow-sm border border-zinc-700">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Experienced & Friendly Team</h3>
              <p className="text-zinc-300 text-sm leading-normal opacity-90">
                Our support team combines professional field expertise with a friendly, approachable attitude to make every contact enjoyable.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/*                OUR SERVICES IMAGE GRID                  */}
        {/* ======================================================= */}
        <div className="w-full mt-4">
          <div className="bg-[#f85838] text-white p-6 rounded-t-xl text-center shadow-sm">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm font-medium opacity-90 leading-relaxed">
              We offer a range of premium car care services to keep your vehicle looking brand new. Simply browse what we can do for you below!
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">

            {/* Service Card 1 - Car Wash */}
            {/* ⚠️ File must exist at: public/images/carwashing.jpg */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/Carwashing.jpg"
                alt="Car Wash Service"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left text-white z-10">
                <h3 className="text-2xl font-black tracking-wide mb-1 drop-shadow-sm">Car Wash</h3>
                <p className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-sm">
                  Thorough exterior wash for a spotless appearance.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Car Detailing */}
            {/* ⚠️ File must exist at: public/images/ceramic.jpg */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/Ceramic.jpg"
                alt="Car Detailing Service"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left text-white z-10">
                <h3 className="text-2xl font-black tracking-wide mb-1 drop-shadow-sm">Car Detailing</h3>
                <p className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-sm">
                  Deep Cleaning of interior & exterior for a like-new feel.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Paint Correction */}
            {/* ⚠️ File must exist at: public/images/paint-fix.jpg */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/Paint-fix.jpg"
                alt="Paint Correction Service"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left text-white z-10">
                <h3 className="text-2xl font-black tracking-wide mb-1 drop-shadow-sm">Paint Correction</h3>
                <p className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-sm">
                  Remove swirls, scratches & restore clarity.
                </p>
              </div>
            </div>

            {/* Service Card 4 - Body Repair */}
            {/* ⚠️ File must exist at: public/images/tint.jpg */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/Tint.jpg"
                alt="Body Repair Service"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left text-white z-10">
                <h3 className="text-2xl font-black tracking-wide mb-1 drop-shadow-sm">Body Repair</h3>
                <p className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-sm">
                  Bumper scuffs, dents & paint touch ups.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================= */}
        {/*                  WHATSAPP FORM SECTION                  */}
        {/* ======================================================= */}
        <div className="w-full bg-[#fef08a]/40 rounded-xl p-6 shadow-sm border border-yellow-200/50 text-left">
          <h2 className="text-3xl font-black text-[#eab308] mb-2">Get a Free Quote</h2>
          <p className="text-sm font-bold text-gray-800 mb-6 leading-relaxed">
            Fill out the form below now and we'll get back to you as soon as possible with pricing and availability!
          </p>

          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4 text-sm font-semibold text-gray-700">

            {/* Name Fields */}
            <div>
              <label className="block mb-1">Name <span className="text-red-500">*</span></label>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <input required type="text" name="nameFirst" value={formData.nameFirst} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
                  <span className="text-[11px] text-gray-500 font-normal mt-1 block">First</span>
                </div>
                <div className="w-1/2">
                  <input required type="text" name="nameLast" value={formData.nameLast} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
                  <span className="text-[11px] text-gray-500 font-normal mt-1 block">Last</span>
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block mb-1">Phone <span className="text-red-500">*</span></label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-1">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
            </div>

            {/* Date Field */}
            <div>
              <label className="block mb-1">Preferred Date <span className="text-gray-400 font-normal">(Optional)</span></label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal text-gray-600" />
            </div>

            {/* Address */}
            <div className="border-t border-gray-200/60 pt-4 mt-2">
              <label className="block mb-2 text-gray-800 text-base font-bold">
                Service Location <span className="text-gray-400 text-xs font-normal">(Optional)</span>
              </label>
              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs text-gray-500 font-medium block mb-1">Street Address</span>
                  <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter a location" className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
                </div>
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <span className="text-xs text-gray-500 font-medium block mb-1">City</span>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
                  </div>
                  <div className="w-1/2">
                    <span className="text-xs text-gray-500 font-medium block mb-1">Postal Code</span>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-300 rounded font-normal" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full mt-4 bg-[#f97316] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.179.001 6.169 1.24 8.424 3.496 2.254 2.256 3.491 5.246 3.491 8.425 0 6.562-5.337 11.91-11.905 11.91-2.003-.001-3.97-.504-5.717-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.626 5.309 1.628 5.373 0 9.743-4.373 9.746-9.749 0-2.604-1.012-5.052-2.85-6.892C17.003 2.293 14.545 1.28 11.96 1.28c-5.378 0-9.752 4.374-9.756 9.75-.001 1.915.49 3.489 1.423 5.074l-.993 3.626 3.712-.973z" />
              </svg>
              <span>Send via WhatsApp</span>
            </button>

          </form>
        </div>

      </div>

      {/* ======================================================= */}
      {/*                      FOOTER SECTION                     */}
      {/* ======================================================= */}
      <footer className="w-full text-center py-6 text-xs text-gray-500 border-t border-gray-200 bg-white mt-auto">
        © {new Date().getFullYear()} Car Care. All rights reserved.
      </footer>

    </div>
  );
}