import Link from "next/link";
import SectionShell from "@/components/sections/SectionShell";
import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";
import { POSTS_QUERY } from "@/sanity/queries";
import { sanityFetch } from "@/sanity/live";

type PostPreview = {
  title: string;
  slug: { current: string };
  publishedAt?: string;
};

export default async function Blog() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });
  const posts = data as PostPreview[];

  return (
    <main id="content-start" className="bg-white w-full">
      <SectionShell id="blog" heading="blog" barVariant="first">
        <div className="flex flex-col max-xs:items-center px-r3 3xs:px-10 2xs:px-14 xs:px-0 py-[clamp(2.25rem,6vw,5.5rem)] border-b min-h-[calc(100dvh-300px)] xs:grid xs:grid-cols-6">
          <div className="w-full max-w-3xl xs:col-start-2 xs:col-end-6">
            {posts.length === 0 ? (
              <p className="bg-white px-r1 py-r1 border border-black/70 border-dashed text-body text-aqua-ink/90">
                No posts yet.
              </p>
            ) : (
              posts.map((post) => (
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
