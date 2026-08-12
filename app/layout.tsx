import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Shane Paton - Software Engineering Student',
  description: 'Software Engineering student at Miami University focused on backend engineering and building reliable web systems. Seeking full-time software engineering opportunities beginning January 2027.',
  keywords: ['software engineering', 'backend development', 'web development', 'internship', 'Miami University'],
  authors: [{ name: 'Shane Paton' }],
  creator: 'Shane Paton',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shanepaton.dev',
    title: 'Shane Paton - Software Engineering Student',
    description: 'Software Engineering student at Miami University focused on backend engineering and building reliable web systems.',
    siteName: 'Shane Paton',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shane Paton - Software Engineering Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shane Paton - Software Engineering Student',
    description: 'Software Engineering student at Miami University focused on backend engineering and building reliable web systems.',
    images: ['/images/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
