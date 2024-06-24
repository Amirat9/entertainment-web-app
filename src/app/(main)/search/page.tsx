'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ItemList from '@/components/ItemList';

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('query') || '';
  console.log(search);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='flex min-h-screen flex-col items-center justify-between text-white lg:justify-start'>
        <ItemList
          type='Search'
          params={search}
        />
      </main>
    </Suspense>
  );
};

export default Search;
