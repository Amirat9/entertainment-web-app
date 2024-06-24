import React from 'react';
import ItemList from '@/components/ItemList';
const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-white gap-6 sm:gap-12 lg:gap-10 lg:justify-start'>
      <ItemList
        type='Movies'
        bookmark={true}
      />
      <ItemList
        type='TV Series'
        bookmark={true}
      />
    </main>
  );
};

export default page;
