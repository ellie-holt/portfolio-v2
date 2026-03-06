import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jtd931ew",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: true,
});
