import {
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => {
        const title = doc?.title ?? "Untitled post";
        const slug = doc?.slug;

        return {
          locations: [
            {
              title,
              href: slug ? `/blog/${slug}` : "/blog",
            },
            {
              title: "All blog posts",
              href: "/blog",
            },
          ],
        };
      },
    }),
  },
};
