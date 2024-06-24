'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import ItemCard from './ItemCard';
import useFetchContent from '@/hooks/useFetchContent';

const Trending = () => {
  const { data } = useFetchContent('Trending', true || false);
  return (
    <section className='w-full'>
      <h2 className='self-start mb-6 text-xl text-white tracking-[0.3px] sm:tracking-normal sm:heading-l'>
        Trending
      </h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-2/3 lg:basis-2/5'
            >
              <ItemCard
                title={item.title}
                year={item.year}
                category={item.category}
                rating={item.rating}
                thumbnail={item.thumbnail}
                isBookmarked={item.isBookmarked}
                isTrending={item.isTrending}
                type='Trending'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Trending;
