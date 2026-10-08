import './globals.css';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://balajibestkabadiwala.in'),
  title: {
    default: 'Balaji Kabadi Wala Jaipur | Free Doorstep Scrap Pickup | Call 95097 52549',
    template: '%s | Balaji Kabadi Wala Jaipur'
  },
  description: "Jaipur's most trusted kabadiwala — Balaji Kabadi Wala. Free doorstep scrap pickup in Mansarovar, Vaishali Nagar, Malviya Nagar & 25+ areas. Digital weighing, instant UPI/cash payment. Call: 95097 52549.",
  keywords: [
    'kabadi wala jaipur', 'scrap dealer jaipur', 'raddi pickup jaipur',
    'kabadiwala near me jaipur', 'scrap rate jaipur', 'doorstep scrap pickup jaipur',
    'iron scrap jaipur', 'copper scrap jaipur', 'e-waste jaipur', 'newspaper raddi jaipur'
  ],
  authors: [{ name: 'Balaji Kabadi Wala' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://balajibestkabadiwala.in/',
    siteName: 'Balaji Kabadi Wala',
    title: 'Balaji Kabadi Wala Jaipur | Free Doorstep Scrap Pickup',
    description: "Jaipur's premier digital scrap pickup service. Free doorstep collection, certified digital weighing, instant UPI/cash payment.",
    images: [
      {
        url: 'https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Balaji Kabadi Wala Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balaji Kabadi Wala Jaipur | Free Doorstep Scrap Pickup',
    description: 'Free doorstep scrap pickup in Jaipur with digital weighing & instant UPI payment. Call 95097 52549.',
    images: ['https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.webp'],
  },
  alternates: {
    canonical: 'https://balajibestkabadiwala.in/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon-v2.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-v2.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#081509] text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
