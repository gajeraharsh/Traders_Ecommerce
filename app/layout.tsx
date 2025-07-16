import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopVerse - Premium eCommerce for Fashion, Electronics & Home',
  description: 'Discover the latest in fashion, electronics, and home goods. Shop premium products with fast shipping, easy returns, and excellent customer service.',
  keywords: 'ecommerce, fashion, electronics, home goods, online shopping, premium products',
  authors: [{ name: 'ShopVerse Team' }],
  creator: 'ShopVerse',
  publisher: 'ShopVerse',
  openGraph: {
    title: 'ShopVerse - Premium eCommerce Store',
    description: 'Discover the latest in fashion, electronics, and home goods.',
    url: 'https://shopverse.com',
    siteName: 'ShopVerse',
    images: [
      {
        url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        width: 1200,
        height: 630,
        alt: 'ShopVerse - Premium eCommerce Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopVerse - Premium eCommerce Store',
    description: 'Discover the latest in fashion, electronics, and home goods.',
    images: ['https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://shopverse.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ShopVerse',
              url: 'https://shopverse.com',
              description: 'Premium eCommerce for Fashion, Electronics & Home',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://shopverse.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}