import Archive from '@/components/Archive';
import { fetchPosts } from './action';
import { useEffect, useState } from 'react';

async function Home() {

  return (
    <main>
      <Archive />
    </main>
  );
}

export default Home;
