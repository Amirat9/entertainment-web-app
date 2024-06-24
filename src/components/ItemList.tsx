'use client';
import React from 'react';
import ItemCard from './ItemCard';
import useFetchContent from '../hooks/useFetchContent';

const ItemList = ({ type, bookmark }: { type: string; bookmark?: boolean }) => {
  const { data, setData } = useFetchContent(type, bookmark);
  const handleBookmarkToggle = async (id: string) => {
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error('Error updating bookmark status');
      }

      const updatedItem = await res.json();
      setData((prevData: any[]) =>
        prevData.map((item) =>
          item._id === updatedItem._id ? updatedItem : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h2 className='self-start mb-6 text-xl text-white tracking-[0.3px] sm:tracking-normal sm:heading-l'>
        {type}
      </h2>
      <div className='grid grid-cols-2 gap-y-4 gap-x-[15px] md:grid-cols-3 sm:gap-x-[39px] sm:gap-y-6 lg:gap-x-10 lg:gap-y-8 lg:grid-cols-4'>
        {data
          .filter((item) => {
            if (type === 'Recommended for you') {
              return item.isTrending !== true;
            }

            if (type === 'Movies') {
              type = 'Movie';
            } else if (bookmark === true) {
              return item.category === type && item.isBookmarked === true;
            } else {
              return item.category === type && item.isTrending !== true;
            }
          })
          .map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
              thumbnail={item.thumbnail}
              isBookmarked={item.isBookmarked}
              isTrending={item.isTrending}
              type={type}
              onBookmarkToggle={() => handleBookmarkToggle(item._id)}
            />
          ))}
      </div>
    </section>
  );
};

export default ItemList;
