import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '../../../data/blogs';
import JsonLd from '../../../components/JsonLd';
import { Calendar, Clock, ArrowLeft, Phone, Share2, ChevronRight, MapPin, Star } from 'lucide-react';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return {};

  const pageUrl = `https://balajibestkabadiwala.in/blog/${post.slug}`;
  const imageUrl = `https://balajibestkabadiwala.in${post.image || '/saurabh_kabadi_wala_hero.webp'}`;

  return {
    title: `${post.title} | Balaji Kabadi Wala Jaipur`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Balaji Best Kabadi Wala',
      title: `${post.title} | Balaji Kabadi Wala Jaipur`,
      description: post.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Balaji Kabadi Wala Jaipur`,
      description: post.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-10 lg:py-16 bg-[#081509] text-white">
      <JsonLd blog={post} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* VISIBLE BREADCRUMB NAVIGATION */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/blog" className="hover:text-[#22c55e] transition-colors">Blog & Guides</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-[#22c55e] font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Tag & Date */}
        <div className="flex items-center gap-4 text-xs text-gray-300 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#22c55e]/20 text-[#22c55e] font-bold">
            {post.tag}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#22c55e]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
            {post.readTime}
          </span>
        </div>

        {/* SINGLE PRIMARY H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight tracking-tight mb-6 text-white">
          {post.h1 || post.title}
        </h1>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 border border-[#22c55e]/30 shadow-2xl bg-[#142e18]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article HTML Body Content */}
        <div
          className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#142e18] border border-[#22c55e]/30 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-white">
            Sell Battery & Metal Scrap in Jaipur Today
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
            Get instant free doorstep pickup with certified electronic digital weighing scales & immediate cash/UPI payout.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9509752549"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-[#081509] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#081509]" />
              <span>Call Executive: 95097 52549</span>
            </a>
            <a
              href="https://www.trustpilot.com/evaluate/balajibestkabadiwala.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#081509] border border-[#22c55e]/50 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:bg-[#122815]"
            >
              <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              <span>Review us on Trustpilot</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
