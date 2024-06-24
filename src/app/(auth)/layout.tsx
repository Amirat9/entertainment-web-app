import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';
import logo from '../../../public/assets/logo.svg';
import Image from 'next/image';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Entertainment Web App',
  description: 'Streaming service designed by frontendmentor.io website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <div className='container flex flex-col items-center justify-center pt-12 sm:pt-[88px] lg:pt-20'>
          <div>
            <Image
              src={logo}
              alt='logo icon'
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
