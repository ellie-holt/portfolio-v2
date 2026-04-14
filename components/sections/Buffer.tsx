import Link from "next/link";
import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";
import { POSTS_QUERY } from "@/sanity/queries";
import { sanityFetch } from "@/sanity/live";

type PostPreview = {
  title: string;
  slug: { current: string };
  publishedAt?: string;
};

export default async function Buffer() {
  const { data } = await sanityFetch({ query: POSTS_QUERY });
  const posts = data as PostPreview[];
  const latestPost = posts[0] ?? null;

  return (
    <div className="h-52">
      <div className="grid h-full grid-cols-3">
        <div className="hidden 3xs:col-span-1 3xs:flex h-full flex-col items-start justify-start gap-r0 px-hpad pt-r2 bg-aqua-wash border-r border-black/60">
          <p className="font-mono text-label text-aqua-ink/80">let’s talk</p>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center font-semibold text-action underline-accent hover:decoration-transparent transition-all"
          >
            contact me
          </Link>
        </div>

        <div className="col-span-3 3xs:col-span-2 flex h-full flex-col items-start justify-start gap-r0 px-hpad pt-r2 bg-none 3xs:bg-tang-wash">
          <p className="font-mono text-label text-aqua-ink/80">
            latest blog post
          </p>

          {latestPost ? (
            <>
              <Link
                href={`/blog/${latestPost.slug.current}`}
                className="inline-block w-fit font-mono text-[clamp(1.1rem,2.2vw,1.75rem)] font-bold text-aqua-ink leading-tight underline-accent hover:decoration-transparent transition-all"
              >
                {latestPost.title}
              </Link>
              <Link
                href="/blog"
                className="group inline-flex w-fit items-center gap-r0 text-body font-semibold lowercase underline-accent hover:decoration-transparent transition-all"
              >
                <span>view all posts</span>
                <RoughArrow
                  {...CTA_ROUGH_ARROW_PROPS}
                  className="w-7 h-7 arrow-cta-motion"
                />
              </Link>
            </>
          ) : (
            <Link
              href="/blog"
              className="inline-flex w-fit items-center font-semibold text-action underline-accent hover:decoration-transparent transition-all"
            >
              read the blog
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
