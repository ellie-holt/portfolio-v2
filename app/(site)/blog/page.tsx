import Link from "next/link";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main id="content-start" className="bg-white w-full">
      <div className="section-bar full-bleed-bar border-t-0">
        <h1 className="text-section-heading">
          <span aria-hidden="true">// </span>blog
        </h1>
      </div>

      <section className="px-hpad py-r3 border-black border-b min-h-[calc(100dvh-300px)]">
        <div className="w-full max-w-3xl">
          {posts.length === 0 ? (
            <p className="bg-white px-r1 py-r1 border border-black/70 border-dashed text-body text-aqua-ink/90">
              No posts yet.
            </p>
          ) : (
            posts.map((post: any) => (
              <article
                key={post.slug.current}
                className="hover:bg-aqua-100/20 py-r2 border-black/70 border-b border-dashed transition-colors duration-150"
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group block pl-r1 md:pl-r2 border-transparent border-l-4 focus-visible:outline-2 focus-visible:outline-aqua-500 focus-visible:outline-offset-2"
                >
                  <h2 className="text-title text-aqua-ink group-hover:text-aqua-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.publishedAt ? (
                    <p className="text-body mt-r0 pl-r0 font-mono text-aqua-ink/75">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  ) : null}
                  <p className="text-action inline-flex items-center gap-r0 mt-r1 pl-r0 font-semibold decoration-1 decoration-aqua-500/70 group-hover:decoration-transparent underline underline-offset-4 lowercase transition-all">
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
