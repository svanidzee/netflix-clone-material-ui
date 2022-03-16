export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    return data?.items.map((item) => {
      // if item.id exists -- id = item.id.videoId, else
      // id = item.id
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.log({ error });
    return [];
  }
};