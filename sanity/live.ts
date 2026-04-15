import { defineLive } from "next-sanity/live";
import { client } from "@/sanity/client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2024-06-01",
  }),
  serverToken: process.env.SANITY_API_READ_TOKEN,
  // Safe to reuse the same read token here - browserToken is only sent to the client when draft mode is active
  // The token must be viewer-level (read-only) or lower
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
