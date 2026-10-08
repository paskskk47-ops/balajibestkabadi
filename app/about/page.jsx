import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import GoogleReviews from '../../components/GoogleReviews';
import FaqSection from '../../components/FaqSection';
import { Phone, ShieldCheck, Scale, Award, Recycle, CheckCircle, FileText, Lock, Building, MapPin, Heart, Users, Check, Sparkles, TrendingUp, Leaf, Star, ArrowRight, Zap, Banknote, ExternalLink, Globe } from 'lucide-react';
import { localities } from '../../data/localities';

export const metadata = {
  title: 'About Us | Experienced Scrap Recycling Service in Jaipur | Balaji Kabadi Wala',
  description: 'Learn the story of Balaji Kabadi Wala in Jaipur. Providing reliable digitized doorstep scrap collection across 28 Jaipur localities with certified digital scales, transparent rates & eco-friendly recycling.',
  keywords: [
    'Best Kabadi Wala in Jaipur', 'Kabadiwala in Jaipur', 'Scrap Pickup Jaipur',
    'Scrap Dealer Jaipur', 'Doorstep Kabadiwala Jaipur', 'Raddi Wala Near Me Jaipur'
  ],
  alternates: {
    canonical: 'https://balajibestkabadiwala.in/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://balajibestkabadiwala.in/about',
    title: 'About Us | Experienced Scrap Recycling Service in Jaipur | Balaji Kabadi Wala',
    description: 'Learn the story of Balaji Kabadi Wala in Jaipur. Providing reliable digitized doorstep scrap collection across 28 Jaipur localities with certified digital scales & instant payment.',
  }
};

const externalCitations = [
  {
    name: "Google Business Profile",
    url: "https://share.google/sZlWMRMg87CrNgT66",
    label: "Official Google Business Listing"
  },
  {
    name: "Central Pollution Control Board (CPCB E-Waste)",
    url: "https://cpcb.nic.in/e-waste/",
    label: "Environmental Guidelines"
  },
  {
    name: "Rajasthan State Pollution Control Board (RSPCB)",
    url: "https://environment.rajasthan.gov.in/",
    label: "State Pollution Control"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#081509] text-white">
      <JsonLd />
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#081509] via-[#0f2612] to-[#081509] dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16381b] border border-[#22c55e]/60 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md mb-6">
            <Sparkles className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[#22c55e]">Best Kabadi Wala in Jaipur</span>
            <span className="text-gray-300">• Doorstep Scrap Pickup</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-[1.15]">
            Our Story: Pioneering Transparent & Eco-Friendly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#14b8a6]">Scrap Recycling in Jaipur</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mt-5 leading-relaxed font-normal max-w-3xl mx-auto">
            From humble beginnings in Mansarovar to becoming Jaipur’s trusted digitized <strong>doorstep kabadiwala service</strong> — discover how Balaji Kabadi Wala serves Jaipur residents with certified digital scales, live rate transparency, and responsible recycling.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs sm:text-sm font-semibold">
            <span className="px-4 py-2.5 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-[#22c55e]" /> Experienced Local Service
            </span>
            <span className="px-4 py-2.5 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-[#fbbf24]" /> 28 Jaipur Localities Covered
            </span>
            <span className="px-4 py-2.5 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#22c55e]" /> 100% Digital Scale Honesty
            </span>
          </div>
        </div>
      </section>

      {/* DETAILED BRAND FOUNDING STORY SECTION */}
      <section className="py-16 bg-[#0f2612]/60 border-y border-[#22c55e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Image */}
            <div className="lg:col-span-5">
              <div className="p-2.5 rounded-3xl bg-gradient-to-tr from-[#0d7a70] via-[#22c55e] to-[#142e18] shadow-2xl">
                <Image
                  src="/balaji_kabadi_founding_story.webp"
                  alt="Balaji Kabadi Wala 20 Year Founding Story in Jaipur"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block">
                📖 The Founding Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                How We Transformed Jaipur&apos;s Raddi Market into a <span className="text-[#22c55e]">Digital Doorstep Service</span>
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Selling household scrap (raddi, iron rods, plastic containers, copper wires) in Jaipur was traditionally a tedious experience. Residents had to wait for unorganized street hawkers who often carried inaccurate manual spring balances, offered erratic prices, and lacked digital payment options.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                Recognizing the need for a professional solution, <strong>Balaji Kabadi Wala</strong> was established in Mansarovar, Jaipur with a clear mission: <em>To modernize scrap collection by delivering absolute weight honesty, instant doorstep service, and eco-friendly processing.</em>
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                We introduced the use of <strong>certified electronic digital scales</strong> right at the customer&apos;s doorstep, eliminating weight discrepancies. Today, our fleet of verified collection vehicles operates across all 28 major Jaipur localities — including <Link href="/mansarovar" className="text-[#22c55e] underline">Mansarovar</Link>, <Link href="/vaishali-nagar" className="text-[#22c55e] underline">Vaishali Nagar</Link>, <Link href="/malviya-nagar" className="text-[#22c55e] underline">Malviya Nagar</Link>, <Link href="/jagatpura" className="text-[#22c55e] underline">Jagatpura</Link>, <Link href="/raja-park" className="text-[#22c55e] underline">Raja Park</Link>, <Link href="/sanganer" className="text-[#22c55e] underline">Sanganer</Link>, <Link href="/jhotwara" className="text-[#22c55e] underline">Jhotwara</Link>, and <Link href="/c-scheme" className="text-[#22c55e] underline">C-Scheme</Link>.
              </p>

              <div className="p-5 rounded-2xl bg-[#081509] border border-[#22c55e]/30 space-y-2">
                <h4 className="text-sm font-bold text-[#fbbf24] flex items-center gap-2 font-['Plus_Jakarta_Sans']">
                  <Heart className="w-4 h-4 text-[#fbbf24]" /> Our Core Commitment to Jaipur Residents:
                </h4>
                <p className="text-xs text-gray-300">
                  Zero hidden transportation fees, 100% transparent live rate card, instant digital payouts (GPay/PhonePe/Paytm/Cash), and responsible recycling standards.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* VERIFIED EXTERNAL PROFILES & CITATIONS SECTION */}
      <section className="py-16 bg-[#081509] dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              🔗 Official Citations & Directory Listings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Verified External Profiles & <span className="text-[#22c55e]">Press Citations</span>
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Explore our official business directory listings, price registries, and external publication profiles across trusted platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalCitations.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 hover:border-[#22c55e] hover:bg-[#22c55e]/15 transition-all group block space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider">{item.label}</span>
                  <ExternalLink className="w-4 h-4 text-[#22c55e] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#22c55e] transition-colors font-['Plus_Jakarta_Sans']">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 truncate">{item.url}</p>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* CLEAN LOCALITY NAVIGATION GRID */}
      <section className="py-14 bg-[#0f2612]/60 border-t border-[#22c55e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              📍 Doorstep Service Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Jaipur Localities <span className="text-[#22c55e]">Served</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
            {localities.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-3 rounded-xl bg-[#142e18] text-gray-200 border border-[#22c55e]/25 hover:border-[#22c55e] hover:bg-[#22c55e]/20 transition-all font-medium text-center flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span className="truncate">{loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS (PLACED JUST ABOVE FAQ) */}
      <GoogleReviews />

      {/* 8 DETAILED FAQS */}
      <FaqSection localityName="Jaipur" />

    </div>
  );
}
