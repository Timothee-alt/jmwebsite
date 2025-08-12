import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Montserrat, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebasNeue = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-bebas' 
});
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700']
});
const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elvis-impresario.fr'),
  title: 'Jessy Morgan - Animateur et impresario Elvis',
  description: 'Animateur et impresario Elvis Presley',
  keywords: 'Elvis Presley, tribute, spectacle, impresario, concert, Vegas, rock and roll, événement privé, booking, animateur, impresario, jessy morgan',
  authors: [{ name: 'Jessy Morgan' }],
  creator: 'Jessy Morgan',
  publisher: 'Jessy Morgan',
  robots: 'index, follow',
  openGraph: {
    title: 'Jessy Morgan - Animateur et impresario Elvis',
    description: 'Animateur et impresario Elvis Presley',
    url: 'https://jessymorgan.fr',
    siteName: 'Jessy Morgan',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jessy Morgan - Animateur et impresario Elvis',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jessy Morgan - Animateur et impresario Elvis',
    description: 'Animateur et impresario Elvis Presley',
    creator: '@jessymorgan',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#C8102E',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/elvishead.ico', sizes: '16x16', type: 'image/ico' },
      { url: '/elvishead.ico', sizes: '32x32', type: 'image/ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}