import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { localities } from '../../data/localities';
import { cities } from '../../data/cities';
import ScrapRatesTable from '../../components/ScrapRatesTable';
import JsonLd from '../../components/JsonLd';
import GoogleReviews from '../../components/GoogleReviews';
import FaqSection from '../../components/FaqSection';
import { Phone, MapPin, CheckCircle, ShieldCheck, Scale, Banknote, HelpCircle, ArrowRight, Award, Recycle, Truck, Zap, FileText, Check, AlertTriangle, Leaf, Star, Sparkles, Building2, PackageCheck, Layers, FileCheck, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  const localityParams = localities.map((loc) => ({ slug: loc.slug }));
  const cityParams = cities.map((city) => ({ slug: city.slug }));
  return [...localityParams, ...cityParams];
}

export async function generateMetadata({ params }) {
  const locality = localities.find((l) => l.slug === params.slug);
  const city = cities.find((c) => c.slug === params.slug);
  
  if (!locality && !city) return {};

  const isLocality = !!locality;
  const name = locality ? locality.name : city.name;
  
  const primaryKeyword = isLocality ? `Kabadiwala in ${name} Jaipur` : `Scrap Dealer in ${name}`;
  const title = isLocality 
    ? `Kabadiwala in ${name} Jaipur | Doorstep Scrap Pickup` 
    : `Scrap Dealer in ${name} | Scrap Collection Service`;
    
  const description = isLocality
    ? `Looking for a trusted Kabadiwala in ${name} Jaipur? Book doorstep scrap pickup for newspaper raddi, plastic, copper, iron, e-waste & appliances with digital scales.`
    : `Leading Scrap Dealer in ${name}. Bulk commercial & industrial scrap buying with instant payment and certified weighbridge slips.`;

  const pageUrl = `https://balajibestkabadiwala.in/${params.slug}`;
  const imageUrl = `https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.webp`;

  return {
    title: title,
    description: description,
    keywords: [
      primaryKeyword, `Scrap Pickup ${name}`, `Scrap Dealer ${name}`,
      `Doorstep Kabadiwala ${name}`, `Raddi Buyer ${name} Jaipur`
    ],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Balaji Best Kabadi Wala',
      title: title,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function LocationPage({ params }) {
  const locality = localities.find((l) => l.slug === params.slug);
  const city = cities.find((c) => c.slug === params.slug);

  if (!locality && !city) {
    notFound();
  }

  const target = locality || city;
  const isLocality = !!locality;
  const primaryKeyword = isLocality ? `Kabadiwala in ${target.name} Jaipur` : `Scrap Dealer in ${target.name}`;

  // Select 4 nearby localities for contextual internal links
  const nearbyList = isLocality
    ? localities.filter((l) => l.slug !== target.slug).slice(0, 4)
    : [];

  return (
    <div className="bg-[#081509] text-white">
      <JsonLd locality={locality} city={city} />

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#081509] via-[#0f2612] to-[#081509] dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16381b] border border-[#22c55e]/60 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <MapPin className="w-4 h-4 text-[#22c55e]" />
                <span className="text-[#22c55e]">Doorstep Scrap Pickup in {target.name}</span>
                <span className="text-gray-300">• Express Dispatch</span>
              </div>

              {/* SINGLE PRIMARY H1 TAG */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.15]">
                {isLocality ? `Kabadiwala in ${target.name} Jaipur – Doorstep Scrap Pickup` : `Scrap Dealer in ${target.name} – Scrap Collection Services`}
              </h1>

              {/* FIRST 100 WORDS WITH PRIMARY KEYWORD & CONTEXTUAL INTERNAL LINKS */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                If you are looking for a reliable <strong>{primaryKeyword}</strong>, Balaji Kabadi Wala provides fast, eco-friendly doorstep scrap collection across all sectors and blocks of {target.name}. Whether you need to sell paper raddi, plastic buckets, copper wiring, or heavy iron, our <Link href="/" className="text-[#22c55e] underline hover:text-white transition-colors font-semibold">doorstep scrap pickup service in Jaipur</Link> brings government-certified electronic digital scales right to your location with instant cash or UPI payment on the spot.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm font-semibold">
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#22c55e]" /> 30-Min Local Dispatch
                </span>
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#fbbf24]" /> 100% Certified Digital Scales
                </span>
                <span className="px-3.5 py-2 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-[#22c55e]" /> Instant Cash / UPI Payout
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="tel:9509752549"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-[#081509] font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#22c55e]/30 hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#081509]" />
                  <span>Call Executive ({target.name}): 95097 52549</span>
                </a>
                <a
                  href={`https://wa.me/919509752549?text=Hi,%20I%20want%20to%20book%20a%20free%20scrap%20pickup%20in%20${encodeURIComponent(target.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/60 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-[#1c3f21] transition-all"
                >
                  <span>WhatsApp Booking</span>
                  <ArrowRight className="w-5 h-5 text-[#22c55e]" />
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-2.5 rounded-3xl bg-gradient-to-tr from-[#0d7a70] via-[#22c55e] to-[#142e18] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-[#081509]">
                  <Image
                    src="/screen.webp"
                    alt={`Doorstep scrap pickup service in ${target.name} Jaipur`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/50 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[11px] font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
                    Doorstep Pickup Service in {target.name}
                  </span>
                  <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                    Serving Sectors & Residential Colonies in {target.name}
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

      {/* SECTION 1: LOCALITY RECYCLING ECOSYSTEM & CONTEXTUAL INTERNAL LINKS */}
      <section className="py-16 bg-[#0f2612]/60 border-y border-[#22c55e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="p-2.5 rounded-3xl bg-gradient-to-br from-[#22c55e]/40 to-[#0d7a70] shadow-xl">
                <Image
                  src="/balaji_kabadi_doorstep_service.webp"
                  alt={`Scrap collection vehicle in ${target.name}`}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#22c55e]/15 text-[#22c55e] text-xs font-bold uppercase">
                <Award className="w-4 h-4" /> Experienced Local Scrap Service in {target.name}
              </div>

              {/* SEMANTIC H2 */}
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                Doorstep Scrap Collection & Eco-Friendly Recycling in <span className="text-[#22c55e]">{target.name}</span>
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Households, retail showrooms, corporate offices, and educational institutions in {target.name} often struggle with inconvenient scrap disposal and uncalibrated manual spring balances. Balaji Kabadi Wala provides a digitized, transparent doorstep pickup service across {target.name} with certified electronic digital weighing and instant spot payment.
              </p>

              {/* CONTEXTUAL INTERNAL LINKS TO NEARBY LOCALITIES & BLOG GUIDES */}
              {isLocality && nearbyList.length > 0 && (
                <p className="text-sm text-gray-300 leading-relaxed bg-[#142e18] p-4 rounded-xl border border-[#22c55e]/30">
                  📍 <strong>Nearby Coverage Areas:</strong> We also provide doorstep scrap pickup in adjacent neighborhoods including{' '}
                  {nearbyList.map((loc, idx) => (
                    <span key={loc.slug}>
                      <Link href={`/${loc.slug}`} className="text-[#22c55e] underline hover:text-white font-semibold">
                        Kabadiwala in {loc.name}
                      </Link>
                      {idx < nearbyList.length - 1 ? ', ' : '.'}
                    </span>
                  ))}
                  {' '}Check our <Link href="/blog/blog-scrap-rates-jaipur-2025-guide" className="text-[#fbbf24] underline hover:text-white font-semibold">Jaipur Daily Scrap Rate Guide 2026</Link> for updated price benchmarks.
                </p>
              )}

              <p className="text-sm text-gray-300 leading-relaxed">
                {target.scrap_categories_detail}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#142e18] border border-[#22c55e]/30">
                  <h3 className="text-xs font-bold text-[#22c55e] uppercase tracking-wider mb-1">📍 Local Landmarks Covered</h3>
                  <p className="text-xs text-gray-300">{target.landmarks}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#142e18] border border-[#22c55e]/30">
                  <h3 className="text-xs font-bold text-[#22c55e] uppercase tracking-wider mb-1">🏢 Market & Colony Types</h3>
                  <p className="text-xs text-gray-300">{target.market_type}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: RESIDENTIAL VS COMMERCIAL SOLUTIONS */}
      <section className="py-16 bg-[#081509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              🏢 Specialized Pickup Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Tailored Scrap Solutions for <span className="text-[#22c55e]">Homes & Businesses in {target.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#142e18] border border-[#22c55e]/30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Household Scrap Pickup in {target.name}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clear out your balcony, storeroom, and garage effortlessly. We collect newspapers, textbooks, cardboard shipping boxes, plastic buckets, broken washing machines, old copper wire, and brass utensils. Read our guide on <Link href="/blog/blog-battery-scrap-prices-jaipur" className="text-[#22c55e] underline font-semibold">Lead-Acid Battery Scrap Rates</Link> to maximize your payout for old inverter batteries.
              </p>
              <ul className="space-y-2 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22c55e]" /> Free doorstep weighing & pickup
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22c55e]" /> Flexible weekend & evening slots
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22c55e]" /> Immediate spot cash or UPI transfer
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#142e18] border border-[#22c55e]/30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fbbf24]/20 text-[#fbbf24] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Corporate Office & Commercial Scrap Clearance
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                For IT parks, corporate offices, banks, and manufacturing units in {target.name}, we provide bulk scrap clearance. We handle dead computers, server racks, copper LAN wiring, aluminium partition sections, and confidential document shredding. Learn more about our <Link href="/blog/blog-commercial-office-scrap-recycling-jaipur" className="text-[#fbbf24] underline font-semibold">Corporate Office Scrap Clearance</Link> solutions.
              </p>
              <ul className="space-y-2 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#fbbf24]" /> Official weighbridge receipts & GST billing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#fbbf24]" /> Certified document destruction slips
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#fbbf24]" /> High-capacity commercial vehicle fleet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW SCRAP COLLECTION WORKS */}
      <section className="py-16 bg-[#0f2612]/60 border-y border-[#22c55e]/20 dotted-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              ⚡ How Our Scrap Collection Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              5 Simple Steps to <span className="text-[#22c55e]">Sell Scrap in {target.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-[#081509] font-extrabold flex items-center justify-center text-lg">1</div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">Book Online / Call</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Call <strong>95097 52549</strong> or message on WhatsApp to schedule doorstep pickup in {target.name}.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-[#081509] font-extrabold flex items-center justify-center text-lg">2</div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">Prompt Dispatch</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Our nearest local scrap collection team is scheduled for your address.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fbbf24] text-[#081509] font-extrabold flex items-center justify-center text-lg">3</div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">Digital Weighing</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Weighing on certified electronic LED scales. Read about <Link href="/blog/blog-digital-weighing-vs-manual-scales" className="text-[#fbbf24] underline">Digital Scales vs Manual Balances</Link>.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-[#081509] font-extrabold flex items-center justify-center text-lg">4</div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">Instant Payment</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Get paid immediately via GPay, PhonePe, Paytm, or Cash on the spot.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-[#081509] font-extrabold flex items-center justify-center text-lg">5</div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">Eco Recycling</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Scrap is sorted and routed to licensed recycling facilities following environmental standards.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOCUSED LOCALITY BENCHMARK SCRAP RATES */}
      <section className="py-16 bg-[#081509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
              📊 Indicative Price Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Indicative Scrap Rates for <span className="text-[#22c55e]">{target.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              * Indicative benchmark rates. Actual payouts depend on material purity, grade, and market movement. Confirm rate before collection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">📰</span>
              <h4 className="text-xs font-bold text-gray-200">Newspaper Raddi</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹18 – ₹22 <span className="text-[10px] font-normal text-gray-300">/ kg</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">📦</span>
              <h4 className="text-xs font-bold text-gray-200">Cardboard Gatta</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹12 – ₹15 <span className="text-[10px] font-normal text-gray-300">/ kg</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">🔩</span>
              <h4 className="text-xs font-bold text-gray-200">Heavy Iron Scrap</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹28 – ₹38 <span className="text-[10px] font-normal text-gray-300">/ kg</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">🔌</span>
              <h4 className="text-xs font-bold text-gray-200">Copper Wire</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹550 – ₹780 <span className="text-[10px] font-normal text-gray-300">/ kg</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">🔋</span>
              <h4 className="text-xs font-bold text-gray-200">Inverter Battery</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹1,500 – ₹2,500 <span className="text-[10px] font-normal text-gray-300">/ pc</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/30 text-center">
              <span className="text-2xl block mb-1">❄️</span>
              <h4 className="text-xs font-bold text-gray-200">Split / Window AC</h4>
              <p className="text-sm font-extrabold text-[#fbbf24] mt-1">₹1,800 – ₹3,500 <span className="text-[10px] font-normal text-gray-300">/ pc</span></p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/#rates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#142e18] border border-[#22c55e]/50 text-white hover:bg-[#22c55e] hover:text-[#081509] font-bold text-xs sm:text-sm transition-all"
            >
              <span>View Full Jaipur Scrap Rates Table (20+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEARBY LOCALITY NAVIGATION */}
      {isLocality && nearbyList.length > 0 && (
        <section className="py-12 bg-[#0f2612]/60 border-t border-[#22c55e]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-1">
                📍 Adjacent Service Areas
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Scrap Pickup in Areas Near <span className="text-[#22c55e]">{target.name}</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs max-w-3xl mx-auto">
              {nearbyList.map((loc) => (
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
      )}

      {/* AUTO-SCROLLING GMB REVIEWS */}
      <GoogleReviews />

      {/* 8 DETAILED FAQS TAILORED TO LOCALITY */}
      <FaqSection localityName={target.name} />

    </div>
  );
}
