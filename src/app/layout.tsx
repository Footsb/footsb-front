import type { Metadata } from 'next';
import { Noto_Sans_KR, Oswald } from 'next/font/google';
import { Gnb } from '@/components/organism';
import './globals.css';
import { SearchBox } from '@/components/molecules';

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
    <html lang="en" id="root">
      <body
        className={`${notoSansKr.variable} ${oswald.variable} relative h-screen max-w-[390px] min-w-[280px] mx-auto`}
      >
        <SearchBox />
        <main>{children}</main>
        <Gnb />
      </body>
    </html>
  );
}
