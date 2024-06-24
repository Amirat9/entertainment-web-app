import React from 'react';
import ItemList from '@/components/ItemList';
import SearchBar from '@/components/SearchBar';
const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-white lg:justify-start'>
      <ItemList type='TV Series' />
    </main>
  );
};

export default page;
