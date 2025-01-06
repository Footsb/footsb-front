import type { Metadata } from 'next';
import { Noto_Sans_KR, Oswald } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { SearchBox } from '@/components/molecules';
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
    <html lang="en" id="root">
      <body
        className={`${notoSansKr.variable} ${oswald.variable} relative max-w-[390px] min-w-[280px] mx-auto overscroll-none`}
      >
        <SearchBox />
        <main>{children}</main>
        <Gnb />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          closeButton={true}
          rtl={false}
          draggable
          stacked
          closeOnClick
          theme="light"
        />
      </body>
    </html>
  );
}
