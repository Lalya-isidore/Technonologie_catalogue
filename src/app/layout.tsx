import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Noto_Sans_Arabic, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tsf-technology.com'),
  title: {
    default: 'TSF Technology — Expert en Communication Internet Industrielle Fiable',
    template: '%s | TSF Technology',
  },
  description:
    'Fournisseur européen de switches Ethernet industriels, routeurs 4G/5G et solutions IoT. IP40, -40°C à +75°C, support 24/7.',
  openGraph: {
    type: 'website',
    siteName: 'TSF Technology',
    locale: 'fr_FR',
    images: [
      {
        url: '/api/og?title=TSF+Technology&subtitle=Expert+en+Communication+Internet+Industrielle+Fiable',
        width: 1200,
        height: 630,
        alt: 'TSF Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoArabic.variable} ${spaceMono.variable} antialiased bg-white text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
