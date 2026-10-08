import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Recycle, Leaf, ExternalLink, ShieldCheck, Building2, Star } from 'lucide-react';
import { localities } from '../data/localities';

export default function Footer() {
  const environmentalResources = [
    {
      name: "Central Pollution Control Board (CPCB E-Waste)",
      url: "https://cpcb.nic.in/e-waste/",
      desc: "Official E-Waste Management Rules"
    },
    {
      name: "Rajasthan State Pollution Control Board (RSPCB)",
      url: "https://environment.rajasthan.gov.in/",
      desc: "State Environmental Standards"
    }
  ];

  const businessResources = [
    {
      name: "Google Business Profile Location",
      url: "https://share.google/sZlWMRMg87CrNgT66",
      desc: "Verified Google Business Profile"
    },
    {
      name: "Trustpilot Reviews Profile",
      url: "https://www.trustpilot.com/evaluate/balajibestkabadiwala.in",
      desc: "Review us on Trustpilot"
    }
  ];

  return (
    <footer className="bg-[#09150a] text-white pt-16 pb-8 border-t border-[#0d7a70]/40">
      
      {/* Top Eco-Recycle Accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#0d7a70] via-[#25b05a] to-[#0d7a70] mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0d7a70]/20">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#22c55e] shadow-lg shadow-[#22c55e]/30 bg-[#0b190c] shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.webp"
                  alt="Balaji Kabadi Wala Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-['Plus_Jakarta_Sans'] tracking-wide text-white uppercase block leading-none">
                  Balaji <span className="text-[#25b05a]">Kabadi Wala</span>
                </span>
                <span className="text-[10px] text-[#b3cbb6] font-bold uppercase tracking-wider block mt-0.5">
                  Best Kabadi Wala in Jaipur
                </span>
              </div>
            </div>
            <p className="text-xs text-[#b3cbb6] leading-relaxed">
              Jaipur&apos;s most trusted <strong>doorstep kabadiwala service</strong>. Free scrap pickup, certified digital weighing scales, live daily scrap rates & instant payment across all 28 Jaipur localities.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="tel:9509752549"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#142c17] border border-[#0d7a70]/40 text-[#25b05a] text-xs font-bold hover:bg-[#22c55e]/20 transition-all w-full justify-center sm:justify-start"
              >
                <Phone className="w-4 h-4 text-[#25b05a]" />
                <span>Call Helpline: 95097 52549</span>
              </a>
              <a
                href="https://www.trustpilot.com/evaluate/balajibestkabadiwala.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#142c17] border border-[#0d7a70]/40 text-[#25b05a] text-xs font-bold hover:bg-[#22c55e]/20 transition-all w-full justify-center sm:justify-start"
              >
                <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                <span>Review us on Trustpilot</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-[#25b05a]">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#b3cbb6]">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>About Balaji Kabadi Wala</span>
                </Link>
              </li>
              <li>
                <Link href="/#rates" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Today&apos;s Scrap Rates</span>
                </Link>
              </li>
              <li>
                <Link href="/#locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Jaipur Localities Served</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Blog & Recycling Guides</span>
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-[11px] text-gray-400">
                  XML Sitemap Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Environmental Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-[#25b05a] flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#25b05a]" /> Recycling & Environmental Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-[#b3cbb6]">
              {environmentalResources.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25b05a] transition-colors block group"
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#25b05a] shrink-0" />
                    </div>
                    <span className="text-[11px] text-gray-400 block">{item.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-[#25b05a] flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#25b05a]" /> Business & Location
            </h3>
            <ul className="space-y-2.5 text-xs text-[#b3cbb6]">
              {businessResources.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25b05a] transition-colors block group"
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#25b05a] shrink-0" />
                    </div>
                    <span className="text-[11px] text-gray-400 block">{item.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b3cbb6]">
          <p>© 2026 Balaji Kabadi Wala — Best Kabadi Wala in Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#25b05a]">
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Licensed Eco-Recycling</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
