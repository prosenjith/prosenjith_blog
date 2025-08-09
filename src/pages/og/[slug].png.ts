import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((p) => ({ params: { slug: p.slug } }));
}

export async function GET({ params }) {
  const posts = await getCollection("posts");
  const post = posts.find((p) => p.slug === params.slug);

  const title = post?.data.title ?? "Shuvo’s Notes";
  const desc =
    post?.data.description ??
    "Software Engineering • Android • Programming • Physics";

  // Load a bundled font (no external fetch during build)
  const interRegular = await readFile(
    new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
  );

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "1200px",
          height: "630px",
          padding: "60px",
          background: "#0b0b0b",
          color: "#ffffff",
          flexDirection: "column",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: "56px", fontWeight: 800, lineHeight: 1.1 },
              children: title,
            },
          },
          {
            type: "div",
            props: {
              style: { marginTop: "24px", fontSize: "28px", opacity: 0.85 },
              children: desc,
            },
          },
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                right: "60px",
                bottom: "40px",
                fontSize: "24px",
                opacity: 0.8,
              },
              children: "prosenjith.com",
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng();
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
