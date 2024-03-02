import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lo9x06p2",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sktStymkK0aAghtle7wkCZHANuxd0KSSFaF6j5sk1xOnmRrA9lyjuKJ1QUuj0TRlS7PRScW3W9UxLghdbE8ZtMDhsvApYR6AVAqz6NpEmsoduN8hqlz4L8zvcjzbpGZMmXOtqKZIYEIMnz3eA2bg8ELCPgRgmY2OEJmYmGK99HIDFuIqE4iT",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
