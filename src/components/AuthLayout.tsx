import { Outfit } from 'next/font/google';
import React from 'react';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  );
};

export default AuthLayout;
