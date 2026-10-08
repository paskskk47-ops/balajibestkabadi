'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top Teal Accent Bar from Eco-Recycle Jaipur Design System */}
      <div className="h-1.5 bg-gradient-to-r from-[#0d7a70] via-[#22c55e] to-[#0d7a70]" />

      <header className="sticky top-0 z-50 bg-[#0b190c]/95 backdrop-blur-md border-b border-[#0d7a70]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with New Uploaded Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-lg shadow-[#22c55e]/30 group-hover:scale-105 transition-transform bg-[#0b190c] shrink-0 border-2 border-[#22c55e] flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Balaji Kabadi Wala Jaipur Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white block leading-none font-['Plus_Jakarta_Sans']">
                  Balaji <span className="text-[#22c55e]">Kabadi</span>
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#0d7a70]/30 border border-[#14b8a6]/40 text-[11px] font-bold text-[#14b8a6] tracking-wide">
                  Eco-Recycle Jaipur
                </span>
              </div>
              <span className="text-[11px] text-[#cbd5e1] font-medium tracking-wide block mt-0.5">
                Jaipur Doorstep Scrap Pickup
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#cbd5e1]">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#22c55e] transition-colors">
              About Us
            </Link>
            <Link href="/#rates" className="hover:text-[#22c55e] transition-colors">
              Scrap Rates
            </Link>
            <Link href="/#locations" className="hover:text-[#22c55e] transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="hover:text-[#22c55e] transition-colors">
              Blog & News
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9509752549"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#122815] text-white border border-[#0d7a70]/50 hover:border-[#22c55e] text-sm font-bold transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#22c55e]" />
              <span>95097 52549</span>
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0d7a70] to-[#22c55e] hover:opacity-95 text-[#0b190c] text-sm font-bold shadow-lg shadow-[#0d7a70]/30 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-[#0b190c]" />
              <span>Book Free Pickup</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:9509752549"
              className="p-2 rounded-lg bg-[#22c55e] text-[#0b190c]"
              aria-label="Call Balaji Kabadi Wala"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-[#cbd5e1] hover:text-white rounded-lg bg-[#122815]"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden bg-[#0b190c] border-b border-[#0d7a70]/30 px-4 pt-3 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg bg-[#122815] text-white font-medium hover:text-[#22c55e]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg bg-[#122815] text-white font-medium hover:text-[#22c55e]"
            >
              About Us
            </Link>
            <Link
              href="/#rates"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg bg-[#122815] text-white font-medium hover:text-[#22c55e]"
            >
              Scrap Rates Today
            </Link>
            <Link
              href="/#locations"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg bg-[#122815] text-white font-medium hover:text-[#22c55e]"
            >
              Localities Served
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg bg-[#122815] text-white font-medium hover:text-[#22c55e]"
            >
              Blog Articles
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#0d7a70] to-[#22c55e] text-[#0b190c] font-bold text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[#0b190c]" />
              <span>Book Free Doorstep Pickup</span>
            </button>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
