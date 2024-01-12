'use server';

export const fetchPosts = async (page: number) => {
  
  try {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
