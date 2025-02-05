import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/animations/scroll-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newton Homes - Luxury Living Redefined',
  description: 'Experience luxury living with our exclusive collection of properties',
  metadataBase: new URL('https://newton-homes.vercel.app'), // use 'http://thenewtonhomes.com' when deploying
  openGraph: {
    title: 'Newton Homes - Luxury Living Redefined',
    description: 'Experience luxury living with our exclusive collection of properties',
    images: [
      {
        url: './images/home.png',
        width: 1200,
        height: 630,
        alt: 'Newton Homes - Luxury Property Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newton Homes - Luxury Living Redefined',
    description: 'Experience luxury living with our exclusive collection of properties',
    images: [
      './images/home.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="pt-[72px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}