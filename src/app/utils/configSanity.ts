import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "m1y6cvt0",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
