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
    if (type === 'Search') {
      // Ensure params is a string and use a case-insensitive search
      if (params && typeof params === 'string') {
        return item.title.toLowerCase().includes(params.toLowerCase());
      }
      return true; // If no search params, return all items
    }
    if (type === 'Trending') {
      return item.isTrending === true;
    }
    if (type === 'Recommended for you') {
      return item.isTrending !== true;
    }

    if (type === 'Movies') {
      return item.category === 'Movie';
    } else if (bookmark === true) {
      return item.category === type && item.isBookmarked === true;
    } else {
      return item.category === type && item.isTrending !== true;
    }
  });

  return { data: filteredData, loading, error, setData };
};

export default useFetchContent;
