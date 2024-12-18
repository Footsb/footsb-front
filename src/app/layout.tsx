import type { Metadata } from 'next';
import { Noto_Sans_KR, Oswald } from 'next/font/google';
import './globals.css';
import { Gnb } from '@/components/organism';

const notoSansKr = Noto_Sans_KR({
  variable: '--noto-sans_KR-bold',
  subsets: ['latin'],
  fallback: ['system-ui'],
});

const oswald = Oswald({
  variable: '--oswald',
  style: 'normal',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'FOOTSB',
  description: 'SOCCER and FOOTBALL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.variable} ${oswald.variable}`}>
        <Gnb />
        {children}
      </body>
    </html>
  );
}
