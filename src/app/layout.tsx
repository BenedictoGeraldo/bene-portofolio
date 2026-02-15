import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
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
