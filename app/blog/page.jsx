import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '../../data/blogs';
import JsonLd from '../../components/JsonLd';
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react';

export const metadata = {
  title: 'Scrap & Recycling Blog | Balaji Kabadi Wala Jaipur',
  description: 'Read expert guides on scrap rates, lead-acid battery prices, copper identification, e-waste recycling, and paper raddi rates in Jaipur.',
  alternates: {
    canonical: 'https://balajibestkabadiwala.in/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://balajibestkabadiwala.in/blog',
    title: 'Scrap & Recycling Blog | Balaji Kabadi Wala Jaipur',
    description: 'Read expert guides on scrap rates, lead-acid battery prices, copper identification, e-waste recycling, and paper raddi rates in Jaipur.',
  }
};

export default function BlogIndexPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#0d1f0f]">
      <JsonLd />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="text-xs font-bold text-[#25b05a] uppercase tracking-wider block mb-2">
              📰 Expert Guides & Market News
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white font-['Bebas_Neue'] uppercase">
              Jaipur Scrap & <span className="text-[#25b05a]">Recycling Blog</span>
            </h1>
            <p className="text-base text-[#b3cbb6] mt-3">
              Stay updated with today&apos;s scrap prices, eco tips, and material recycling guides in Rajasthan.
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <a
              href="https://www.trustpilot.com/evaluate/balajibestkabadiwala.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#142c17] border border-[#25b05a]/40 text-[#25b05a] text-sm font-bold hover:bg-[#25b05a]/20 transition-all shadow-md"
            >
              <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              <span>Review us on Trustpilot</span>
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="bg-[#142c17] rounded-3xl overflow-hidden border border-[#25b05a]/20 hover:border-[#25b05a] transition-all flex flex-col group shadow-xl"
            >
              {/* Post Image */}
              <div className="relative h-52 w-full overflow-hidden bg-[#0d1f0f]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0d1f0f]/80 backdrop-blur-md text-[#25b05a] text-xs font-bold border border-[#25b05a]/30">
                  {post.tag}
                </div>
              </div>

              {/* Post Info */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#b3cbb6] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#25b05a]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#25b05a]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white font-['Bebas_Neue'] uppercase leading-snug tracking-wide group-hover:text-[#25b05a] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-[#b3cbb6] mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#25b05a] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
