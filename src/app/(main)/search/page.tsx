'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import ItemList from '@/components/ItemList';

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('query') || '';
  console.log(search);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-white lg:justify-start'>
      <ItemList
        type='Search'
        params={search}
      />
    </main>
  );
};

export default Search;
