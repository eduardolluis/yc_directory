declare module "@sanity/image-url" {
  import { SanityClient } from "@sanity/client";
  import {
    ImageUrlBuilder,
    SanityImageSource,
  } from "@sanity/image-url/lib/types/types";

  export default function imageUrlBuilder(client: SanityClient): {
    image(source: SanityImageSource): ImageUrlBuilder;
  };
}
export {};
