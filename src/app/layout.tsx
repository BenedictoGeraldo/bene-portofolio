// import EntranceAnimation from '@/components/common/EntranceAnimation';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import ReactLenis from 'lenis/react';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Cinzel } from 'next/font/google';

import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL ||
      'https://benedicto-geraldo-doa-dawa.vercel.app',
  ),

  title: {
    default: 'Benedicto Geraldo Doa Dawa - Web Developer',
    template: '%s | Benedicto Geraldo Doa Dawa',
  },

  description:
    'Web Developer yang berfokus pada pengembangan website modern, scalable, dan responsif untuk membantu menyelesaikan kebutuhan dan permasalahan pengguna secara efektif.',

  keywords: [
    'benedicto geraldo doa dawa',
    'web developer indonesia',
    'next js developer',
    'react developer',
    'laravel developer',
    'portfolio web developer',
  ],

  authors: [{ name: 'Benedicto Geraldo Doa Dawa' }],
  creator: 'Benedicto Geraldo Doa Dawa',

  openGraph: {
    title: 'Benedicto Geraldo Doa Dawa Portfolio',
    description:
      'Web Developer yang berfokus pada pengembangan website modern, scalable, dan responsif',
    url:
      process.env.NEXT_PUBLIC_URL ||
      'https://benedicto-geraldo-doa-dawa.vercel.app',
    siteName: 'Benedicto Geraldo Doa Dawa Portfolio',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Benedicto Geraldo Doa Dawa Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Benedicto Geraldo Doa Dawa Portfolio',
    description:
      'Web Developer yang berfokus pada pengembangan website modern, scalable, dan responsif',
    images: ['/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="id" className="dark" suppressHydrationWarning>
        <body className={`${cinzel.variable} font-hanken-grotesk antialiased`}>
          {/* <EntranceAnimation /> */}

          <ReactLenis root>
            <Navbar />

            <main>{children}</main>

            <Footer />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
