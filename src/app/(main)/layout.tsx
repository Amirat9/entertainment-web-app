import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import { connectToMongoDB } from '@/lib/db';

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
  connectToMongoDB();
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <div className='container p-0 sm:space-y-8 sm:p-6 sm:pb-14 lg lg:flex lg:gap-9'>
          <Navbar />
          <div className='space-y-6 sm:space-y-8'>
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
