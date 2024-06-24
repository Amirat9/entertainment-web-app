'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import bookmarkEmpty from '../../public/assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../public/assets/icon-bookmark-full.svg';
import playIcon from '../../public/assets/icon-play.svg';
import movieCategory from '../../public/assets/icon-category-movie.svg';
import seriesCategory from '../../public/assets/icon-category-tv.svg';
import Image from 'next/image';
import itemCardStyles from '../styles/itemCard';
import { cn } from '@/lib/utils';

type ThumbnailSizes = 'small' | 'medium' | 'large';

interface ItemCardProps {
  title: string;
  year: number;
  rating: string;
  category: string;
  isBookmarked: boolean;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
    trending?: {
      small: string;
      large: string;
    };
  };
  isTrending: boolean;
  type: string;
  onBookmarkToggle: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  year,
  rating,
  category,
  isBookmarked,
  thumbnail,
  isTrending,
  type,
  onBookmarkToggle,
}) => {
  const [imageSize, setImageSize] = useState<ThumbnailSizes>('medium');
  const [imageSource, setImageSource] = useState<string>('');

  const determineImageSource = () => {
    if (isTrending && thumbnail.trending && type === 'Trending') {
      if (window.innerWidth >= 748) {
        setImageSource(thumbnail.trending.large.substring(1));
      } else {
        setImageSource(thumbnail.trending.small.substring(1));
      }
    } else {
      setImageSource(thumbnail.regular[imageSize].substring(1));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImageSize('small');
      } else if (window.innerWidth < 1024) {
        setImageSize('medium');
      } else {
        setImageSize('large');
      }
    };

    handleResize();
    determineImageSource();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    determineImageSource();
  }, [imageSize, isTrending, thumbnail, type]);

  return (
    <Card className='border-none bg-transparent text-white'>
      <CardHeader className='p-0 mb-2 rounded-lg relative'>
        <div className='group/modal relative'>
          {/* Play icon */}
          <div className='inset-0 absolute hidden items-center justify-center group-hover/modal:flex'>
            <div className={itemCardStyles.playIcon}>
              <Image
                src={playIcon}
                alt='play icon'
                width={24}
                height={24}
              />
              <div className='heading-xs'>Play</div>
            </div>
          </div>
          {/* Black Modal */}
          <div className={cn(itemCardStyles.modal)}></div>
          {/* Item picture */}
          {imageSource && (
            <Image
              src={imageSource}
              alt='card picture'
              className='rounded-lg'
              width={700}
              height={700}
              priority
            />
          )}
        </div>
        {/* Bookmark Icon */}
        <div
          className={cn(itemCardStyles.bookmark.backgroundCircle)}
          onClick={() => onBookmarkToggle()}
        >
          <div className={cn(itemCardStyles.bookmark.bookmarkIcon)}>
            <Image
              src={bookmarkEmpty}
              alt='bookmark empty icon'
              className={cn('group-hover/hover:invert w-auto h-auto', {
                hidden: isBookmarked,
              })}
            />
            <Image
              src={bookmarkFull}
              alt='bookmark full icon'
              className={cn('hidden group-hover/hover:invert w-auto h-auto', {
                block: isBookmarked,
              })}
            />
          </div>
        </div>
      </CardHeader>
      {/* Item Description */}
      <CardContent className={cn(itemCardStyles.description.general)}>
        <div className='flex items-center gap-[6px]'>
          <div>{year}</div>
          <div className={itemCardStyles.description.dot}></div>
          <div className='flex items-center justify-center gap-1'>
            <div
              className={cn(itemCardStyles.description.category, {
                hidden: category !== 'Movie',
              })}
            >
              <Image
                src={movieCategory}
                alt='category icon'
                width={16}
                height={16}
              />
              <div>Movie</div>
            </div>
            <div
              className={cn(itemCardStyles.description.category, {
                hidden: category !== 'TV Series',
              })}
            >
              <Image
                src={seriesCategory}
                alt='category icon'
                width={16}
                height={16}
              />
              <div>TV Series</div>
            </div>
          </div>
          <div className={itemCardStyles.description.dot}></div>
          <div>{rating}</div>
        </div>
      </CardContent>
      {/* Title of the item */}
      <CardFooter className='p-0'>
        <CardTitle className='text-sm sm:heading-xs'>{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
