import Link from "next/link";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main id="content-start" className="w-full bg-white">
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-black  z-1">
        <h1 className="font-mono text-lg">
          <span aria-hidden="true">// </span>blog
        </h1>
      </div>

      <section className="px-hpad py-r3 border-b border-black min-h-[calc(100dvh-300px)]">
        <div className="w-full max-w-3xl">
          {posts.length === 0 ? (
            <p className="border border-dashed border-black/70 bg-white px-r1 py-r1 text-aqua-ink/90">
              No posts yet.
            </p>
          ) : (
            posts.map((post: any) => (
              <article
                key={post.slug.current}
                className="py-r2 border-b border-dashed border-black/70 transition-colors duration-150 hover:bg-aqua-100/20"
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group block border-l-4 border-transparent pl-r1 md:pl-r2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-500"
                >
                  <h2 className="font-mono text-[clamp(1.4rem,2.8vw,2rem)] font-bold text-aqua-ink transition-colors group-hover:text-aqua-600">
                    {post.title}
                  </h2>
                  {post.publishedAt ? (
                    <p className="mt-r0 pl-r0 font-mono text-sm md:text-base text-aqua-ink/75">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  ) : null}
                  <p className="mt-r1 pl-r0 inline-flex items-center gap-r0 text-sm md:text-base font-semibold lowercase underline decoration-1 decoration-aqua-500/70 underline-offset-4 group-hover:decoration-transparent transition-all">
                    read post →
                  </p>
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
