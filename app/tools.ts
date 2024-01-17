export const fetchPosts = async (page: number = 1) => {
  try {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=9&order=popularity`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
