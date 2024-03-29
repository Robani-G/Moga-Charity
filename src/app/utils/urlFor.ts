import { client } from "./configSanity";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}
export default urlFor;
