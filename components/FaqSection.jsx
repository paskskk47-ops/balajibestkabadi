import Link from 'next/link';
import { HelpCircle, Phone, ArrowRight, ShieldCheck, Scale, Banknote, MapPin, Recycle } from 'lucide-react';

export default function FaqSection({ localityName = "Jaipur" }) {
  const faqs = [
    {
      question: `How do I book Balaji Kabadi Wala for doorstep scrap pickup in ${localityName}?`,
      answer: `Booking is simple and fast! You can call our direct executive helpline at 95097 52549 or click the WhatsApp booking button on our website. Share your address in ${localityName} and specify your scrap materials (newspaper raddi, plastic, copper, iron, appliances). Our nearest pickup team will schedule convenient doorstep collection.`
    },
    {
      question: `Are there any hidden doorstep pickup, handling, or vehicle charges in ${localityName}?`,
      answer: `No! Our doorstep scrap collection service is FREE across ${localityName} and all 28 Jaipur localities. We do not charge vehicle transportation or handling fees.`
    },
    {
      question: `How do you ensure accurate weighing?`,
      answer: `Balaji Kabadi Wala uses certified electronic digital weighing scales. The exact weight in decimal kilograms is displayed on a clear digital screen directly in front of you during collection.`
    },
    {
      question: `What payment options are available upon scrap collection in ${localityName}?`,
      answer: `We offer instant spot payments immediately upon weighing. You can choose instant digital payments via UPI (Google Pay, PhonePe, Paytm, BHIM) or receive cash on the spot.`
    },
    {
      question: `What scrap materials do you accept for buying in ${localityName}?`,
      answer: `We buy all common recyclable scrap items including: Old Newspapers (Raddi), Cardboard Boxes, Office Paper, Plastic Containers/Chairs, Heavy Copper Wire, AC Copper Pipes, Yellow Brass Utensils, Aluminium Cans/Window Frames, Iron & Steel, E-Waste (laptops, CPUs, TVs, printers), and Home Appliances (ACs, Refrigerators, Washing Machines).`
    },
    {
      question: `Do you provide commercial office scrap clearance & document shredding in ${localityName}?`,
      answer: `Yes! We provide bulk corporate office, bank, school, retail store, and workshop scrap removal across ${localityName}, with itemized weight receipts and document shredding for sensitive records.`
    },
    {
      question: `What happens to the scrap after it is collected from ${localityName}?`,
      answer: `All collected scrap is systematically sorted and transported to licensed recycling facilities in and around Jaipur, ensuring materials are processed cleanly and kept out of landfills.`
    },
    {
      question: `What is the minimum weight required for doorstep scrap pickup in ${localityName}?`,
      answer: `For general household scrap (paper raddi, plastic, metal), we recommend a minimum cumulative weight of around 15–20 kg to optimize pickup vehicle routes in ${localityName}. However, for heavy items like old ACs, refrigerators, copper wire, or brass, there is no minimum weight limit.`
    }
  ];

  return (
    <section id="faq" className="py-16 bg-[#081509] border-t border-[#22c55e]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block mb-2">
            ❓ Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
            Doorstep Scrap Pickup FAQs in <span className="text-[#22c55e]">{localityName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Everything you need to know about scrap rates, digital scale weighing, and doorstep collection in {localityName}.
          </p>
        </div>

        {/* 8 Detailed FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#142e18] p-6 rounded-2xl border border-[#22c55e]/30 hover:border-[#22c55e] transition-all space-y-2 shadow-lg"
            >
              <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3 font-['Plus_Jakarta_Sans']">
                <HelpCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#142e18] via-[#16381b] to-[#142e18] border border-[#22c55e]/50 text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Have More Questions or Ready to Book in <span className="text-[#22c55e]">{localityName}</span>?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
            Our customer service team is available from 7:00 AM to 9:00 PM every day to answer queries and schedule instant doorstep pickups across Jaipur!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:9509752549"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#22c55e] text-[#081509] font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#16a34a] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Executive: 95097 52549</span>
            </a>
            <a
              href={`https://wa.me/919509752549?text=Hi,%20I%20have%20a%20question%20about%20scrap%20pickup%20in%20${encodeURIComponent(localityName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#081509] border border-[#22c55e]/60 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#142e18] transition-all"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-4 h-4 text-[#22c55e]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
