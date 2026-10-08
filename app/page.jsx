import Link from 'next/link';
import Image from 'next/image';
import ScrapRatesTable from '../components/ScrapRatesTable';
import JsonLd from '../components/JsonLd';
import GoogleReviews from '../components/GoogleReviews';
import FaqSection from '../components/FaqSection';
import { Phone, MapPin, CheckCircle, ShieldCheck, Scale, Banknote, HelpCircle, ArrowRight, Award, Recycle, Truck, Zap, FileText, Check, AlertTriangle, Leaf, Star, ExternalLink, Globe } from 'lucide-react';
import { localities } from '../data/localities';
import { cities } from '../data/cities';

const scrapTypesList = [
  { title: "Old Newspaper Raddi", rate: "₹18 - ₹22 / kg", image: "/card_newspaper_raddi.webp", desc: "Newspapers, books, magazines, cardboard boxes, office paper & notebooks." },
  { title: "Plastic Scrap", rate: "₹14 - ₹28 / kg", image: "/card_plastic_scrap.webp", desc: "PET bottles, plastic buckets, chairs, oil cans & household plastic waste." },
  { title: "Copper Wire Scrap", rate: "₹550 - ₹720 / kg", image: "/card_copper_wire.webp", desc: "Heavy motor copper wire, AC copper pipe, unstripped electrical wiring." },
  { title: "Brass & Bronze", rate: "₹380 - ₹460 / kg", image: "/card_brass_utensils.webp", desc: "Yellow brass utensils, valves, taps, handicrafts & decorative items." },
  { title: "Aluminium Scrap", rate: "₹125 - ₹165 / kg", image: "/card_aluminium_scrap.webp", desc: "Aluminium cans, window frames, utensils, sheet metal & motor bodies." },
  { title: "Iron & Steel Scrap", rate: "₹28 - ₹38 / kg", image: "/card_iron_steel.webp", desc: "Heavy iron rods, grills, metal furniture, structural steel & pipes." },
  { title: "E-Waste & Electronics", rate: "₹40 - ₹450 / pc", image: "/card_ewaste_electronics.webp", desc: "Old laptops, dead PCs, CPUs, motherboards, TVs, printers & monitors." },
  { title: "Home Appliances", rate: "₹800 - ₹3,500 / pc", image: "/card_home_appliances.webp", desc: "Old ACs, refrigerators, washing machines, geysers & microwave ovens." },
];

const externalCitations = [
  { name: "Google Business Profile", url: "https://share.google/sZlWMRMg87CrNgT66" },
  { name: "Central Pollution Control Board (CPCB E-Waste)", url: "https://cpcb.nic.in/e-waste/" },
  { name: "Rajasthan State Pollution Control Board (RSPCB)", url: "https://environment.rajasthan.gov.in/" }
];

export default function Home() {
  return (
    <div className="bg-[#081509] text-white">
      <JsonLd />

      {/* HERO SECTION WITH USER-CENTRIC COPY */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#081509] via-[#0f2612] to-[#081509] dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16381b] border border-[#22c55e]/60 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <MapPin className="w-4 h-4 text-[#22c55e]" />
                <span className="text-[#22c55e]">Balaji Kabadi Wala Jaipur</span>
                <span className="text-gray-300">• Free Doorstep Pickup</span>
              </div>

              {/* User-Centric H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.15]">
                Sell Your Scrap From Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#14b8a6]">Doorstep in Jaipur</span>
              </h1>

              {/* Supporting Line */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                Paper, cardboard, metals, plastic, e-waste, lead-acid batteries, and old home appliances collected directly from homes and commercial offices across Jaipur. Transparent electronic weighing with instant UPI or Cash payment.
              </p>

              {/* Feature Badges / Trust Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm font-semibold">
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#22c55e]" /> Doorstep Pickup
                </span>
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#fbbf24]" /> Transparent Digital Weighing
                </span>
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-[#22c55e]" /> Instant Payment (UPI / Cash)
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="tel:9509752549"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-[#081509] font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#22c55e]/30 hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#081509]" />
                  <span>Book Scrap Pickup: 95097 52549</span>
                </a>
                <a
                  href="#rates"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/60 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-[#1c3f21] transition-all"
                >
                  <span>Check Indicative Rates</span>
                  <ArrowRight className="w-5 h-5 text-[#22c55e]" />
                </a>
              </div>
            </div>

            {/* Right Hero Image Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-2.5 rounded-3xl bg-gradient-to-tr from-[#0d7a70] via-[#22c55e] to-[#142e18] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-[#081509]">
                  <Image
                    src="/screen.webp"
                    alt="Doorstep Scrap Pickup Service in Jaipur - Balaji Kabadi Wala"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Clean Info Box Below Image */}
              <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/50 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[11px] font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
                    Doorstep Service Coverage
                  </span>
                  <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                    Serving 28 Jaipur Localities
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 bg-[#081509] px-3 py-1.5 rounded-xl border border-[#fbbf24]/50 shrink-0">
                  <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                  <span className="text-xs font-extrabold text-white">Local Service</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE BALAJI KABADI WALA JAIPUR */}
      <section className="py-16 bg-[#081509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              ⭐ Quality & Environmental Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Why Balaji Kabadi Wala is the <span className="text-[#22c55e]">Trusted Scrap Buyer in Jaipur</span>
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-normal">
              Building long-term trust across Jaipur with verified weighing, responsible recycling, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#142e18] p-6 rounded-2xl border border-[#22c55e]/30 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#0d7a70]/30 text-[#22c55e] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Experienced Local Service</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Local scrap pickup expertise serving homeowners, residential societies & corporate office establishments across Jaipur.
              </p>
            </div>

            <div className="bg-[#142e18] p-6 rounded-2xl border border-[#22c55e]/30 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#fbbf24]/20 text-[#fbbf24] flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Certified Digital Scale</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                100% transparent weighing on electronic digital scales displaying exact decimal weights directly to you.
              </p>
            </div>

            <div className="bg-[#142e18] p-6 rounded-2xl border border-[#22c55e]/30 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#0d7a70]/30 text-[#22c55e] flex items-center justify-center">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Eco-Friendly Recycling</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Working with licensed environmental recycling facilities to ensure scrap is processed cleanly and responsibly.
              </p>
            </div>

            <div className="bg-[#142e18] p-6 rounded-2xl border border-[#22c55e]/30 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#0d7a70]/30 text-[#22c55e] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">B2B Shredding & Slips</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Official weight receipts and confidential paper document shredding for commercial office & industrial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCRAP CATEGORIES GRID WITH HIGH QUALITY IMAGES */}
      <section className="py-16 bg-[#081509] dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              ♻️ Individual Scrap Categories We Accept
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              What Scrap Can You <span className="text-[#22c55e]">Sell Online in Jaipur</span>?
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-normal">
              We buy major household, commercial, and industrial scrap items at competitive Jaipur market rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {scrapTypesList.map((item, i) => (
              <div
                key={i}
                className="bg-[#142e18] rounded-2xl border border-[#22c55e]/30 hover:border-[#22c55e] overflow-hidden transition-all space-y-3 shadow-lg group flex flex-col justify-between"
              >
                {/* Category Thumbnail Image */}
                <div className="relative h-44 w-full bg-[#081509] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#081509]/80 backdrop-blur-md border border-[#fbbf24]/50 text-[#fbbf24] font-bold text-xs shadow-md">
                    {item.rate}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-[#22c55e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-[#22c55e]/20 flex items-center justify-between text-xs font-semibold text-[#22c55e]">
                    <span>Book Doorstep Pickup</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDICATIVE SCRAP RATES SECTION */}
      <section id="rates" className="py-16 bg-[#0f2612]/50 border-y border-[#22c55e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              📊 Indicative Market Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Indicative Scrap Rates in <span className="text-[#22c55e]">Jaipur</span>
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-normal">
              Market benchmark rates for paper raddi, plastics, copper, brass, iron, aluminium, e-waste & appliances.
            </p>
          </div>

          <ScrapRatesTable />
        </div>
      </section>

      {/* LOCAL SEO KEYWORD COMBINATIONS & INTERNAL LINKS */}
      <section id="locations" className="py-16 bg-[#081509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
              📍 Service Coverage Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Kabadiwala Services in <span className="text-[#22c55e]">Jaipur Localities</span>
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-normal">
              We provide free doorstep scrap pickup across all 28 major Jaipur localities & surrounding regions.
            </p>
          </div>

          {/* 28 Jaipur Locality Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
            {localities.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-3 rounded-xl bg-[#142e18] border border-[#22c55e]/30 hover:border-[#22c55e] text-center transition-all group shadow"
              >
                <span className="text-xs font-bold text-gray-200 group-hover:text-[#22c55e] block truncate">
                  {loc.name}
                </span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Scrap Pickup</span>
              </Link>
            ))}
          </div>

          {/* Major Industrial Cities in Rajasthan */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Commercial & Industrial Scrap Service across <span className="text-[#22c55e]">Rajasthan</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Bulk commercial & factory scrap pickup in major industrial cities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="p-2.5 rounded-xl bg-[#102413] border border-gray-800 hover:border-[#22c55e] text-center transition-all group"
              >
                <span className="text-xs font-semibold text-gray-300 group-hover:text-[#22c55e] block truncate">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS & FAQS */}
      <GoogleReviews />
      <FaqSection localityName="Jaipur" />

      {/* VERIFIED CITATIONS & EXTERNAL AUTHORITATIVE LINKS SECTION */}
      <section className="py-10 bg-[#061007] border-t border-[#22c55e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
                🌐 Business Profile & Environmental Resources
              </span>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                Official Business Profile & Environmental Links
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {externalCitations.map((cite, i) => (
                <a
                  key={i}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/40 hover:border-[#22c55e] text-xs font-semibold text-gray-200 hover:text-white flex items-center gap-2 transition-all shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>{cite.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
