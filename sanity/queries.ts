import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    body
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    publishedAt
  }
`;
