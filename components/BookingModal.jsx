'use client';

import { useState } from 'react';
import { X, Send, Calendar, MapPin, Phone, User, Package } from 'lucide-react';

export default function BookingModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: 'Mansarovar',
    scrapType: 'Mixed Scrap (Paper/Metal/Plastic)',
    preferredDate: 'Today (Within 60 Mins)'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*NEW SCRAP PICKUP BOOKING*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Locality:* ${formData.locality}%0A*Scrap Type:* ${formData.scrapType}%0A*Preferred Date:* ${formData.preferredDate}%0A%0APlease assign a pickup executive.`;
    window.open(`https://wa.me/919509752549?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#142c17] border border-[#25b05a]/40 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0d1f0f] text-[#b3cbb6] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold text-[#25b05a] uppercase tracking-wider block mb-1">
            ⚡ Instant WhatsApp Booking
          </span>
          <h2 className="text-2xl font-bold text-white font-['Bebas_Neue'] uppercase tracking-wide">
            Book Doorstep Scrap Pickup
          </h2>
          <p className="text-xs text-[#b3cbb6]">
            Free collection & instant cash/UPI payment across 25+ Jaipur localities.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          
          <div>
            <label className="block text-xs font-semibold text-[#b3cbb6] mb-1">Your Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#25b05a] absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0d1f0f] border border-[#25b05a]/30 rounded-xl text-white focus:outline-none focus:border-[#25b05a]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#b3cbb6] mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#25b05a] absolute left-3 top-3" />
              <input
                type="tel"
                required
                placeholder="e.g. 98290 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0d1f0f] border border-[#25b05a]/30 rounded-xl text-white focus:outline-none focus:border-[#25b05a]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#b3cbb6] mb-1">Select Locality in Jaipur</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#25b05a] absolute left-3 top-3" />
              <select
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0d1f0f] border border-[#25b05a]/30 rounded-xl text-white focus:outline-none focus:border-[#25b05a]"
              >
                <option value="Mansarovar">Mansarovar</option>
                <option value="Vaishali Nagar">Vaishali Nagar</option>
                <option value="Malviya Nagar">Malviya Nagar</option>
                <option value="Jagatpura">Jagatpura</option>
                <option value="Pratap Nagar">Pratap Nagar</option>
                <option value="Raja Park">Raja Park</option>
                <option value="C Scheme">C Scheme</option>
                <option value="Vidhyadhar Nagar">Vidhyadhar Nagar</option>
                <option value="Other Jaipur Area">Other Jaipur Locality</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#b3cbb6] mb-1">Primary Scrap Material</label>
            <div className="relative">
              <Package className="w-4 h-4 text-[#25b05a] absolute left-3 top-3" />
              <select
                value={formData.scrapType}
                onChange={(e) => setFormData({ ...formData, scrapType: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0d1f0f] border border-[#25b05a]/30 rounded-xl text-white focus:outline-none focus:border-[#25b05a]"
              >
                <option value="Mixed Scrap (Paper/Metal/Plastic)">Mixed Scrap (Paper/Metal/Plastic)</option>
                <option value="Newspaper & Paper Raddi">Newspaper & Paper Raddi</option>
                <option value="Copper / Wiring / Brass">Copper / Wiring / Brass</option>
                <option value="Iron & Steel Metal Scrap">Iron & Steel Metal Scrap</option>
                <option value="E-Waste & Dead Electronics">E-Waste & Dead Electronics</option>
                <option value="Old Batteries / Inverter Battery">Old Batteries / Inverter Battery</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-xl bg-[#25b05a] hover:bg-[#1fa04f] text-[#0d1f0f] font-extrabold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#25b05a]/30 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Send Pickup Request via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
}
