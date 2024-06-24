import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

const useFetchContent = (type: string, bookmark?: boolean, params?: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/content');
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the data based on the type and bookmark status
  const filteredData = data.filter((item) => {
    if (type === 'Search' && params) {
      return item.title.toLowerCase().includes(params.toLowerCase());
    }
    if (type === 'Movies' && bookmark) {
      return item.category === 'Movie' && item.isBookmarked === true;
    }
    if (type === 'TV Series' && bookmark) {
      return item.category === 'TV Series' && item.isBookmarked === true;
    }
    if (type === 'Trending') {
      return item.isTrending === true;
    }
    if (type === 'Movies') {
      return item.category === 'Movie' && item.isTrending !== true;
    }

    if (type === 'TV Series') {
      return item.category === 'TV Series' && item.isTrending !== true;
    }
    return true;
  });

  return { data: filteredData, loading, error, setData };
};

export default useFetchContent;
