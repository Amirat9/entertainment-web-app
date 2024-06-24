import React from 'react';
import icons from '@/lib/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import searchBarStyles from '@/styles/searchBar';
const SearchBar = () => {
  return (
    <form className={cn(searchBarStyles.form)}>
      <Image
        src={icons.searchIcon.searchIcon}
        alt='search icon'
        className={cn(searchBarStyles.icon)}
      />
      <input
        type='text'
        name='search'
        id='search'
        className={cn(searchBarStyles.input)}
        placeholder='Search for movies or TV series'
      />
    </form>
  );
};

export default SearchBar;
