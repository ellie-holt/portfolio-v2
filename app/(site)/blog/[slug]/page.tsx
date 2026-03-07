import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });

  return (
    <main id="content-start" className="w-full bg-white">
      <div className="w-screen h-10 px-hpad relative -left-10 flex items-center bg-white border-b border-black z-1">
        <h1 className="font-mono text-lg">
          <span aria-hidden="true">// </span>post
        </h1>
      </div>

      <article className="px-hpad grid grid-cols-6 py-[clamp(2.25rem,6vw,5.5rem)] border-b border-black min-h-[calc(100dvh-300px)]">
        <div className="w-full col-start-2 col-end-6 max-w-4xl">
          <header className="pb-r3 border-b border-dashed border-black/70">
            <h2 className="font-mono text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-aqua-ink">
              {post.title}
            </h2>
            {post.publishedAt ? (
              <p className="mt-r1 pl-r0 font-mono text-sm md:text-base text-aqua-ink/75">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            ) : null}
          </header>

          <div className="pt-r3 md:pt-r4">
            <div className="md:pb-r3 pb-r2 prose prose-zinc md:prose-lg max-w-[72ch] prose-headings:font-mono prose-headings:text-aqua-ink prose-p:text-aqua-ink prose-a:text-aqua-ink prose-a:decoration-aqua-500 prose-a:underline-offset-4 prose-strong:text-aqua-ink prose-li:text-aqua-ink prose-blockquote:border-l-black prose-blockquote:text-aqua-ink/80 prose-p:my-r1 md:prose-p:my-r2 prose-p:leading-8 prose-headings:mt-r3 prose-headings:mb-r1 md:prose-headings:mb-r2 prose-li:my-1 md:prose-li:my-2">
              <PortableText value={post.body} />
            </div>

            <div className="mt-r4 pt-r2 border-t border-dashed border-black/70">
              <Link
                href="/blog"
                className="inline-flex items-center gap-r0 font-mono text-sm md:text-base lowercase underline decoration-1 decoration-tang-500 underline-offset-4 hover:decoration-transparent transition-all"
              >
                ← return to all posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
