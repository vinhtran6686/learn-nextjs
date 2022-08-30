export async function loadPosts(url:string) {
  // Call an external API endpoint to get posts
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const res = await fetch(`https://api.tvmaze.com/search/shows${url}`);
  const data = await res.json();

  return data;
} 