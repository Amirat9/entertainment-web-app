import ItemList from '@/components/ItemList';
import React from 'react';

const Movies = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-white lg:justify-start'>
      <ItemList type='Movies' />
    </main>
  );
};

export default Movies;
