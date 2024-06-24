import ItemList from '@/components/ItemList';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-white gap-6 sm:gap-10 lg:justify-start'>
      <Trending />
      <ItemList type='Recommended for you' />
    </main>
  );
}
