import { PortableText } from "@portabletext/react";
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
    <article>
      <h1>{post.title}</h1>
      <div className="prose">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
