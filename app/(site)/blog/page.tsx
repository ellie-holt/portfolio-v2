import Link from "next/link";
import SectionShell from "@/components/sections/SectionShell";
import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main id="content-start" className="bg-white w-full">
      <SectionShell id="blog" heading="blog" barVariant="first">
        <div className="grid grid-cols-6 px-hpad py-[clamp(2.25rem,6vw,5.5rem)]  border-b min-h-[calc(100dvh-300px)]">
          <div className="w-full max-w-3xl col-start-2 col-end-6">
            {posts.length === 0 ? (
              <p className="bg-white px-r1 py-r1 border border-black/70 border-dashed text-body text-aqua-ink/90">
                No posts yet.
              </p>
            ) : (
              posts.map((post: any) => (
                <article
                  key={post.slug.current}
                  className="pt-r2 md:pt-r3 pb-r2 first:pt-r2 border-black/70 border-b border-dashed "
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group stack-1"
                  >
                    <h2 className="text-title text-aqua-ink leading-tight">
                      {post.title}
                    </h2>
                    <div className="flex items-stretch gap-r0 pl-r0">
                      <span
                        aria-hidden="true"
                        className="w-1 shrink-0 bg-slate-200"
                      />

                      <div className="stack-1 pl-r0">
                        {post.publishedAt ? (
                          <p className="text-body font-mono text-aqua-ink/75">
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              },
                            )}
                          </p>
                        ) : null}

                        <p className="text-action inline-flex items-center gap-r0 font-semibold underline-accent group-hover:decoration-transparent lowercase transition-[text-decoration]">
                          <span>read post</span>
                          <RoughArrow
                            {...CTA_ROUGH_ARROW_PROPS}
                            className="w-7 h-7 arrow-cta-motion"
                          />
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
