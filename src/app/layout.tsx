import EntranceAnimation from '@/components/common/EntranceAnimation';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import { Cinzel } from 'next/font/google';

import './globals.css';

export const metadata = getMetadata('/');
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cinzel',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={` ${cinzel.variable} font-hanken-grotesk antialiased`}>
          <EntranceAnimation />
          <ReactLenis root>
            <Navbar />
            {children}
            <Footer />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
