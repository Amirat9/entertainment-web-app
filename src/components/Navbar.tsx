'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import logo from '../../public/assets/logo.svg';
import Image from 'next/image';
import icons from '@/lib/icons';
import navbar from '@/styles/navbar';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className='container flex items-center justify-between text-white bg-semi-dark-blue p-4 sm:py-7 sm:px-6 sm:rounded-[10px] lg:flex-col lg:h-[960px] lg:justify-start lg:rounded-[20px] lg:py-8 lg:px-7'>
        <div>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo icon'
              className='w-[25px] h-5 sm:w-8 sm:h-[25.6px]'
            />
          </Link>
        </div>
        <div className='flex items-center gap-6 lg:flex-col lg:mt-[75px] lg:gap-10'>
          <Link href='/'>
            <Image
              src={icons.navIcons.homeIcon}
              alt='home icon'
              className={
                (cn(navbar.icons.default),
                pathname === '/'
                  ? navbar.icons.active
                  : pathname === '/search'
                  ? navbar.icons.active
                  : '')
              }
            />
          </Link>
          <Link href='/movies'>
            <Image
              src={icons.navIcons.movieIcon}
              alt='movies icon'
              className={
                (cn(navbar.icons.default),
                pathname === '/movies' ? navbar.icons.active : '')
              }
            />
          </Link>
          <Link href='/tv-series'>
            <Image
              src={icons.navIcons.seriesIcon}
              alt='series icon'
              className={
                (cn(navbar.icons.default),
                pathname === '/tv-series' ? navbar.icons.active : '')
              }
            />
          </Link>
          <Link href='/bookmarks'>
            <Image
              src={icons.navIcons.bookmarkIcon}
              alt='bookmark icon'
              className={
                (cn(navbar.icons.default),
                pathname === '/bookmarks' ? navbar.icons.active : '')
              }
            />
          </Link>
        </div>
        <Avatar className='h-6 w-6 outline outline-2 mt-auto sm:w-8 sm:h-8 lg:w-10 lg:h-10'>
          <AvatarImage src='/assets/image-avatar.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
