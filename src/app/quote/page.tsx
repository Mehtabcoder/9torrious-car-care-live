'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Crown, Phone, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    phone: '',
    email: '', // <-- Add this line
    consentAppt: false,
    consentMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Your business phone number (including country code, no spaces/dashes)
    const businessPhoneNumber = "16479161495"; 

    // 2. Format the message with clean layout and markdown bold marks (*)
    const message = `Hello 9Torious Carcare! 👋\n\n` +
                    `I'd like to request a free service quote:\n\n` +
                    `• *Name:* ${formData.name}\n` +
                    `• *Selected Service:* ${formData.service}\n` +
                    `• *Phone Number:* ${formData.phone}\n\n` +
                    `Please let me know your availability!`;

    // 3. URL encode the string to pass safely to the browser window
    const encodedMessage = encodeURIComponent(message);
    
    // 4. Open WhatsApp in a new tab with the pre-filled message
    window.open(`https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="bg-gradient-to-b from-[#d6ebff] via-[#f7faff] to-white min-h-screen text-gray-900 font-sans flex flex-col w-full overflow-x-hidden antialiased pb-12">
      
      {/* Premium Header Bar */}
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
      <div className="max-w-md mx-auto w-full px-4 pt-6 flex-1">
        
        {/* Back Navigation Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase text-slate-600 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:bg-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[3]" />
          <span>Back to Home</span>
        </Link>

        {/* Form Main Layout Card */}
        <div className="w-full bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase mb-1">
              Get A Free Quote
            </h1>
            <p className="text-xs font-semibold text-slate-500">
              Fill out the details below to message us directly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Input: Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                Your Name *
              </label>
              <input 
                type="text"
                required
                placeholder="John Appleseed"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Input: Select Service Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                Select Service *
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-semibold focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-800 appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select Service</option>
                  <option value="Car Wash">Professional Hand Wash</option>
                  <option value="Car Detailing">Interior Deep Clean / Full Detail</option>
                  <option value="Paint Correction">Paint Correction & Polish</option>
                  <option value="Body Repair">Body Repair & Touch Ups</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Input: Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                Phone *
              </label>
              <input 
                type="tel"
                required
                placeholder="(503) 730-0014"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>

            
            {/* Input: Email (Optional) */}
<div className="flex flex-col gap-1.5">
  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
    Email <span className="text-slate-400 font-medium lowercase">(optional)</span>
  </label>
  <input 
    type="email"
    placeholder="john@example.com"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300"
  />
</div>

             

            {/* Legal / Policy Consent Box 1 */}
            <label className="flex items-start gap-3 cursor-pointer mt-2 group select-none">
              <input 
                type="checkbox"
                required
                checked={formData.consentAppt}
                onChange={(e) => setFormData({ ...formData, consentAppt: e.target.checked })}
                className="w-4 h-4 rounded mt-0.5 border-slate-300 text-slate-900 focus:ring-slate-900 accent-slate-900 cursor-pointer shrink-0"
              />
              <span className="text-[10px] sm:text-xs font-medium leading-relaxed text-slate-500 group-hover:text-slate-800 transition-colors">
                I consent to receive appointment confirmations, order updates, or service notifications from 9Torious Carcare. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe at any time.
              </span>
            </label>

            {/* Legal / Policy Consent Box 2 */}
            

            {/* Submit & Redirect Button */}
            <button 
              type="submit"
              className="bg-slate-900 hover:bg-black text-white text-sm font-black uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-center gap-2 mt-4 transition-all shadow-lg active:scale-[0.99]"
            >
              <span>Get Free Quote</span>
              <ShieldCheck className="w-4 h-4 text-[#fcd34d]" />
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}