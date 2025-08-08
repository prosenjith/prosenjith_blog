import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async () => {
  const posts = (await getCollection("posts")).filter(p => !p.data.draft)
    .sort((a,b)=>b.data.pubDate.getTime()-a.data.pubDate.getTime());
  return rss({
    title: "Shuvo’s Notes",
    description: "Software Engineering • Android • Programming • Physics",
    site: "https://your-domain.com",
    items: posts.map(p => ({
      link: `/posts/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
    })),
  });
};
