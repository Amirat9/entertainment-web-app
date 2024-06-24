'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import icons from '@/lib/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import searchBarStyles from '@/styles/searchBar';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      router.push('/');
    } else {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      className={cn(searchBarStyles.form)}
      onSubmit={handleSubmit}
    >
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
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
