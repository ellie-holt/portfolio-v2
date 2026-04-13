import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionShell from "@/components/sections/SectionShell";
import { blogPortableTextComponents } from "@/components/portabletext/blogPortableTextComponents";
import RoughArrow from "@/components/ui/RoughArrow";
import { CTA_ROUGH_ARROW_PROPS } from "@/components/ui/roughComponentPresets";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/queries";
import { sanityFetch } from "@/sanity/live";
import StickyBlogPostNav from "./StickyBlogPostNav";

type Params = Promise<{ slug: string }>;

type Post = {
  title: string;
  body: any;
  publishedAt?: string;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });

  return data as Array<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
    stega: false,
  });

  const post = data as Post | null;

  return {
    title: post?.title ?? "Post not found",
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  const post = data as Post | null;

  if (!post) {
    notFound();
  }

  return (
    <main id="content-start" className="bg-white w-full">
      <SectionShell
        id="blog-post"
        heading={"blog / " + post.title.toLowerCase()}
        barVariant="first"
      >
        <article className="grid grid-cols-6 px-hpad py-[clamp(2.25rem,6vw,5.5rem)] border-black border-b min-h-[calc(100dvh-300px)]">
          <aside className="hidden lg:block lg:col-start-6 xl:col-start-5 col-span-full row-start-1 mt-r2 lg:ml-8 xl:ml-28">
            <StickyBlogPostNav />
          </aside>
          <div className="col-start-2 col-end-6 row-start-1 w-full max-w-5xl grid grid-cols-subgrid">
            <header className="stack-1 pb-r2 border-black/70 border-b border-dashed col-start-1 col-end-5 lg:col-end-4">
              <h1 className="text-title text-aqua-ink leading-tight">
                {post.title}
              </h1>
              {post.publishedAt ? (
                <div className="flex items-stretch gap-r0 pl-r0">
                  <span
                    aria-hidden="true"
                    className="w-1 shrink-0 bg-slate-200"
                  />
                  <p className="text-body pl-r0 font-mono text-aqua-ink/75">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              ) : null}
            </header>

            <div className="pt-r1 col-start-1 col-end-5">
              <div className="max-w-[72ch] pb-r2 md:pb-r3">
                <PortableText
                  value={post.body}
                  components={blogPortableTextComponents}
                />
              </div>
            </div>

            <div className="mt-r4 pt-r2 border-black/70 border-t border-dashed col-start-1 col-end-5 lg:col-end-4">
              <Link
                href="/blog"
                className="group text-action inline-flex items-center gap-r0 font-semibold underline-accent hover:decoration-transparent lowercase transition-[text-decoration]"
              >
                <span className="inline-flex w-7 h-7 shrink-0 items-center justify-center">
                  <RoughArrow
                    {...CTA_ROUGH_ARROW_PROPS}
                    direction="left"
                    className="w-7 h-7 transition-transform duration-200 ease-out group-hover:-translate-x-1"
                  />
                </span>
                <span>return to all posts</span>
              </Link>
            </div>
          </div>
        </article>
      </SectionShell>
    </main>
  );
}
