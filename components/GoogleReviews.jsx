import { Star, CheckCircle, ExternalLink } from 'lucide-react';

const gmbReviews = [
  {
    name: "Rajesh Sharma",
    location: "Mansarovar, Jaipur",
    rating: 5,
    date: "Recent Customer",
    review: "Booked them for selling old newspaper raddi and iron scrap. Their team arrived on time with an electronic digital scale. Weighed accurately and paid immediately via PhonePe on the spot.",
    initials: "RS",
    color: "bg-[#22c55e]"
  },
  {
    name: "Meenakshi Khandelwal",
    location: "Vaishali Nagar, Jaipur",
    rating: 5,
    date: "Recent Customer",
    review: "Clean and professional doorstep scrap pickup in Vaishali Nagar. The executive weighed everything on a digital scale in front of me and gave fair rates for copper wire and plastic scrap.",
    initials: "MK",
    color: "bg-[#0d7a70]"
  },
  {
    name: "Vikramaditya Singh",
    location: "Malviya Nagar, Jaipur",
    rating: 5,
    date: "Recent Customer",
    review: "Transparent rates without the weighing issues common with traditional street hawkers. Sold an old split AC and cardboard shipping cartons. Received instant UPI payout before they loaded the van.",
    initials: "VS",
    color: "bg-[#fbbf24]"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-[#0f2612]/70 border-y border-[#22c55e]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142e18] border border-[#22c55e]/40 text-[#22c55e] text-xs font-bold uppercase mb-3">
              <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
              <span>Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Feedback from <span className="text-[#22c55e]">Jaipur Residents</span>
            </h2>
          </div>

          {/* GMB Rating Box */}
          <a
            href="https://share.google/sZlWMRMg87CrNgT66"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#142e18] border border-[#22c55e]/40 flex items-center gap-4 hover:border-[#22c55e] transition-all group shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-xl text-[#4285F4] shadow-md border-2 border-[#22c55e]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#fbbf24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbf24]" />
                ))}
              </div>
              <p className="text-sm font-extrabold text-white mt-0.5 font-['Plus_Jakarta_Sans'] flex items-center gap-1.5">
                <span>Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#22c55e] group-hover:scale-110 transition-transform" />
              </p>
            </div>
          </a>
        </div>

        {/* Clean 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gmbReviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#142e18] border border-[#22c55e]/30 hover:border-[#22c55e] transition-all space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* User Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${rev.color} text-[#081509] font-black flex items-center justify-center text-sm shadow-md`}>
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-gray-400">{rev.location}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">{rev.date}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#fbbf24]">
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#fbbf24]" />
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="pt-3 border-t border-[#22c55e]/15 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-[#22c55e] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Doorstep Collection Experience
                </span>
                <a
                  href="https://share.google/sZlWMRMg87CrNgT66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Profile ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
