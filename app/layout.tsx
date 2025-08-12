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
  title: 'Elvis Impresario - Spectacles Tribute Elvis Presley | Shows & Événements',
  description: 'Découvrez les meilleurs spectacles tribute à Elvis Presley. Réservez votre show authentique avec costumes d\'époque, de Tupelo à Las Vegas. Disponible pour événements privés et concerts publics en France.',
  keywords: 'Elvis Presley, tribute, spectacle, impresario, concert, Vegas, rock and roll, événement privé, booking',
  authors: [{ name: 'Elvis Impresario' }],
  creator: 'Elvis Impresario',
  publisher: 'Elvis Impresario',
  robots: 'index, follow',
  openGraph: {
    title: 'Elvis Impresario - Spectacles Tribute Elvis Presley',
    description: 'Les meilleurs spectacles tribute à Elvis Presley. Shows authentiques avec costumes d\'époque.',
    url: 'https://elvis-impresario.fr',
    siteName: 'Elvis Impresario',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elvis Impresario - Spectacles Tribute',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elvis Impresario - Spectacles Tribute Elvis Presley',
    description: 'Les meilleurs spectacles tribute à Elvis Presley',
    creator: '@elvis_impresario',
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