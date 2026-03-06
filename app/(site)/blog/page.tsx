import Link from "next/link";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main>
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <article key={post.slug.current}>
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </article>
      ))}
    </main>
  );
}
