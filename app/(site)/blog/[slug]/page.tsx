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
    <main id="content-start" className="bg-white w-full">
      <div className="section-bar full-bleed-bar px-hpad border-t-0">
        <span aria-hidden="true" className="text-section-heading">
          // {post.title.toLowerCase()}
        </span>
      </div>

      <article className="grid grid-cols-6 px-hpad py-[clamp(2.25rem,6vw,5.5rem)] border-black border-b min-h-[calc(100dvh-300px)]">
        <div className="col-start-2 col-end-6 w-full max-w-4xl">
          <header className="pb-r3 border-black/70 border-b border-dashed">
            <h2 className="font-mono font-bold text-[clamp(1.75rem,4vw,3rem)] text-aqua-ink leading-tight">
              {post.title}
            </h2>
            {post.publishedAt ? (
              <p className="text-body mt-r1 pl-r0 font-mono text-aqua-ink/75">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            ) : null}
          </header>

          <div className="pt-r3 md:pt-r4">
            <div className="md:prose-li:my-2 md:prose-p:my-r2 prose-li:my-1 prose-p:my-r1 prose-headings:mt-r3 md:prose-headings:mb-r2 prose-headings:mb-r1 pb-r2 md:pb-r3 prose-blockquote:border-l-black max-w-[72ch] prose-headings:font-mono prose-a:text-aqua-ink prose-blockquote:text-aqua-ink/80 prose-headings:text-aqua-ink prose-li:text-aqua-ink prose-p:text-aqua-ink prose-strong:text-aqua-ink prose-a:decoration-aqua-500 prose-a:underline-offset-4 prose-p:leading-8 prose prose-zinc md:prose-lg">
              <PortableText value={post.body} />
            </div>

            <div className="mt-r4 pt-r2 border-black/70 border-t border-dashed">
              <Link
                href="/blog"
                className="text-body inline-flex items-center gap-r0 font-mono decoration-1 hover:decoration-transparent underline underline-offset-4 lowercase transition-all"
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
