import type { Metadata } from 'next';
import { Noto_Sans_KR, Oswald } from 'next/font/google';
import { Gnb } from '@/components/organism';
import './globals.css';

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
        <main className="my-[44px] mx-auto py-3 px-8 max-w-[1920px]">
          {children}
        </main>
      </body>
    </html>
  );
}
